var React = require('react');
var ReactDOM = require('react-dom');

var Paragraph = require('./Paragraph.jsx');
var PpButton = require('./Buttons.jsx');
var InputText = require('./TextInput.jsx');
var InputTextArea = require('./TextArea.jsx');
var Header = require('./Header.jsx');
var ProfileImage = require('./ProfileImage.jsx');
var Panel = require('./Panel.jsx');
var Map = require('./Map.jsx');
var MenuBar = require('./MenuBar.jsx');
var Table = require('./Table.jsx');
var ContactForm = require('./ContactForm.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');


var LandingPage = React.createClass({

   getInitialState: function () {
    return {};
  },


  handleChange: function () {
      console.log("CHANGING FRONT PAGE");
    this.setState({
      component: AppointmentStore.getCurrentComponent()
    });
    console.log('CHANGED TO ',day,month,year);
  },

  componentDidMount: function () {
      ClientStore.addChangeListener(this.handleChange);
      AppointmentStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
      ClientStore.removeChangeListener(this.handleChange);
      AppointmentStore.removeChangeListener(this.handleChange);
  },

  titleClicked:function(){
    event.preventDefault();
     AppointmentActionCreators.login();
  },

  render: function(){
    return (<div className="page-background1">
              <MenuBar />
              
              <div className="backdrop">
                  <div className="row">
                      <div className="columns medium-12">
                          <PpButton clicked={this.titleClicked} value="Book An Appointment" className="x-large-button center" />
                      </div>
                  </div>  
              </div>
              <div className="row">
                  <div className="columns medium-12">
                    <br />
                    <Header defaultValue="Our Practitioners" className="center"/>
                    <br />
                  </div>
              </div>
              <div className="row">      
                  <div className="column medium-2 medium-offset-2">
                      <ProfileImage src="http://placehold.it/130x130"/> <br />
                  </div>
                  <div className="column medium-6">
                      <Paragraph className="profile-text" value="Angelo is a well-qualified and experienced massage therapist. He can offer Reiki, Sports Massages or a nice relaxing massage."/>
                      <br />
                  </div>
                  <div className="column medium-2">
                  </div>
              </div>
              <div className="row">
                  <div className="column medium-2 medium-offset-2">
                      <ProfileImage src="http://placehold.it/130x130"/> <br />
                  </div>
                  <div className="column medium-6">
                      <Paragraph className="profile-text" value="Dr Micheals has worked at Rejuvenation now for 7 year and has a wealth of experience in the Acupuncture field. He works Monday to Thursday at the clinic." />
                  </div>
                  <div className="column medium-2">
                  </div>
              </div>
              <div className="separator">
                  <div className="row">
                      <div className="large-12 columns">
                          <h3> just a test </h3>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="column medium-8 medium-offset-2">
                      <br />
                      <ContactForm />
                  </div>
              </div>      
     
              <div className="separator">
                  <div className="row">
                      <div className="large-12 columns">
                          <h3> just a test that this should not appear</h3>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="column medium-12">
                      <Header defaultValue="Our location" className="center"/>
                      <br />
                  </div>
              </div>
              <div className="row">
                  <div className="column medium-12 center">
                        <Map src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39742.75011544772!2d-0.093348!3d51.496301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876030d54f96c6d%3A0xcdb3274daab69673!2sLondon+SE1%2C+UK!5e0!3m2!1sen!2suk!4v1450884255041"  frameborder="1" allowfullscreen />
                  </div>
              </div>
              <div className="row">
                  <div className="column medium-12 center location-div">  
                        <Paragraph className="location-text" value="Street Address: 1122 Goodie Avenue, London, SE1 4U2"/>
                        <Paragraph className="location-text" value="Office Phone: 555-2434"/>
                        <Paragraph className="location-text" value="Email address: service@practice.com"/>
                  </div>
              </div>
           
    </div>); 
    }         
});

module.exports = LandingPage;
