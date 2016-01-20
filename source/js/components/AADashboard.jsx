var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var MyButton = require('./Buttons.jsx');
var DatePanel = require('./DatePanel.jsx');
var DateBox = require('./DateBox.jsx');
var LargeDatePanel = require('./LargeDatePanel.jsx');
var MenuBar = require('./MenuBar.jsx');
var ClientMenuBar = require('./ClientMenuBarWhenLoggedIn.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var PanelBox = require('./PanelBox.jsx');
var Paragraph = require('./Paragraph.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');



var Dashboard = React.createClass({

  // getInitialState: function () {
  //   var allClients = ClientStore.getAllClients();
  //   var allAppointments = AppointmentStore.getAllAppointments();
  //   return {
  //     day: AppointmentStore.getCurrentDay(),
  //     month: AppointmentStore.getCurrentMonthName(),
  //     year:AppointmentStore.getCurrentYear(),
  //     lock:AppointmentStore.getLockDayStatus(),
  //     // appointmentReminder: allAppointments.reminder,
      
  //   };
  // },


  // handleChange: function () {
  //    var allClients = ClientStore.getAllClients();
  //    var allAppointments = AppointmentStore.getAllAppointments();
  //     console.log("CHANGING dashboard");
  //   this.setState({
  //     day: AppointmentStore.getCurrentDay(),
  //     month: AppointmentStore.getCurrentMonthName(),
  //     year:AppointmentStore.getCurrentYear(),
  //     lock:AppointmentStore.getLockDayStatus(),
  //     appointmentReminder:allAppointments.reminder,
  //   });
    
  // },

  // componentDidMount: function () {
  //     ClientStore.addChangeListener(this.handleChange);
  //     AppointmentStore.addChangeListener(this.handleChange);
  // },

  // componentWillUnmount: function () {
  //     ClientStore.removeChangeListener(this.handleChange);
  //     AppointmentStore.removeChangeListener(this.handleChange);
  // },

  bookPractitioner: function(event){
    event.preventDefault();
    console.log('clicked on practitioner button',event);

     AppointmentActionCreators.bookPractitioner();
  },

  cancelApptClicked: function(event){
    event.preventDefault();
     AppointmentActionCreators.cancelAppointment();
  },

  changeReminder: function(event){
    event.preventDefault();
     if (reminderStatus == 'ON'){
     AppointmentActionCreators.addReminder();
   }
  },

  getNextAppointment:function(){

  },

  cancelApptClicked: function(){
   
  },

  changeReminder:function(){
      if (reminderStatus === 'ON') {
        AppointmentStore.setReminderOff();
      } else {
        AppointmentStore.setReminderOn();
      }
  },

  setReminderValues: function(appointmentReminder){
    var reminderStatus = {};

    if (reminderStatus == 'ON'){
      reminderStatus.message = "A text message will be sent to your phone 48 hours prior to this time";
      reminderStatus.color = '$softpink';
      reminderStatus.buttonText = 'Remove Reminder';
    }
    else {
      reminderStatus.message ="A text message will not be sent as a reminder";
      reminderStatus.color = 'gray';
      reminderStatus.buttonText = 'Add Reminder';
    };
    return reminderStatus;
  },

  appointmentsToShow: function(Appointments){
    var orderedAppointments = [];
    console.log('values of appointments as in appointmentstoshow:',Appointments[1]);
  },

  getDateBoxElements: function (appointments) {
    return appointments.map(function (appointment) {
      return (<DateBox key={appointment._id} month={appointment.month} day={appointment.day} time={appointment.time} treatment={appointment.treatment} practitioner={appointment.practitioner} buttonStatus={appointment.reminderFlag} />);
   });
  },

  render: function(){
    // AppointmentActionCreators.getAllAppointments();
    var allAppointments = AppointmentStore.getCurrentUserAppointments();
    console.debug('in dashboard SOURCING appointments',allAppointments);
    appointmentTotal = allAppointments.length;
    var newList = this.appointmentsToShow(allAppointments);
    // var findReminders = this.state.appointmentReminder;
    // var displayReminder = this.setReminderValues(findReminders);

    return (<div className="page-background1">

          <ClientMenuBar />

          <div className="row">
              <div className="columns medium-10 center">
                <br />
                <Header defaultValue="Your Booking Dashboard"/>
                <br />
              </div>
          </div>
          <div className="row">

              <div className="columns medium-4 medium-offset-2">
                    <button onClick={this.bookPractitioner} className="large-button" type="button" ref="practitioner1" id="mich-Button" >Book an Appointment with Dr Micheals</button>
              </div>

              <div className="columns medium-6">  
                    <button onClick={this.bookPractitioner} className="large-button" type="button" ref="practitioner2" id="angelo-button">Book an Appointment with Angelo</button>
              </div>
          </div>


          <div className="row">
            <div className="columns medium-11 medium-offset-1">
                <Paragraph value="Your next appointment is:"/>
            </div>
          </div>

          {this.getDateBoxElements(allAppointments)}
          
          <div className="row">
            <div className="columns medium-11 medium-offset-1">
                <Paragraph value="Your future appointments are:"/>
            </div>
          </div>
     
          <br /><br />
          <div className="row">
              <div className="small-9 columns small-centered">
                  <article className="event">

                  <div className="event-date">
                      <p className="event-month">{allAppointments.dateMonth}</p>
                      <p className="event-day">{allAppointments.dateNumber}</p>
                  </div>

                  <div className="event-desc">
                    <h4 className="event-desc-header">{allAppointments.time}</h4>
                    <p className="event-desc-detail"><span className="event-desc-time"></span>You have an appointment for a {allAppointments.treatment} with {allAppointments.practitioner}</p>
                    <div className="row">
                        <div className="columns small-4">  
                            <MyButton clicked={this.cancelApptClicked} className="cancelAppointment-button" type="button" value="Cancel Appointment"/>
                        </div>
                        <div className="columns small-4">    
                            <p className="tiny-font">reminder message goes here</p>
                           
                            <br />
                        </div>
                        <div className="columns small-4">
                            <MyButton clicked={this.changeReminder} className="tiny-button" type="button" />
                        </div>
                    </div> 
                  </div>

                  </article>
                  <hr />          
              </div>
          </div>
     
     
        
      
        <br /><br />
    </div>);
  }
});

module.exports = Dashboard;
