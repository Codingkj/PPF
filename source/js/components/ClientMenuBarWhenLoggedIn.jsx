var React = require('react');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');

var ClientMenu = React.createClass({
  
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
     			<div className="sticky" id="navbar" data-sticky data-margin-top="0" data-margin-bottom="10">
			      <nav data-topbar role="navigation" className="top-bar" data-options="is_hover: false">
					    <ul className="horizontal menu expanded center-buttons">
					      <li className="divider"><button className="menu-text" onClick={this.goHome}>HOME</button></li>
					      <li className="divider"><button className="menu-text" onClick={this.goHome}>CLIENT DASHBOARD</button></li>
					      <li className="divider"><button className="menu-text" onClick={this.goLogout}>LOGOUT</button></li>
					  
	
					      <li className="divider"><button className="menu-text" onClick={this.goHome}>ABOUT US</button></li>
					      <li className="divider"><button className="menu-text" onClick={this.goHome}>CONTACT US</button></li> 
					    </ul>
				
				  </nav>
				</div>
      </div>);


  }
});

module.exports = ClientMenu;