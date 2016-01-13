var React = require('react');
var ReactDOM = require('react-dom');
var Calendar = require('rc-calendar');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var MyCalendar= React.createClass({
  render: function(){
    return (<div>

				<Calendar className="calendar-style"/>
      </div>);
  }
});

module.exports = MyCalendar;
