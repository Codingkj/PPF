var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var MyButton = require('./Buttons.jsx');
var MyBreadcrumbs = require('./Breadcrumbs.jsx');
var MenuBar = require('./MenuBar.jsx');
var ClientMenuBar = require('./ClientMenuBarWhenLoggedIn.jsx');
var DisplayTimes = require('./DisplayTimes.jsx');
var MyCheckbox = require('./Checkbox.jsx');
var Spacer = require('./Spacer.jsx');
var CalendarMonth = require('./CalendarMonth.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var AppointmentStore = require('../stores/AppointmentStore.js');

var DateTime= React.createClass({

  getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
      dateSelected:'',
    };
  },


  handleChange: function () {
      console.log("IN DATE TIME CHANGING ");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
      dateSelected:AppointmentStore.getDateSelected(),
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

  bookIt:function(){
      AppointmentActionCreators.addAppointment(event);
  },

  render: function(){
    return (<div className="page-background1">           
             
              <ClientMenuBar />
              <Spacer height="20" />         
              <div className="row">
                  <div id="treatment-header" className="columns medium-12">
                    
                        <MyBreadcrumbs />
                        <br />
                  </div>
                  <Spacer height="20" />
                  <div>
                        <Header defaultValue="Date & Time" className="center"/>
                  </div>
              </div>
             
              <div className="row">
                 <div className="columns medium-6 medium-offset-1">
                      <Paragraph value="Choose a date for your appointment:"/>
                      <br />
                      <CalendarMonth />
                 </div>
                 <div className="columns medium-5">
                      
                      {this.state.dateSelected !== "" ?<DisplayTimes />:''}
                      <br />
                 </div>
              </div>
              <br />
              <div className="row">
                  <div className="columns medium-4 medium-offset-3">
                      <Paragraph value="Do you want a text/SMS reminder?"/>
                  </div>
                  <div className="columns medium-5">
                      <MyCheckbox />
                  </div>
              </div>
              <div className="row">
                  <div className="columns medium-4 medium-offset-3">
                      <Paragraph value="Do you agree with our cancellation policy"/>
                  </div>
                  
                  <div className="columns medium-1">
                      <MyCheckbox />
                  </div>
                  <div className="columns medium-4">
                      <Paragraph value="Read Policy" />
                  </div>
              </div>
              <div className="row">
                  <div className="columns medium-4 medium-offset-8">
                      <br />
                      <MyButton clicked={this.bookIt} className="med-button" type="button" value="BOOK IT!" />
                  </div>
              </div>
              <br /><br />
          </div>

      );
  }
});

module.exports = DateTime;
