var React = require('react');
var ReactDOM = require('react-dom');
var TableMonth = require('./TableMonth.jsx');

var CalendarMonth= React.createClass({
  render: function(){
    return (<div>

				<TableMonth />
      </div>);
  }
});

module.exports = CalendarMonth;
