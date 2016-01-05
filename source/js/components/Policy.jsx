var React = require('react');


var Policy = React.createClass({
  render: function() {
     return (<div className="alert callout std-panel-size" data-closable>
  			<h5>Our Privacy Policy</h5>
  			<p>Your details will not be shared with any further parties, but are provided solely to operate the funcationality within this booking system and assist you in getting the most out of your appointment with us.</p>
  			<button className="close-button" aria-label="Dismiss alert" type="button" data-close >
    		<span aria-hidden="true">&times;</span>
  			</button>
			</div>);
  }
});

module.exports = Policy;