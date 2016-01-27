var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var MyButton = require('./Buttons.jsx');
var Spacer = require('./Spacer.jsx');
var MenuBar = require('./MenuBar.jsx');
var ProfileImage = require('./ProfileImage.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var ClientMenuBar = require('./ClientMenuBarWhenLoggedIn.jsx');

var Practitioners = React.createClass({
  
  bookPractitioner: function(event){
    event.preventDefault();
     //now did they click on practitioner one or two.
     console.log('Event that was clicked on in Profiles',event);
     AppointmentActionCreators.login();
  },

  render: function(){
    return (<div >
            <MenuBar />
            <br />
              <div className="row profiles-div">
                   <br />
                   <h3>Our People</h3>
                <div className="columns medium-2 medium-offset-1">
                  <ProfileImage />
                  <br /><br />
                </div>
                <div className="columns medium-5">
                  <Paragraph value="Some text goes here about how the practitioner came to join the practice" />
                </div>
                <div className="columns medium-3"> 
                  <button onClick={this.bookPractitioner} ref="practitioner1" className="med-button" type="button" >BOOK NOW! </button>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-2 medium-offset-1">
                  <ProfileImage />
                </div>
                <div className="columns medium-5">
                  <Paragraph value="Some text goes here about how the practitioner came to join the practice" />
                </div>
                <div className="columns medium-3"> 
                  <button onClick={this.bookPractitioner} ref="practitioner2" className="med-button" type="button">BOOK NOW! </button>
                </div>
              </div>
             <br /><br /> 
            </div>

      );
  }
});

module.exports = Practitioners;
