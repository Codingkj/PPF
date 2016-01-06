var React = require('react');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');

var MenuComponent = React.createClass({
  getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus()
  	};
  },


  handleChange: function () {
      console.log("CHANGING MENU");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
    });
    console.log('CHANGED TO ');
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



  render: function() {
  
     return (<div data-sticky-container>
     			<div className="sticky" id="navbar" data-sticky data-margin-top="0" data-margin-bottom="0">
			      <nav data-magellan data-topbar role="navigation" className="top-bar" data-topbar role="navigation" data-options="is_hover: false">
					    <ul className="horizontal menu expanded">
					      <li className="menu-text">Our Logo</li>
					      <li clicked={this.clientMenuOption} className="menu-text"><a href="#">CLIENT DASHBOARD</a></li>
					      <li clicked={this.practitionerMenuOption} className="menu-text"><a href="#">PRACTITIONER INFO</a></li>
					      <li className="menu-text"><a href="#"></a></li>  
					      <li clicked={this.loginMenuOption} className="menu-text"><a href="#">LOG IN</a></li>  
					      <li clicked={this.profilesMenuOption} className="menu-text"><a href="#">About Us</a></li>
					      <li clicked={this.contactDetails} className="menu-text"><a href="#">Contact Us</a></li> 
					    </ul>
				
				  </nav>
				</div>
      </div>);
  }
});

module.exports = MenuComponent;