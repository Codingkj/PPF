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
var ClientMenuBar = require('./ClientMenuBarWhenLoggedIn.jsx');


var DailyView = React.createClass({
  
  previousDayClicked: function(event)
  {
    event.preventDefault();
    AppointmentActionCreators.getPreviousDay();
  },
  nextDayClicked: function(event)
  {
  	event.preventDefault();
  	console.log('inside nextDayClicked');
  	AppointmentActionCreators.getNextDay();
  },

  weeklyView: function(){ 
     AppointmentActionCreators.changeToWeekView();
  },

  render: function() {
   
   var currentDate = AppointmentStore.getCurrentDate();
   var currentDay = AppointmentStore.getCurrentDay();
   var currentMonth = AppointmentStore.getCurrentMonthName();
   var currentYear = AppointmentStore.getCurrentYear();
	 var displayDate = '  '+ currentDay + ' '+ currentMonth+ ' '+ currentYear;
	
     return (<div className="page-background1">
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
    				      	<TableDay day={currentDay} month={currentMonth} year={currentYear}/> 
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