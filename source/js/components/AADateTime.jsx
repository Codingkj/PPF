var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var MyButton = require('./Buttons.jsx');
var MyBreadcrumbs = require('./Breadcrumbs.jsx');
var MenuBar = require('./MenuBar.jsx');
var ClientMenuBar = require('./ClientMenuBarWhenLoggedIn.jsx');
var DisplayTimes = require('./DisplayTimes.jsx');

var Spacer = require('./Spacer.jsx');
var TableMonth = require('./TableMonth.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var AppointmentStore = require('../stores/AppointmentStore.js');

var DateTime= React.createClass({

  
  bookIt:function(event){
    console.log(' got to the BOOK IT function');
    AppointmentActionCreators.addAppointment(event);
    AppointmentActionCreators.clearIsDateChosen();
    AppointmentActionCreators.dashboard();
  },
  
  agreedToPolicy:function(event){
    console.log('got to agreedToPolicy and event is',event);
    AppointmentActionCreators.agreedToPolicy();
  },
  
  addReminder:function(event){
    console.debug('got to ADDReminder');
        AppointmentActionCreators.addReminder();
  },

  render: function(){
      var dateChosen = AppointmentStore.getValueOfDateSelected();
      var isDateChosen = AppointmentStore.getIsDateChosen();
      var timeChosen = AppointmentStore.getValueOfTimeSelected();

    console.debug('in DateTime and IsDateChosen & DateChosen is ',isDateChosen, dateChosen);

    return (<div>           
             
              <ClientMenuBar />
                   
              <div className="row">
                  <div id="treatment-header" className="columns medium-12">
                    
                        <MyBreadcrumbs />
                        <br />
                  </div>
                  <Spacer height="20" />
                  <div>
                        <Header defaultValue="Date & Time" className="center"/>
                  </div>
              </div>
             
              <div className="row">
                 <div className="columns medium-6 medium-offset-1">
                      <Paragraph value="Choose a date for your appointment:"/>
                      <br />
                      <TableMonth />
                 </div>
                 <div className="columns medium-5">
                      
                      {isDateChosen ?<DisplayTimes isDateChosen={isDateChosen} dateChosen={dateChosen} timeChosen={timeChosen}/>:''}
                    
                 </div>
              </div>
              <br />
              <div className="row">
                  <div className="columns medium-4 medium-offset-3">
                      <p>Do you want a text/SMS reminder?</p>
                  </div>
                  <div className="columns medium-5">

                      <button className="tiny-button" type="button" id="reminder" onClick={this.addReminder}>YES</button>
                 
                  </div>
              </div>
              <div className="row">
                  <div className="columns medium-4 medium-offset-3">
                      <p>Do you agree with our cancellation policy</p>
                  </div>
                  
                  <div className="columns medium-1">
                      <input type="checkbox" id="policy" onClick={this.agreedToPolicy}></input>
                  </div>
                  <div className="columns medium-4">
                      <p>Read Policy</p>
                  </div>
              </div>
              <div className="row">
                  <div className="columns medium-4 medium-offset-8">
                      <br />
                      <button onClick={this.bookIt} className="med-button" type="submit">BOOK IT!</button>
                  </div>
              </div>
              <br /><br />
          </div>

      );
  }
});

module.exports = DateTime;
