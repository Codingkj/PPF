var React = require('react');
var ReactDOM = require('react-dom');

var Paragraph = require('./Paragraph.jsx');
var Header = require('./Header.jsx');
var Panel = require('./Panel.jsx');
var Map = require('./Map.jsx');
var MenuBar = require('./MenuBar.jsx');

var Dashboard = require('./AADashboard.jsx');
var PractDashboard =require('./AADashboardPractitioners.jsx');
var DateTime = require('./AADateTime.jsx');
var LoginScreen =require('./AAlogin.jsx');
var LandingPage = require('./AALandingPage.jsx');
var Profiles = require('./AAProfiles.jsx');
var Treatments1 = require('./AATreatments_Prac1.jsx');
var Treatments2 = require('./AATreatments_Prac2.jsx');
var DailyView =require('./AAViewDay.jsx');
var WeekView = require('./AAViewWeek.jsx');

var Panel = require('./Panel.jsx');
var ConfirmCancel = require('./ConfirmCancel.jsx');
var ConfirmLogout = require('./ConfirmLogout.jsx');
var AppDetails = require('./AppDetails.jsx');
var Policy = require('./Policy.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');

function bookAnAppointmentClicked(){
  event.preventDefault();
    console.log('INSIDE BOOK AN APPOINTMENT CLICKED');
    AppointmentActionCreators.bookAnAppointment();
}


var ApplicationStart = React.createClass({

   getInitialState: function () {
    return {
      component:AppointmentStore.getCurrentComponent
    };
  },


  handleChange: function () {
      console.log("CHANGING FRONT PAGE");
    this.setState({
      component: AppointmentStore.getCurrentComponent()
    });
    console.log('CHANGED The Component ')
  },

  componentDidMount: function () {
      ClientStore.addChangeListener(this.handleChange);
      AppointmentStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
      ClientStore.removeChangeListener(this.handleChange);
      AppointmentStore.removeChangeListener(this.handleChange);
  },

  render: function(){
    return (<div >
      if (this.state.component === 'LandingPage'){
        <LandingPage />
      } else if (this.state.component === 'Dashboard'){
        <Dashboard />
      } else if (this.state.component === 'Login'){
        <Login />
      }
      </div>)
    
    }          
});

module.exports = ApplicationStart;
