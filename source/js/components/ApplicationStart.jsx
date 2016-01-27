var React = require('react');
var ReactDOM = require('react-dom');
var uuid = require('node-uuid');

var AppDetails = require('./AppDetails.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var AuthenticationService = require('../services/authentication.js');
var CreateClientForm =require('./AACreateAccount.jsx');
var ClientMenuBar = require('./ClientMenuBarWhenLoggedIn.jsx');
var ClientStore = require('../stores/ClientStore.js');
var ConfirmCancel = require('./ConfirmCancel.jsx');
var ConfirmLogout = require('./ConfirmLogout.jsx');
var DailyView =require('./AAViewDay.jsx');
var Dashboard = require('./AADashboard.jsx');
var DashboardPractitioner = require('./AADashboardPractitioners.jsx');
var DateTime = require('./AADateTime.jsx');
var FailMessage = require('./FailMessage.jsx');
var Header = require('./Header.jsx');
var LoginForm =require('./AAlogin.jsx');
var LandingPage = require('./AALandingPage.jsx');
var Map = require('./Map.jsx');
var MenuBar = require('./MenuBar.jsx');
var Panel = require('./Panel.jsx');
var Policy = require('./Policy.jsx');
var Profiles = require('./AAProfiles.jsx');
var Paragraph = require('./Paragraph.jsx');
var TableMonth = require('./TableMonth.jsx');
var Spacer = require('./Spacer.jsx');
var SuccessMessage = require('./SuccessMessage.jsx');
var Treatments1 = require('./AATreatments_Prac1.jsx');
var Treatments2 = require('./AATreatments_Prac2.jsx');
var Utilities = require('../Utilities.js');
var WeekView = require('./AAViewWeek.jsx');



var ApplicationStart = React.createClass({

   getComponent: function(ComponentSetting){
   
      if (ComponentSetting === 'LandingPage')
      {
         return <LandingPage />;
      }
      else if (ComponentSetting === 'Dashboard')
      {
        return <Dashboard />;
      } 
      else if (ComponentSetting === 'Login')
      {

        return <LoginForm handleUserLogInFormSubmit={this.handleUserLogInFormSubmit}/>;
    
      }
      else if (ComponentSetting === 'GoToCreatePage')
      {
        return <CreateClientForm handleCreateAccountFormSubmit={this.handleCreateAccountFormSubmit}/>;
      }
      
      else if (ComponentSetting === 'DashboardPractitioner')
      {
        return <DashboardPractitioner />;
      }
      else if (ComponentSetting === 'DateTime')
      {
        return <DateTime dateChosen={this.state.dateChosen} isDateChosen={this.state.isDateChosen} timeChosen={this.state.timeChosen}/>;
      }
      else if (ComponentSetting === 'Profiles')
      {
        return <Profiles />;
      }
      else if (ComponentSetting === 'Treatment1')
      {
        return <Treatments1 />;
      }
      else if (ComponentSetting === 'Treatment2')
      {
        return <Treatments2 />;
      }
      else if (ComponentSetting === 'DailyView')
      {
        return <DailyView />;
      }
      else if (ComponentSetting === 'WeekView')
      {
        return <WeekView />;
      }
      else if (ComponentSetting === 'Profiles')
      {
        return <Profiles />;
      }

   },
   
   getInitialState: function () {
   
    return {
    
      currentDate:AppointmentStore.getCurrentWholeDate(),
      currentPage: AppointmentStore.getCurrentComponent(),
      pageToShowAfterLogin: AppointmentStore.getPageToShowAfterLogin(),
      token:AppointmentStore.getToken(),
      failMessage:AppointmentStore.getFailMessage(),
      successMessage:AppointmentStore.getSuccessMessage(),
      dateChosen:AppointmentStore.getValueOfDateSelected(),
      isDateChosen:AppointmentStore.getIsDateChosen(),
      timeChosen:AppointmentStore.getValueOfTimeSelected(),
      pageToShowAfterLogin:true,
      failMessage: null,
      successMessage: null,
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

  // showPageAfterLogIn: function (pageName) {
  //   AppointmentActionCreators.dashboard();
  // },

  handleChange: function () {

    this.setState({
      currentDate:AppointmentStore.getCurrentWholeDate(),
      currentPage: AppointmentStore.getCurrentComponent(),
      pageToShowAfterLogin:AppointmentStore.getPageToShowAfterLogin(),
      token:AppointmentStore.getToken(),
      failMessage:AppointmentStore.getFailMessage(),
      successMessage: AppointmentStore.getSuccessMessage(),
      dateChosen:AppointmentStore.getValueOfDateSelected(),
      isDateChosen:AppointmentStore.getIsDateChosen(),
      timeChosen:AppointmentStore.getValueOfTimeSelected(),
      pageToShowAfterLogin:true,
      failMessage: null,
      successMessage: null
    });

    console.log('CHANGING APPLICATION START ');
  },

  setUserAuthenticationToken: function (token) {
    console.log('Creating an action to Store the Token',token);
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

  showFailMessage: function (message) {
    this.setState({
      failMessage: message
    });
  },

  showSuccessMessage: function (message) {
    this.setState({
      successMessage: message
    });
  },

  logOut: function () {
    this.setUserAuthenticationToken(null);
    AppointmentActionCreators.logout();
  },

  isUserLoggedIn: function () {
    return (this.state.token !== null);
  },

  handleCreateAccountFormSubmit: function (username, password,firstName,lastName) {
    console.log('IN handleCreateAccountFormSubmit',username,password,firstName,lastName);
    
    AuthenticationService.signUp(username, password, firstName, lastName, function handleUserSignUp(error, response) {
      if (error) {
        this.showFailMessage('Failed to join.');
        return;
      }
      
      AuthenticationService.logIn(username, password, function handleUserLogIn(error, response) {
        if (error) {
          this.showFailMessage('Failed to join.');
          return;
        }
        console.debug('IN APPSTART AFTER AuthenticationService',response);
        this.setUserAuthenticationToken(response.token);      
        this.showSuccessMessage('Thanks for joining!');

        if (this.state.pageToShowAfterLogin) {
          AppointmentActionCreators.dashboard();
        } else {
          AppointmentActionCreators.home();
        }

      }.bind(this));
    }.bind(this));
  },


  handleUserLogInFormSubmit: function (username, password) {
  
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
      AppointmentActionCreators.getAllUsers();
      AppointmentActionCreators.getAllAppointments();
    

      if (response.token !== '') {

        AppointmentActionCreators.dashboard();
        // this.showPageAfterLogIn(null);
      } else {
        AppointmentActionCreators.home();
      }

    }.bind(this));

  },


  render: function(){

    return (<div>
           
      
      {this.getComponent(this.state.currentPage)}
         
      
      </div>)
    
    }          
});

module.exports = ApplicationStart;
