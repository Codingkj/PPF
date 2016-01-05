var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var TextInput = require('./TextInput.jsx');
var MyButton = require('./Buttons.jsx');
var MenuBar = require('./MenuBar.jsx');
var MyCheckbox = require('./Checkbox.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var CreateAccount = React.createClass({

  createAccountClicked: function(event){
    event.preventDefault();
    console.log('INSIDE createaccountCLICKED');
    AppointmentActionCreators.createAccount();
  },

  render: function(){
    return (<div>
		    	
		    	 <MenuBar />
	    	 	 <form data-abide>
		    	 <div className="row">
				    	<div className="column medium-6 medium-offset-1">
				    		  <br />
						      <Header defaultValue="Create an Account" /><br />

					          <Paragraph value="Please enter:"/><br />
					     </div>
				 </div>
				 <div className="row">
				 		<div className="column medium-4 medium-offset-1">
						      <label>Your First Name:
						      <TextInput className="field30" placeholder="<first name>" id="fname" />
						      </label>
	
						      <label>Your Email:
						      <TextInput className="field30" placeholder="<e.g. home@practice.com" id="emailaddy1" />
						      </label>
						      <label>Your Email (again, to prevent typos):
						      <TextInput className="field30" placeholder="<e.g. home@practice.com" id="emailaddy2" />
						      </label>
						      <label>Password
						      <TextInput className="field20" placeholder="<at least 6 characters>" id="pwd1"/>
						      </label>
						      <p className="help-text" id="pwd1HelpText">Your password must be at least 6 characters long </p>
						      <label>Password: (again, to prevent typos)
						      <TextInput className="field20" placeholder="<at least 6 characters>" id="pwd2"/>
						      </label>
						      <label>Your mobile phone number:
						      <TextInput className="field20" placeholder=" " id="mobile-phone"/>
						      </label>
						      <label>An alternative phone number:
						      <TextInput id="alt-phone" className="field20" placeholder=" " />
						      </label>
				      	 </div>
				      	 <div className="columns medium-7">
				      	 		<label>Your Last Name:
						      	<TextInput className="field30" placeholder="<last name>" id="lname"/>
						      	</label>
				      	 </div>
				 </div>
				</form>
			
				<div className="row">
					<div className="columns medium-1 medium-offset-1"> 
							<label>Please tick:     
						     <MyCheckbox />
						     </label>
					</div>
					<div className="columns medium-10">
						      <Paragraph value="By creating an account, you agree that we may store details collected from this form for the purposes of operating this website. We will not share your details with anyone else." /><br />
					</div>d
				</div>
				<div className="row">
					<div className="column medium-4 medium-offset-8">
						      <MyButton clicked={this.createAccountClicked} className="med-button" type="button" value="Create Account" />
					</div>
				</div>
			    <br /><br />
			  
		     </div>);
    }
});

module.exports = CreateAccount;
