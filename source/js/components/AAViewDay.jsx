var React = require('react');
var ReactDOM = require('react-dom');
var TableDay = require('./TableDay.jsx');
var MyButton = require('./Buttons.jsx');
var Header = require('./Header.jsx');
var MenuBar = require('./MenuBar.jsx');
var Paragraph = require('./Paragraph.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var DailyView = React.createClass({
  
  previousDayClicked: function(event)
  {
    event.preventDefault();
    console.log('INSIDE DAYCLICKED');
    AppointmentActionCreators.getPreviousDay();
  },
  nextDayClicked: function(event)
  {
  	event.preventDefault();
  	console.log('inside nextDayClicked');
  	AppointmentActionCreators.getNextDay();
  },

  getFirstDates:function(){
  	return{
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus()
  	};
  },

  getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus()
  	};
  },


  handleChange: function () {
      console.log("CHANGING");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
    });
    console.log('CHANGED TO ',day,month,year);
  },

  componentDidMount: function () {
      ClientStore.addChangeListener(this.handleChange);
      AppointmentStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
      ClientStore.removeChangeListener(this.handleChange);
      AppointmentStore.removeChangeListener(this.handleChange);
  },

  weeklyView: function(){
    event.preventDefault();
     AppointmentActionCreators.weekView();
  },
  
  render: function() {
  
  
	 var displayDate = '  '+ this.state.day + ' '+ this.state.month+ ' '+ this.state.year;
	

     return (<div >
		     	<MenuBar />
		     	<br />
		     	<div className="row">
		     		<div className="columns medium-10 center">
		     			<Header defaultValue="Daily View" />
		     			<br />
		     		</div>
		     	</div>
		     	<div className="row">
			     	<div className="columns medium-1 medium-offset-1">
			     		<MyButton clicked={this.previousDayClicked} className="tiny-button" type="button" value="Previous Day" />  
			     	</div>
			     	<div className="columns medium-3">
			     		<Paragraph value={displayDate} className="date-dayview" shade=""/> 
			     	</div>
					<div className="columns medium-1">

			     		<MyButton clicked={this.nextDayClicked} className="tiny-button" type="button" value="Next Day" />  
			     	</div>
			     	<div className="columns medium-6">
			     	</div>

			     </div>
			     <div className="row">
			     	<div className="columns medium-offset-1 medium-6" id="dashboard-dayview">
				      	<TableDay day={this.state.day} month={this.state.month} year={this.state.year}/> 
				    </div>
				    <div className="columns medium-4 medium-offset-1">
				    	<h5>Manage Appointments</h5>
				    	<MyButton clicked={this.weeklyView} className="med-button" type="button" value="Go to Weekly View" /> 
				    		
					</div>
				</div>
				<br /><br />
     </div>);
  }
});

module.exports = DailyView;