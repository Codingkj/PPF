

var React = require('react');
var ReactDOM = require('react-dom');
var ApplicationStart = require('./components/ApplicationStart.jsx');
var CreateAccount = require('./components/AACreateAccount.jsx');

var Dashboard =require('./components/AADashboard.jsx');
var PractDashboard =require('./components/AADashboardPractitioners.jsx');
var DateTime = require('./components/AADateTime.jsx');
var LoginScreen =require('./components/AAlogin.jsx');

var Profiles = require('./components/AAProfiles.jsx');
var Treatments = require('./components/AATreatments.jsx');
var DailyView =require('./components/AAViewDay.jsx');
var WeekView = require('./components/AAViewWeek.jsx');

var StartApplication = React.createClass({
  render: function(){
    return (<div>
	    	  <ApplicationStart />
	    	  
		      <CreateAccount />
		      
		      <DailyView />
		      
		      <Dashboard />

		      <DateTime />
		      
		      <PractDashboard />
		     
		      <LoginScreen/>
		      
		      <Profiles />
		     
		      <Treatments />
		      
		      <WeekView />
      
      </div>
      );
    }
  });

var StartPage = React.createElement(StartApplication);
ReactDOM.render(StartPage, document.querySelector('[data-react-application]'));
