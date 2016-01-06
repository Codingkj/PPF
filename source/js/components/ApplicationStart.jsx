var React = require('react');
var ReactDOM = require('react-dom');

var Paragraph = require('./Paragraph.jsx');
var Header = require('./Header.jsx');
var Panel = require('./Panel.jsx');
var Map = require('./Map.jsx');
var MenuBar = require('./MenuBar.jsx');

var Dashboard = require('./AADashboard.jsx');
var DashboardPractitioner =require('./AADashboardPractitioners.jsx');
var DateTime = require('./AADateTime.jsx');
var Login =require('./AAlogin.jsx');
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
var ClientStore = require('../stores/ClientStore.js');

var ComponentToBeRendered;

function bookAnAppointmentClicked(){
  event.preventDefault();
    console.log('INSIDE BOOK AN APPOINTMENT CLICKED');
    AppointmentActionCreators.bookAnAppointment();
}


var ApplicationStart = React.createClass({

   getComponent: function(ComponentSetting){
    console.log('Made it to getComponent function and value passed in is',ComponentSetting);
      if (ComponentSetting === 'LandingPage')
      {
         ComponentToBeRendered = <LandingPage />;
      }
      else if (ComponentSetting === 'Dashboard')
      {
        ComponentToBeRendered = <Dashboard />;
      } 
      else if (ComponentSetting === 'Login')
      {
        ComponentToBeRendered = <Login />;
      }
      else if (ComponentSetting === 'CreateAccount')
      {
        ComponentToBeRendered = <CreateAccount />;
      }
      else if (ComponentSetting === 'DashboardPractitioner')
      {
        ComponentToBeRendered = <DashboardPractitioner />;
      }
      else if (ComponentSetting === 'DateTime')
      {
        ComponentToBeRendered = <DateTime />;
      }
      else if (ComponentSetting === 'Profiles')
      {
        ComponentToBeRendered = <Profiles />;
      }
      else if (ComponentSetting === 'Treatments1')
      {
        ComponentToBeRendered = <Treatments1 />;
      }
      else if (ComponentSetting === 'Treatments2')
      {
        ComponentToBeRendered = <Treatments2 />;
      }
      else if (ComponentSetting === 'DailyView')
      {
        ComponentToBeRendered = <DailyView />;
      }
      else if (ComponentSetting === 'WeekView')
      {
        ComponentToBeRendered = <WeekView />;
      }
      else if (ComponentSetting === 'Profiles')
      {
        ComponentToBeRendered = <Profiles />;
      }
      console.log('At end of  getcomponent function',ComponentToBeRendered);
      return ComponentToBeRendered;
   },
   
   getInitialState: function () {
    console.log('inside setting new component at application start');
    return {
      component:this.getComponent(AppointmentStore.getCurrentComponent())
    };
  },


  handleChange: function () {
    var test1 = AppointmentStore.getCurrentWholeDate();
    console.log('on FRONT PAGE BEFORE calling get component the value of CurrentDate is',test1);
      console.log("CHANGING FRONT PAGE");
      console.log('appointment store value',AppointmentStore.getCurrentComponent());
    this.setState({
      component: this.getComponent(AppointmentStore.getCurrentComponent())
    });
    var test = AppointmentStore.getCurrentWholeDate();
    console.log('on FRONT PAGE after calling get component the value of CurrentDate is',test);
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
      {this.state.component}
   
      </div>)
    
    }          
});

module.exports = ApplicationStart;
