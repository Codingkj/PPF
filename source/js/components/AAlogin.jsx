var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var TextInput = require('./TextInput.jsx');
var MyButton = require('./Buttons.jsx');
var MenuBar = require('./MenuBar.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var Login = React.createClass({
  loginClient:function(){
    event.preventDefault();
     AppointmentActionCreators.login();
  },
  createClient:function(){
    event.preventDefault();
     AppointmentActionCreators.createAccount();
  },

  render: function(){
    return (<div>
		   		<MenuBar /> 
		    	 <div className="row">
		    	 		<div className="columns medium-12">
		    	 		  <Header defaultValue="LOGIN" className="center"/>
		    	 		</div>
		    	 </div>
		    	 <div className="row">
		    	 		<div className="columns medium-10 medium-offset-3">
		    	 		<br />
					      <h5>So that we know its you can you please login: </h5><br />
					      <label>Your Email:
					      <TextInput className="field30" placeholder="yourname@gmail.com" id="login-email"/>
					      </label>
					      <label>Your Password:
					      <TextInput className="field30" placeholder="your password" id="login-password"/>
					      </label>
					 </div>
				</div>
				 <div className="row">
				 	<div className="columns medium-7 medium-offset-5">
				      <MyButton clicked={this.loginClient} className="med-button" value="LOGIN" />
				      <br /><br />
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
			      	<div className="columns medium-6 medium-offset-6">
			      		<MyButton clicked={this.createClient} className="med-button" value="Click here to create an account" type="button" />
			      	</div>
			     </div>
			     
			<br /><br />
		    </div>);
    }
});

module.exports = Login;
