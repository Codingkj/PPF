var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var DatePanel = require('./DatePanel.jsx');
var MyButton = require('./Buttons.jsx');
var MenuBar = require('./MenuBar.jsx');
var TableDay = require('./TableDay.jsx');
var TextInput = require('./TextInput.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var DashboardPractitioners = React.createClass({

  clientSearch:function(){

  },

  getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus()
    };
  },

  handleChange: function () {
      console.log("CHANGING dashboardPractitioner");
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
  weeklyView: function(){
    event.preventDefault();
     AppointmentActionCreators.weekView();
  },
  dailyView: function(){
    event.preventDefault();
     AppointmentActionCreators.dailyView();
  },
  render: function(){
    return (<div className="section">

              <MenuBar />
              <div className="row">
                  <div className="columns medium-12">
                      <Header defaultValue="The Practitioner Dashboard" className="center"/>
                  </div>
              </div>   
              <div className="row">
                  <div id="dashboard-appointments" className="columns medium-6 medium-offset-1">
                      <Paragraph value="Today's schedule is:"/>
                      <br />
                      <TableDay />
                  </div>
                  <div className="columns medium-5">
                      <br />
                      <h5>Manage Appointments</h5>
                      <br />
                      <div className="row">
                        <div className="columns medium-2">
                          <MyButton clicked={this.weeklyView} className="med-button" type="button" value="Go to WEEKLY View" /> 
                          <br />
                        </div>
                        <div className="columns medium-8 medium-offset-2">
                          <MyButton clicked={this.dailyView} className="med-button" type="button" value="Go to DAILY View" />    
                          <br />
                        </div>
                      </div>
                      <div className="row">
                        <div className="columns medium-12" id="d3">
                          <Paragraph value="Appointment bookings in the next 2 weeks (coloured by treatment type):" />
                          <img src="http://placehold.it/400x200"/> <br />
                        </div>
                
                      </div>
                      <div className="row">
                        <div className="columns medium-12" id="client-search">
                          <br />
                          <Paragraph value="Client Search" />
                          <TextInput placeholder="<client's name>" className="field30"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="columns medium-4 medium-offset-8">
                          <MyButton clicked={this.clientSearch} className="small-button" type="button" value="Go" />
                        </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="columns medium-8">
                      <Paragraph defaultValue="Search Results" />
                  </div>
              </div>
              
    </div>);
  }
});

module.exports = DashboardPractitioners;
