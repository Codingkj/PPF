var React = require('react');
var MyButton = require('./Buttons.jsx');

var ConfirmAppointmentPanel = React.createClass({
  render: function() {
     return (<div> <a zf-open="animatedModal" className="button">Yes, we have saved it!</a>
			<div zf-modal="" id="animatedConfirmAppt" animation-in="slideInUp" animation-out="hingeOutFromMiddleY">
			<a zf-close="Click here to close" className="close-button">×</a>
			<p className="text-center"><em>Appointment has now been saved!</em></p>
			</div>
  }
});

module.exports = ConfirmAppointmentPanel;