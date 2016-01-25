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
    console.log('in previousWeek function in AAViewWeek');
     AppointmentActionCreators.changeToPreviousWeek();
  },
  nextWeek: function(){
     AppointmentActionCreators.changeToNextWeek();
  },
  lockWeek: function(){
     AppointmentActionCreators.lockWeek();
  },
  unlockWeek: function(){
     AppointmentActionCreators.unlockWeek();
  },

  render: function(){
    console.log('in AAViewWeek');
 
    return (<div className="page-background1">
              <MenuBar />
              <br />
              <div className="row">
                <div className="columns medium-12">
                  <Header defaultValue="Weekly View of Appointments" className="center"/><br />
                </div>
              </div>

              <div className="row">
                <div className="columns medium-1 medium-offset-1">
                    <button onClick={this.previousWeek} type="button" className="tiny-button">Previous Week</button>
                  </div>
                  <div className="columns medium-8">
                      <TableWeek />  
                  </div>
                  <div className="columns medium-2">
                      <button onClick={this.nextWeek} type="button" className="tiny-button" >Next Week</button>
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
                 <MyButton clicked={this.dailyView} className="med-button" type="button" value="Go to Daily View" />    
                </div>
              </div>
              <br /><br />
   
      </div>);
  }
});

module.exports = WeekView;
