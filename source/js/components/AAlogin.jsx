var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var Input = require('./Input.jsx');
var MyButton = require('./Buttons.jsx');
var MenuBar = require('./MenuBar.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');


var Login = React.createClass({

  getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
  	};
  },


  handleChange: function () {
      console.log(" IN AALOGIN CHANGING");
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

  

  handleLoginFormSubmit: function (submitEvent) {
    submitEvent.preventDefault();

    var username = this.refs.username.value;
    var password = this.refs.password.value;

    this.props.handleUserLogInFormSubmit(username, password);
  },

  createClient:function(){
    event.preventDefault();
     AppointmentActionCreators.createClient();
  },

  render: function(){
    return (<div className="page-background1">
              	<MenuBar />
		   		<div className=" separator">
                      <div className="row">
                          <div className="large-12 columns">
                             
                          </div>
                      </div>
                  	</div>
          		

          			<div className="row">
					  <div className="medium-6 medium-centered large-4 large-centered columns">

					    <form onSubmit={this.handleLoginFormSubmit}>
					      <div className="row column log-in-form">
						        <h4 className="text-center">Please Log In</h4>
						        <label>Email
						          <Input type="text" placeholder="somebody@example.com" ref="username"/>
						        </label>
						        <label>Password
						          <Input type="text" placeholder="Password" ref="password"/>
						        </label>
						        <Input id="show-password" type="checkbox" /><label htmlFor="show-password">Show password</label>
						        <MyButton  clicked={this.handleLoginFormSubmit} className="button expanded" value="Log In" type="submit" />
		
					          
					      </div>
					    </form>

					  </div>
					</div>
			    
				     <div className="row">
				     	<div className="columns medium-9 medium-offset-3">
				     		<br />
				      		<Paragraph value="If you are not able to login, because you do not yet have an account with us, please create an account." />
				      		<br />
				      	</div>
				      </div>
				      <div className="row">
				      	<div className="columns medium-5 medium-offset-7">
				      		<MyButton clicked={this.createClient} className="med-button" value="Click here to create an account"  />
				      	</div>
				     </div>
			     
					<br /><br />
		    </div>);
    }
});

module.exports = Login;
