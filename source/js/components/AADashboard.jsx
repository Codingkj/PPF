var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var MyButton = require('./Buttons.jsx');

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

  bookPractitioner: function(event){
    event.preventDefault();
    console.log('clicked on practitioner button',event);
    if (event.target.id === 'angelo-button'){
       AppointmentActionCreators.bookPractitioner('Angelo');
    } else 
    {
      AppointmentActionCreators.bookPractitioner('Dr. Micheals')
    }
  },

  cancelApptClicked: function(event){
    event.preventDefault();
     AppointmentActionCreators.removeAppointment(event.target.id);
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
      var currentClientEmail = ClientStore.getCurrentClientEmail();
      if (currentClientEmail === appointment.clientEmail){
      return (<DateBox key={appointment._id} id={appointment.id} month={appointment.month} day={appointment.day} time={appointment.time} treatment={appointment.treatment} practitioner={appointment.practitioner} reminder={appointment.reminderFlag} />);
    }
   });
  },

  render: function(){
   
    var allAppointments = AppointmentStore.getCurrentUserAppointments();
    console.debug('in dashboard SOURCING appointments',allAppointments);
    appointmentTotal = allAppointments.length;
    var newList = this.appointmentsToShow(allAppointments);
    

    return (<div >

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
                    <button onClick={this.bookPractitioner} className="large-button" type="button" id="mich-button" >Book an Appointment with Dr Micheals</button>
              </div>

              <div className="columns medium-6">  
                    <button onClick={this.bookPractitioner} className="large-button" type="button" id="angelo-button">Book an Appointment with Angelo</button>
              </div>
          </div>


          <div className="row">
            <div className="columns medium-11 medium-offset-1">
                <Paragraph value="Your next appointment is:"/>
            </div>
          </div>

          {this.getDateBoxElements(allAppointments)}
          
      
      
        <br /><br />
    </div>);
  }
});

module.exports = Dashboard;
