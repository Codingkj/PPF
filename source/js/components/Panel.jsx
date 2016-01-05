var React = require('react');


var Panel = React.createClass({
  render: function() {
     return (<div className="alert callout std-panel-size" data-closable>
	  			<h5>This is Important!</h5>
	  			<p>But when youre done reading it, click the close button in the corner to dismiss this alert.</p>
	  			<button className="close-button" aria-label="Dismiss alert" type="button" data-close >
	    		<span aria-hidden="true">&times;</span>
	  			</button>
			</div>);
  }
});

module.exports = Panel;