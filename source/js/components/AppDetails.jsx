var React = require('react');
var MyButton = require('./Buttons.jsx');
var LockButton = require('./LockButtons.jsx');
var Header = require('./Header.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');
var PanelBox = require('./PanelBox.jsx');
var Panel = require('./Panel.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var AppDetails = React.createClass({

  render: function() {
  	var items = AppointmentStore.getAllAppointments;
  	var targetClient = ClientStore.getAllClients;

     return (
     	
     		<div className="alert callout sml-panel-size" data-closable>

     			<div className="row">
     				<div className="columns medium-12">
			  			<button className="close-button" aria-label="Dismiss alert" type="button" data-close >
			    		<span aria-hidden="true">&times;</span>
			  			</button>
			  			
			  		</div>
				</div>
				<div className="header-background">
					<div className="row">
						<div className="columns medium-12">
					 
							<Header defaultValue="Appointment Details" className="center" />
						</div>
					</div>
				</div>		
				<div className="date-highlight">
					<div className="row">
						<div className="columns medium-12">	
							<p className=" center">{items.dateNumber + ' ' + items.dateMonth + ' '+ items.dateYear + '    ' + items.time}</p>
						</div>
					</div>
				</div>
				<div>
					<div className="row">
						<div className="columns medium-11 medium-offset-1">
							<br />
							<p><strong>Client: </strong> {targetClient.fname + ' '+targetClient.lname}</p>

							<p><strong>Treatment requested: </strong>{items.treatment}</p>
							<p><strong>Mobile phone: </strong>{targetClient.mobile}</p>
							<p><strong>Email address: </strong>{items.email}</p>
							<br />
							<p><strong>Clients previous appointment: </strong></p>
							<p><strong>Previous treatment:</strong></p>
							<p><strong>Next appointment:</strong></p>
							<p><strong>Next treatment: </strong></p>
							<br />
							<LockButton />
						</div>
					</div>
					<div className="row">
						<div className="columns medium-6 medium-offset-6">
							<MyButton type="button" className="med-button" value="CLOSE "/>
						</div>
					</div>
				</div>
			</div>);
  	}
});

module.exports = AppDetails;