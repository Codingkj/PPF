var React = require('react');
var PpButton = require('./Buttons.jsx');
var Input = require('./Input.jsx');
var InputText = require('./TextInput.jsx');
var InputTextArea = require('./TextArea.jsx');
var Header = require('./Header.jsx');
var Panel = require('./Panel.jsx');
var PanelBox = require('./PanelBox.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var ContactForm = React.createClass({

 
  contactFormSent: function(){ 
    var contactFormQuery = this.refs.cfQuery.value;
    var contactFormEmail = this.refs.csEmail;
    var contactFormName = this.refs.cfName;
   
    //how do I put something in here to show a panelbox to show the information entered.
  },


  render: function () {
    var panelStatus = 'OFF';

    return (
      <div className="contact-form-style">
      	<div className="row">
          <div className="columns medium-12">
             <Header defaultValue = "Contact Form" className="center"/>
	           <br />
          </div>
        </div>
        <form data-abide onSubmit={this.contactFormSent}>
        <div className="row">
          <div className="column medium-6">
            
              <label>First name:
              <input type="text" placeholder="<Enter your name>" required className="field20" ref="cfName"></input>
              </label>
              <small className="form-error">Name is required thanks</small>
              <label>Email:
              <input type="email" placeholder="<your email address>" required className="field30" ref="cfEmail"></input>
              </label>
              <small className="form-error">Email is required thanks</small>
              <label>Phone:
              <input type="text" placeholder="<your phone number>" className="field20" ref="cfPhone"></input>
              </label>
            
          </div>
          <div className="column medium-6 ">
              <label>Please enter a comment or question:
              <textarea rows="4" cols="50" placeholder="<Your Question?>" required className="commentQuestion" ref="cfQuery"></textarea>
              </label>
              <button className="med-button align-right" type="submit" ref="sendbutton">SEND</button>
          </div>
        </div>
        </form>
        <div>

        {panelStatus==='ON' ? <PanelBox text="Thank you for your enquiry. We will respond as soon as we can." />:null}
            
  
        </div>
      </div>
    );
  }
});

module.exports = ContactForm;