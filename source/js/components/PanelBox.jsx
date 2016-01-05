var React = require('react');
var Panel = require('./Panel.jsx');
var AppDetails = require('./AppDetails.jsx');

var PanelBox = React.createClass({
 
  render: function() {
  	 
     return (<div>
     	<div width={this.props.width} height="20" className="panel-box">
     		<p className="panel-text">{this.props.text}</p>
     	</div>
     	</div>);
  }
});

module.exports = PanelBox;