var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var TextInput = require('./TextInput.jsx');
var LockButton = require('./LockButtons.jsx');
var TableWeek = require('./TableWeek.jsx');
var MenuBar = require('./MenuBar.jsx');
var MyButton = require('./Buttons.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var WeekView = React.createClass({
 
  
  dailyView: function(){
     AppointmentActionCreators.changeToDailyView();
  },
  previousWeek: function(){
     AppointmentActionCreators.changeToPreviousWeek();
  },
  nextWeek: function(){
     AppointmentActionCreators.changeToNextWeek();
  },
  lockWeek: function(){
     AppointmentActionCreators.turnLockWeekOn();
  },
  unlockWeek: function(){
     AppointmentActionCreators.turnLockWeekOff();
  },

  render: function(){
    console.log('in AAViewWeek');

    return (<div>
              <MenuBar />
              <br /><br />
              <div className="row">
                <div className="columns medium-12">
                  <h3 className="center" >Weekly View of Appointments</h3>
                </div>
              </div>

              <div className="row">
                  <div className="columns medium-2 medium-offset-1">
                      <button onClick={this.previousWeek} type="button" id="back-button">PREVIOUS WEEK</button>
                  </div>
                  
                  <div className="columns medium-8">
                      <button onClick={this.nextWeek} type="button" id="forward-button">NEXT WEEK</button>
                  </div>
                  <br />
              </div>
              <div className="row">
                <div className="columns medium-10 medium-offset-1 center">
                        <TableWeek />  
                </div>
              </div> 
              <div className="row">
                <div className="columns medium-2 medium-offset-2">
                 <MyButton clicked={this.lockWeek} className="med-button" type="button" value="LOCK WEEK" />
                </div>
                <div className="columns medium-2">
                 <MyButton clicked={this.unlockWeek} className="med-button" type="button" value="UNLOCK WEEK" />    
                </div>
                <div className="columns medium-4 medium-offset-2">
                 <MyButton clicked={this.dailyView} className="med-button" type="button" value="Go to DAILY VIEW" />    
                </div>
              </div>
              <br /><br />
   
      </div>);
  }
});

module.exports = WeekView;
