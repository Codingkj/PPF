var React = require('react');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');

var MenuComponent = React.createClass({
  getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      
      
  	};
  },


  handleChange: function () {
      console.log("CHANGING MENU");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
     
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
  goLogin:function(){
  	console.log('got to LOGIN function');
  	AppointmentActionCreators.login();
  },
  goProfiles:function(){
  	console.log('got to PROFILES function');
  	AppointmentActionCreators.profiles();
  },
  
  

  render: function() {
  
     return (<div data-sticky-container>
     			<div className="sticky" id="navbar" data-sticky data-margin-top="0" data-margin-bottom="0">
			      <nav data-topbar role="navigation" className="top-bar" data-options="is_hover: false">
					    <ul className="horizontal menu expanded">
					      <li onClick={this.goHome} className="menu-text divider"><a href="#" >HOME</a></li>
					      <li onClick={this.goLogin} className="menu-text divider"><a href="#">CLIENT DASHBOARD</a></li>
					      <li onClick={this.goLogin} className="menu-text divider"><a href="#">PRACTITIONER INFO</a></li>
					      <li className="menu-text divider"><a href="#"></a></li>  
					      <li onClick={this.goLogin} className="menu-text divider"><a href="#">LOG IN</a></li>  
					      <li onClick={this.goProfiles} className="menu-text divider"><a href="#">About Us</a></li>
					      <li onClick={this.goContactDetails} className="menu-text divider"><a href="#">Contact Us</a></li> 
					    </ul>
				
				  </nav>
				</div>
      </div>);
  }
});

module.exports = MenuComponent;