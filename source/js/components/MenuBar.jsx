var React = require('react');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');

var MenuComponent = React.createClass({
  
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
  goLogin:function(){
  	console.log('got to LOGIN function');
  	AppointmentActionCreators.login();
  },
  goProfiles:function(){
  	console.log('got to PROFILES function');
  	AppointmentActionCreators.profiles();
  },
  goDashboardPractitioner:function(){
    console.log('chose Practitioner on Menu');
    AppointmentActionCreators.dashboardPractitioner();
  },
  
  

  render: function() {

     return (<div data-sticky-container className="menuDiv">
     			<div className="sticky" id="navbar" data-sticky data-margin-top="0" data-margin-bottom="10">
			      <nav data-topbar role="navigation" className="top-bar" data-options="is_hover: false">
					    <ul className="horizontal menu expanded center-buttons">
					      <li className="divider"><button onClick={this.goHome} className="menu-text">HOME</button></li>
					      <li className="divider"><button onClick={this.goLogin} className="menu-text">CLIENT DASHBOARD</button></li>
					      <li className="divider"><button onClick={this.goDashboardPractitioner} className="menu-text">PRACTITIONER INFO</button></li> 
					      <li className="divider"><button onClick={this.goLogin} className="menu-text">LOG IN</button></li>  
					      <li className="divider"><button onClick={this.goProfiles} className="menu-text">ABOUT US</button></li>
					      <li className="divider"><button onClick={this.goContactDetails} className="menu-text">CONTACT US</button></li> 
					    </ul>
				
				  </nav>
				</div>
      </div>);
  }
});

module.exports = MenuComponent;