var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var DatePanel = require('./DatePanel.jsx');
var LargeDatePanel = require('./LargeDatePanel.jsx');
var MyButton = require('./Buttons.jsx');
var MenuBar = require('./MenuBar.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var PanelBox = require('./PanelBox.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');


var Dashboard = React.createClass({

  bookPractitioner: function(event){
    event.preventDefault();
     AppointmentActionCreators.bookPractitioner();
  },

  cancelApptClicked: function(event){
    event.preventDefault();
     AppointmentActionCreators.cancelAppointment();
  },

  changeReminder: function(event){
    event.preventDefault();
     AppointmentActionCreators.changeReminder();
  },

  render: function(){

    var targetClient = ClientStore.getAllClients;
    var allAppointments = AppointmentStore.getAllAppointments;

    var reminderMessage;
    var reminderStatus = allAppointments.reminder;

    if (reminderStatus == 'ON'){
      reminderMessage = "A text message will be sent to your phone 48 hours prior to this time";
      reminderColor = '$softpink';
    }
    else {
      reminderMessage ="A text message will not be sent as a reminder";
      reminderColor = 'gray';
    };

    return (<div>
      <MenuBar />
      <div className="row">
        <div className="columns medium-10 center">
            <br />
            <Header defaultValue="Your Booking Dashboard"/>
            <br />
          </div>
      </div>
      <div className="row">
        <div className="columns medium-11 medium-offset-1">
            <Paragraph value="Your next appointment is:"/>
        </div>
      </div>
      <div className="row">
        <div className="columns medium-3 medium-offset-1">
                  
              <LargeDatePanel width="25" text={items.dateNumber + ' ' + items.dateMonth + ' '+ items.dateYear + '    ' + items.time} />
          
        </div>
        <div className="columns medium-2">
              <MyButton clicked={this.cancelApptClicked} className="tiny-button" type="button" value="Cancel Appointment"/>
        </div>
        <div className="columns medium-2 text-message-notice">
                  <Paragraph value={reminderMessage} shade={reminderColor} className="tiny-font"/>
        </div>
        <div className="columns medium-2">
                  <MyButton clicked={this.changeReminder} className="tiny-button" type="button" value="Remove reminder"/>
        </div>
        <div className="columns medium-2">  
        </div>       
      </div>
     
      <br /><br />
      <div className="row">
        <div className="columns medium-11 medium-offset-1">
            <Paragraph value="Your future appointments are:"/>
        </div>
      </div>
     
        <div className="row">
            <div className="columns medium-3 medium-offset-1 ">
          
                  <DatePanel width="30" text={items.dateNumber + ' ' + items.dateMonth + ' '+ items.dateYear + '    ' + items.time}/>
       
            </div>
            <div className="columns medium-2">
                  <MyButton clicked={this.cancelApptClicked} className="tiny-button" type="button" value="Cancel Appointment"/>
            </div>
            <div className="columns medium-2 text-message-notice">
                  <Paragraph value={reminderMessage} shade={reminderColor} className="tiny-font" />
            </div>
            <div className="columns medium-4">
                  <MyButton clicked={this.changeReminder} className="tiny-button" type="button" value="Remove reminder"/>
            </div>
        </div>
        <br />
        <div className="row">
        
            <div className="columns medium-3 medium-offset-1">
                  <DatePanel width="30" text={items.dateNumber + ' ' + items.dateMonth + ' '+ items.dateYear + '    ' + items.time}/>
            </div>
            <div className="columns medium-2">
                  <MyButton clicked={this.cancelApptClicked} className="tiny-button" type="button" value="Cancel Appointment"/>
            </div>
            <div className="columns medium-2 text-message-notice">
                  <Paragraph value={reminderMessage} shade={reminderColor} className="tiny-font"/>
            </div>
            <div className="columns medium-4">
                  <MyButton clicked={this.changeReminder} className="tiny-button" type="button" value="Add reminder"/>
            </div>
 
         </div>
      <div className="separator">
        <div className="row">
          <div className="large-12 columns">
          </div>
        </div>
      </div>
      <div className="row">

        <div className="columns medium-5 medium-offset-1">
              <MyButton clicked={this.bookPractitioner} className="large-button" type="button" value="Book an Appointment with Dr Micheals" id="mich-Button"/>
        </div>

        <div className="columns medium-6">  
              <MyButton clicked={this.bookPractitioner} className="large-button" type="button" value="Book an Appointment with Angelo" id="angelo-button"/>
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
