var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var TextInput = require('./TextInput.jsx');
var LockButton = require('./LockButtons.jsx');
var Table = require('./Table.jsx');
var MenuBar = require('./MenuBar.jsx');
var MyButton = require('./Buttons.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var WeekView = React.createClass({
 
  getInitialState: function () {
    return {
      date:AppointmentStore.getCurrentWholeDate(),
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus()
    };
  },

  handleChange: function () {
      console.log("IN AAVIEWWEEK this.state.date and Store.getDate to ",this.state.date, AppointmentStore.getCurrentWholeDate());
    this.setState({
      date:AppointmentStore.getCurrentWholeDate(),
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
    });
    console.log('IN AAVIEWWEEK this.state.date and Store.getDate to ',this.state.date, AppointmentStore.getCurrentWholeDate());
  },

  componentDidMount: function () {
      ClientStore.addChangeListener(this.handleChange);
      AppointmentStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
      ClientStore.removeChangeListener(this.handleChange);
      AppointmentStore.removeChangeListener(this.handleChange);
  },
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
    console.log('in render statement',this.state.date);
    return (<div className="week-view-background">
              <MenuBar />

              <div className="row">
                <div className="columns medium-12">
                  <Header defaultValue="Weekly View of Appointments" className="center"/><br />
                </div>
              </div>

              <div className="row">
                <div className="columns medium-1 medium-offset-1">
                    <MyButton clicked={this.previousWeek} type="button" value="Previous Week" className="tiny-button" />
                  </div>
                  <div className="columns medium-8">

                      <Table />  
                  </div>
                  <div className="columns medium-2">
                      <MyButton clicked={this.nextWeek} type="button" value="Next Week" className="tiny-button" />
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
