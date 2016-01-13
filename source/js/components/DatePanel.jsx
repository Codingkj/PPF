var React = require('react');
var MyButton = require('./Buttons.jsx');

var DatePanel = React.createClass({
  render: function() {
     return (<div className="date-panel" width={this.props.width} height={this.props.height}>
            <p>{this.props.text}</p> 
            </div>);
  }
});

module.exports = DatePanel;