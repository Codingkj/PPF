var React = require('react');
var PpButton = require('./Buttons.jsx');
var Input = require('./Input.jsx');
var InputText = require('./TextInput.jsx');
var InputTextArea = require('./TextArea.jsx');
var Header = require('./Header.jsx');
var Panel = require('./Panel.jsx');

var ContactForm = React.createClass({
  render: function () {
    return (
      <div className="contact-form-style">
      	<div className="row">
          <div className="columns medium-12">
             <Header defaultValue = "Contact Form" className="center"/>
	           <br />
          </div>
        </div>
        <form data-abide>
        <div className="row">
          <div className="column medium-6">
            
              <label>First name:
              <InputText placeholder="<Enter your name>" required className="field20" />
              </label>
              <small className="error">Name is required thanks</small>
              <label>Email:
              <Input type="email" placeholder="<your email address>" required className="field30"/>
              </label>
              <small className="error">Email is required thanks</small>
              <label>Phone:
              <InputText placeholder="<your phone number>" className="field20"/>
              </label>
            
          </div>
          <div className="column medium-6">
              <label>Please enter a comment or question:
              <InputTextArea placeholder="<Your Question?>" required className="commentQuestion"/>
              </label>
              <PpButton className="med-button align-right" type="button" value="Send"/>
          </div>
          <br /><br />
         </div>
         </form>
      </div>
    );
  }
});

module.exports = ContactForm;