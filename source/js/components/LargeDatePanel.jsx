var React = require('react');

var LargeDatePanel = React.createClass({
  render: function() {
     return (<div className="large-date-panel" width={this.props.width} height={this.props.height}>
            <p>{this.props.text}</p> 
            </div>);
  }
});

module.exports = LargeDatePanel;