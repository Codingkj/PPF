var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var TextInput = require('./TextInput.jsx');
var MyButton = require('./Buttons.jsx');
var MenuBar = require('./MenuBar.jsx');
var MyCheckbox = require('./Checkbox.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');
var ClientMenuBar = require('./ClientMenuBarWhenLoggedIn.jsx');
var Utilities = require('../Utilities.js');

var CreateAccount = React.createClass({

  createAccountClicked: function(event){
    event.preventDefault();
    console.log('INSIDE createaccountCLICKED');
    // Utilities.createUser();
    AppointmentActionCreators.createAccount();
},

	handleFormSubmit: function (submitEvent) {
    submitEvent.preventDefault();

    var email = this.refs.email1.value;
    var password = this.refs.password1.value;
    var passwordCheck = this.refs.password2.value;
    var firstName = this.refs.fname.value;
    var lastName = this.refs.lname.value;
    var mobile = this.refs.mobile.value;
    var phone = this.refs.altPhone.value;
    var email1= this.refs.email1.value;
    var email2 = this.refs.email2.value;

    if (email1 !== email2){

    }
    if (password !== passwordCheck){

    }
    console.log('in handleFormSubmit on Createaccount page');
    console.log('username, password');
    this.props.handleCreateAccountFormSubmit(email, password,firstName,lastName);
  
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
	    	 	 <form data-abide onSubmit={this.handleFormSubmit}>
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
						      <input type="text" className="field20" placeholder="<first name>" id="fname" ref="fname"></input>
						      </label>
	
						      <label>Your Email:
						      <input type="text" className="field30" placeholder="<e.g. home@practice.com" id="emailaddy1" ref="email1"></input>
						      </label>
						      <label>Your Email (again, to prevent typos):
						      <input type="text" className="field30" placeholder="<e.g. home@practice.com" id="emailaddy2" ref="email2"></input>
						      </label>
						      <label>Password
						      <input type="text" className="field20" placeholder="<at least 6 characters>" id="pwd1" ref="password1"></input>
						      </label>
						      <p className="help-text" id="pwd1HelpText">Your password must be at least 6 characters long </p>
						      <label>Password: (again, to prevent typos)
						      <input type="text" className="field20" placeholder="<at least 6 characters>" id="pwd2" ref="password2"></input>
						      </label>
						      <label>Your mobile phone number:
						      <input className="field20" placeholder=" " id="mobile-phone" ref="mobile"></input>
						      </label>
						      <label>An alternative phone number:
						      <input id="alt-phone" className="field20" placeholder=" " ref="altPhone"></input>
						      </label>
				      	 </div>
				      	 <div className="columns medium-7">
				      	 		<label>Your Last Name:
						      	<input className="field20" placeholder="<last name>" id="lname" ref="lname"></input>
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
					</div>
				</div>
				<div className="row">
					<div className="column medium-4 medium-offset-8">
						      <MyButton clicked={this.handleFormSubmit} className="med-button" type="submit" value="Create Account" />
					</div>
				</div>
			    <br /><br />
			  
		     </div>);
    }
});

module.exports = CreateAccount;
