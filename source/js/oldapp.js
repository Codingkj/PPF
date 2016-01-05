var React = require('react');
var ReactDOM = require('react-dom');

var ApplicationStart = require('./components/ApplicationStart.jsx');
var CreateAccount = require('./components/AACreateAccount.jsx');

var Dashboard =require('./components/AADashboard.jsx');
var PractDashboard =require('./components/AADashboardPractitioners.jsx');
var DateTime = require('./components/AADateTime.jsx');
var LoginScreen =require('./components/AAlogin.jsx');
var LandingPage = require('./components/AALandingPage.jsx');
var Profiles = require('./components/AAProfiles.jsx');
var Treatments1 = require('./components/AATreatments_Prac1.jsx');
var Treatments2 = require('./components/AATreatments_Prac2.jsx');
var DailyView =require('./components/AAViewDay.jsx');
var WeekView = require('./components/AAViewWeek.jsx');
var Panel = require('./components/Panel.jsx');
var ConfirmCancel = require('./components/ConfirmCancel.jsx');
var ConfirmLogout = require('./components/ConfirmLogout.jsx');
var AppDetails = require('./components/AppDetails.jsx');
var Policy = require('./components/Policy.jsx');

var myDataRef = new Firebase('https://fnrl2oszzsa.firebaseio-demo.com/');
myDataRef.set('User ' + 'name' + ' says ' + 'text');

var StartApplication = React.createClass({
  render: function(){
    return (<div>
	    	  <ApplicationStart />
	    	  
		      
		      
		      // <DailyView />
		      
		      // <Dashboard />

		      // <DateTime />
		      
		      // <PractDashboard />
		     
		      // <LoginScreen/>
		      
		      // <Profiles />
		     
		      // <Treatments1 />
		      // <Treatments2 />
		      
		      // <WeekView />

		      // <Panel />

		      // <ConfirmCancel />

		      // <ConfirmLogout />

		      // <AppDetails />

		      // <Policy />
      
      </div>
      );
    }
  });

var StartPage = React.createElement(StartApplication);
ReactDOM.render(StartPage, document.querySelector('[data-react-application]'));
