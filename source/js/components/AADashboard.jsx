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

  getInitialState: function () {
    var allClients = ClientStore.getAllClients();
    var allAppointments = AppointmentStore.getAllAppointments();
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
      appointmentReminder: allAppointments.reminder,
      
    };
  },


  handleChange: function () {
     var allClients = ClientStore.getAllClients();
     var allAppointments = AppointmentStore.getAllAppointments();
      console.log("CHANGING dashboard");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
      appointmentReminder:allAppointments.reminder,
    });
    
  },

  componentDidMount: function () {
      ClientStore.addChangeListener(this.handleChange);
      AppointmentStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
      ClientStore.removeChangeListener(this.handleChange);
      AppointmentStore.removeChangeListener(this.handleChange);
  },

  bookPractitioner: function(event){
    event.preventDefault();
    console.log('in function of Dashboard and about to call ActionCreator');
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

  render: function(){
    var allAppointments = AppointmentStore.getAllAppointments();
    var findReminders = this.state.appointmentReminder;
    var displayReminder = this.setReminderValues(findReminders);

    return (<div className="page-background1">

          <ClientMenuBar />
     
          <div className=" separator">
              <div className="row">
                  <div className="large-12 columns">
                      
                  </div>
              </div>     
          </div>

          <div className="row">
              <div className="columns medium-10 center">
                <br />
                <Header defaultValue="Your Booking Dashboard"/>
                <br />
              </div>
          </div>
          <div className="row">

              <div className="columns medium-4 medium-offset-2">
                    <MyButton clicked={this.bookPractitioner} className="large-button" type="button" value="Book an Appointment with Dr Micheals" id="mich-Button"/>
              </div>

              <div className="columns medium-6">  
                    <MyButton clicked={this.bookPractitioner} className="large-button" type="button" value="Book an Appointment with Angelo" id="angelo-button"/>
              </div>
          </div>


          <div className="row">
            <div className="columns medium-11 medium-offset-1">
                <Paragraph value="Your next appointment is:"/>
            </div>
          </div>

          <DateBox month={allAppointments.dateMonth} day={allAppointments.dateNumber} time={allAppointments.time} message={displayReminder.message} treatment={allAppointments.treatment} practitioner={allAppointments.practitioner} buttonText={displayReminder.buttonText}/>
          
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
                            <Paragraph value={displayReminder.message} className="tiny-font"/>
                           
                            <br />
                        </div>
                        <div className="columns small-4">
                            <MyButton clicked={this.changeReminder} className="tiny-button" type="button" value={displayReminder.buttonText}/>
                        </div>
                    </div> 
                  </div>

                  </article>
                  <hr />          
              </div>
          </div>
     
     
        
      <div className="separator">
        <div className="row">
          <div className="large-12 columns">
          </div>
        </div>
      </div>
      
      <div className="separator">
        <div className="row">
          <div className="large-12 columns">
          </div>
        </div>
      </div>
        <br /><br />
    </div>);
  }
});

module.exports = Dashboard;
