var React = require('react');
var ReactDOM = require('react-dom');

var CreateClientForm =require('./AACreateAccount.jsx');
var Paragraph = require('./Paragraph.jsx');
var Header = require('./Header.jsx');
var Panel = require('./Panel.jsx');
var Map = require('./Map.jsx');
var MenuBar = require('./MenuBar.jsx');
var CalendarMonth = require('./CalendarMonth.jsx');
var Dashboard = require('./AADashboard.jsx');
var DashboardPractitioner = require('./AADashboardPractitioners.jsx');
var DateTime = require('./AADateTime.jsx');
var LoginForm =require('./AAlogin.jsx');
var LandingPage = require('./AALandingPage.jsx');
var Profiles = require('./AAProfiles.jsx');
var Treatments1 = require('./AATreatments_Prac1.jsx');
var Treatments2 = require('./AATreatments_Prac2.jsx');
var DailyView =require('./AAViewDay.jsx');
var WeekView = require('./AAViewWeek.jsx');
var ClientMenuBar = require('./ClientMenuBarWhenLoggedIn.jsx');
var Panel = require('./Panel.jsx');
var ConfirmCancel = require('./ConfirmCancel.jsx');
var ConfirmLogout = require('./ConfirmLogout.jsx');
var AppDetails = require('./AppDetails.jsx');
var Policy = require('./Policy.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');
var FailMessage = require('./FailMessage.jsx');
var SuccessMessage = require('./SuccessMessage.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var AuthenticationService = require('../services/authentication');
var Utilities = require('../Utilities.js');


var ComponentToBeRendered;

function bookAnAppointmentClicked(){
  event.preventDefault();
    AppointmentActionCreators.bookAnAppointment();
}


var ApplicationStart = React.createClass({

   getComponent: function(ComponentSetting){
   
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
        ComponentToBeRendered = <LoginForm handleUserLogInFormSubmit={this.handleUserLogInFormSubmit}/>;
    
      }
      else if (ComponentSetting === 'GoToCreatePage')
      {
        ComponentToBeRendered = <CreateClientForm handleCreateAccountFormSubmit={this.handleCreateAccountFormSubmit}/>;
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
      else if (ComponentSetting === 'Treatment1')
      {
        ComponentToBeRendered = <Treatments1 />;
      }
      else if (ComponentSetting === 'Treatment2')
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

      return ComponentToBeRendered;
   },
   
   getInitialState: function () {
   
    return {
      currentPage: this.getComponent(AppointmentStore.getCurrentComponent()),
      pageToShowAfterLogin: AppointmentStore.getPageToShowAfterLogin(),
      token:AppointmentStore.getToken(),
      failMessage:AppointmentStore.getFailMessage(),
      successMessage:AppointmentStore.getSuccessMessage(),
    };
  },

  clearMessages: function () {
    AppointmentActionCreators.failMessage(null);
    AppointmentActionCreators.successMessage(null);
  },

  showFailMessage: function (message) {
    AppointmentActionCreators.failMessage('Failed to join.');
  },

  showSuccessMessage: function (message) {
    AppointmentActionCreators.successMessage('Thanks for joining!');
  },

  showPageAfterLogIn: function (pageName) {
    AppointmentActionCreators.dashboard();
  },

  handleChange: function () {

    this.setState({
      currentPage: this.getComponent(AppointmentStore.getCurrentComponent()),
      pageToShowAfterLogin:AppointmentStore.getPageToShowAfterLogin(),
      token:AppointmentStore.getToken(),
      failMessage:AppointmentStore.getFailMessage(),
      successMessage: AppointmentStore.getSuccessMessage(),
    });

    console.log('CHANGING APPLICATION START ');
  },

  setUserAuthenticationToken: function (token) {
    AppointmentActionCreators.storeToken(token);
    },


  componentDidMount: function () {
      ClientStore.addChangeListener(this.handleChange);
      AppointmentStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
      ClientStore.removeChangeListener(this.handleChange);
      AppointmentStore.removeChangeListener(this.handleChange);
  },

  isUserLoggedIn: function () {
    return (this.state.token !== null);
  },

  hideFailMessage: function () {
    // closebox and then 
    AppointmentActionCreators.failMessage(null);
  },

  hideSuccessMessage: function () {
    //close box and then
    AppointmentActionCreators.successMessage(null);
  },

  logOut: function () {
    this.setUserAuthenticationToken(null);
    AppointmentActionCreators.logout();
  },

  isUserLoggedIn: function () {
    return (this.state.token !== null);
  },

  handleCreateAccountFormSubmit: function (username, password,firstName,lastName) {
    console.log('got to handleCreateAccountFormSubmit');
    AuthenticationService.signUp(username, password, firstName, lastName, function handleUserSignUp(error, response) {
      if (error) {
        AppointmentActionCreators.failMessage('Failed to join.');
        return;
      }

      console.log('after authentication first call');
      AuthenticationService.logIn(username, password, firstName, lastName,function handleUserLogIn(error, response) {
        if (error) {
          AppointmentActionCreators.failMessage('Failed to log in.');
          return;
        }

        this.setUserAuthenticationToken(response.token);
        console.log('Thanks for joining - token is',response.token);
        AppointmentActionCreators.successMessage('Thanks for joining!');

        if (this.state.pageToShowAfterLogin) {
          AppointmentActionCreators.dashboard();
          // this.showPageAfterLogIn(null);
        } else {
          AppointmentActionCreators.home();
        }

      }.bind(this));
    }.bind(this));
  },

  handleUserLogInFormSubmit: function (username, password) {
    console.log('got to handleUserLogInFormSubmit');
    AuthenticationService.logIn(username, password, function handleUserLogIn(error, response) {
      console.log('BEEN to authentication service and returned');
      if (error) {
        AppointmentActionCreators.failMessage('Failed to log in.');
        return;
      }

      this.setUserAuthenticationToken(response.token);
      console.log('done setUserAuthenticationToken and it was',response.token);
      AppointmentActionCreators.successMessage('Welcome back!');
      AppointmentActionCreators.setCurrentClientEmail(username);

      if (this.state.pageToShowAfterLogin) {
        AppointmentActionCreators.dashboard();
        // this.showPageAfterLogIn(null);
      } else {
        AppointmentActionCreators.home();
      }

    }.bind(this));

  },


  render: function(){
    return (<div >
      
      
      
      {this.state.currentPage}
      
     
     
      
      </div>)
    
    }          
});

module.exports = ApplicationStart;
