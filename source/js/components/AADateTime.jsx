var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var MyButton = require('./Buttons.jsx');
var MyBreadcrumbs = require('./Breadcrumbs.jsx');
var MenuBar = require('./MenuBar.jsx');
var DisplayTimes = require('./DisplayTimes.jsx');
var MyCheckbox = require('./Checkbox.jsx');
var MyCalendar = require('./Calendar.jsx');
var ClientStore = require('../stores/ClientStore.js');

var DateTime= React.createClass({


  render: function(){
    return (<div className="section">
                <MenuBar />
             
              <div className="row">
                <div className="columns medium-12">
                    <div id="treatment-header" >
                        <MyBreadcrumbs />
                        <Header defaultValue="Date & Time" className="center"/>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-10 medium-offset-2">
                      <Paragraph value="Choose a date for your appointment:"/>
                      <br />
                      <MyCalendar />
                 </div>
              </div>
              <div className="row">
                  <div className="columns medium-offset-1 small-2 medium-4 large-4">
                    <Paragraph value="Times that are available on that date are:"/>
                    <DisplayTimes />
                    <br />
                    <Paragraph value="Please choose a time:"/>
                  </div>
              </div>
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
                      <Paragraph value="Read Policy"/>
                  </div>
              </div>
              <div className="row">
                  <div className="columns medium-4 medium-offset-8">
                      <br />
                      <MyButton className="med-button" type="button" value="BOOK IT!" />
                  </div>
              </div>
              <br /><br />
          </div>

      );
  }
});

module.exports = DateTime;
