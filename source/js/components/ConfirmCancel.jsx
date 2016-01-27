var React = require('react');
var MyButton = require('./Buttons.jsx');

var ConfirmCancel = React.createClass({
  render: function() {
     return (
     		<div id="confirm-cancel" className="alert callout sml-panel-size" data-closable>
	     		<a zf-open="dialogModal" className="button">Confirmation</a>
				<div zf-modal="" id="dialogModal" overlay="false" overlay-close="false" className="tiny dialog">
					<h4>Do you <em>really</em> want to cancel this?</h4>
					<a zf-close="" className="alert button">Yeah</a>
					<a zf-close="" className="secondary button">Nah</a>
				</div>
			</div>
     			);
  }
});

module.exports = ConfirmCancel;