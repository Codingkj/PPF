var React = require('react');
var MyButton = require('./Buttons.jsx');

var ConfirmCancel = React.createClass({
  render: function() {
     return (
     		<div className="alert callout sml-panel-size" data-closable>
     			<div className="row">
     				<div className="columns medium-10 medium-offset-1">
			  			<button className="close-button" aria-label="Dismiss alert" type="button" data-close >
			    		<span aria-hidden="true">&times;</span>
			  			</button>
			  		</div>
				</div>
				<div className="row">
					<div className="columns medium-10 medium-offset-2">
						<MyButton type="button" className="large-button" value="Are you sure you want to cancel?" />
						<br />
					</div>
				</div>
				<div className="row">
					<div className="columns medium-5 medium-offset-1">
						<MyButton type="button" className="med-button" value="YES" />
					</div>
					<div className="columns medium-5 medium-offset-1>">
						<MyButton type="button" className="med-button" value="No, Go Back "/>
					</div>
				</div>
			</div>);
  }
});

module.exports = ConfirmCancel;