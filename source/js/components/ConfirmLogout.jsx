var React = require('react');
var MyButton = require('./Buttons.jsx');

var ConfirmLogout = React.createClass({
  render: function() {
     return (
     		<div className="alert callout std-panel-size" data-closable>
     			<div className="row">
     				<div className="columns medium-10 medium-offset-2">
			  			<button className="close-button" aria-label="Dismiss alert" type="button" data-close >
			    		<span aria-hidden="true">&times;</span>
			  			</button>
			  		</div>
				</div>
				<div className="row">
					<div className="columns medium-11 medium-offset-1">
						<p>You are now logged out of the Rejuvenation Booking System. To view your appointments, please login again.</p>
					</div>
				</div>
				<div className="row">
					<div className="columns medium-3 medium-offset-2">
						<MyButton type="button" className="large-button" value="OK" />
					</div>
					<div className="columns medium-5 medium-offset-2">
						<br />
						<MyButton type="button" className="med-button" value="LOGIN" />
					</div>
				</div>
			</div>);
  }
});

module.exports = ConfirmLogout;