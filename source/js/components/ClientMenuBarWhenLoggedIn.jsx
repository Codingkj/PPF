var React = require('react');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');

var ClientMenu = React.createClass({
  getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus()
  	};
  },


  handleChange: function () {
      console.log("CHANGING CLIENT MENU");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
    });
  },

  componentDidMount: function () {
      ClientStore.addChangeListener(this.handleChange);
      AppointmentStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
      ClientStore.removeChangeListener(this.handleChange);
      AppointmentStore.removeChangeListener(this.handleChange);
  },
  clientMenuOption: function(){
  	event.preventDefault();
     AppointmentActionCreators.dashboard();
  },

  practitionerMenuOption:function(){
  	event.preventDefault();
     AppointmentActionCreators.dashboardPractitioner();
  },

  loginMenuOption:function(){
  	event.preventDefault();
     AppointmentActionCreators.login();
  },

  logoutMenuOption:function(){
  	event.preventDefault();
     AppointmentActionCreators.logout();
  },

  profilesMenuOption:function(){
  	event.preventDefault();
     AppointmentActionCreators.profiles();
  },
  goHome:function(){
  	console.log('got to GOHOME function');
  	AppointmentActionCreators.home();
  },
  goLogout:function(){
  	console.log('got to LOGOUT function');
  	AppointmentActionCreators.logout();
  },
  goProfiles:function(){
  	console.log('got to PROFILES function');
  	AppointmentActionCreators.profiles();
  },


  render: function() {
  
     return (<div data-sticky-container className="clientMenu">
     			<div className="sticky" id="navbar" data-sticky data-margin-top="0" data-margin-bottom="20">
			      <nav data-topbar role="navigation" className="top-bar" data-options="is_hover: false">
					    <ul className="horizontal menu expanded">
					      <li onClick={this.goHome} className="menu-text divider"><a href="#" >HOME</a></li>
					      <li onClick={this.goHome} className="menu-text divider"><a href="#">CLIENT DASHBOARD</a></li>
					      <li onClick={this.goHome} className="menu-text divider"><a href="#">LOGOUT</a></li>
					      <li className="menu-text divider"><a href="#"></a></li>  
	
					      <li onClick={this.goProfiles} className="menu-text divider"><a href="#">About Us</a></li>
					      <li onClick={this.goContactDetails} className="menu-text divider"><a href="#location">Contact Us</a></li> 
					    </ul>
				
				  </nav>
				</div>
      </div>);
  }
});

module.exports = ClientMenu;