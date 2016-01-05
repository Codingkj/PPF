var React = require('react');
var MyButton = require('./Buttons.jsx');
var LockButton = require('./LockButtons.jsx');
var Header = require('./Header.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');
var PanelBox = require('./PanelBox.jsx');
var Panel = require('./Panel.jsx');

var AppDetails = React.createClass({

  render: function() {
  	var items = AppointmentStore;
  	var targetClient = ClientStore;

     return (
     		
     		<div className="alert callout sml-panel-size" data-closable>
     			<div className="row">
     				<div className="columns medium-10 medium-offset-2">
			  			<button className="close-button" aria-label="Dismiss alert" type="button" data-close >
			    		<span aria-hidden="true">&times;</span>
			  			</button>
			  			
			  		</div>
				</div>
				<div className="row">
					<div className="columns medium-12  header-background">
					   <div className="columns medium-10 center">
						<Header defaultValue="Appointment Details" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="columns medium-12">
						<p>{items.dateNumber} + ' ' + {items.dateMonth} + ' '+ {items.dateYear} + ' ' + {items.time}</p>
					</div>

				</div>
				<div className="row">
					<div className="columns medium-6">
						<PanelBox text="Client Name:" width="20"/>
					</div>
					<div className="columns medium-6 ">
						<PanelBox text={targetClient.fname} width="20"/>
					</div>
				</div>
				<div className="row">
					<div className="columns medium-6">
						<PanelBox text="Treatment Requested:" width="20"/>
					</div>
					<div className="columns medium-6 ">
						<PanelBox text={items.treatment} width="20"/>
					</div>
				</div>
				<div className="row">
					<div className="columns medium-offset-2 medium-10">		
						
						<p>Mobile Phone: {targetClient.mobile}</p>
						<p>Email Address: {items.email}</p>
						<br />
						<p>Previous Appointment:</p>
						<p>Previous Treatment:</p>
						<p>Next Appointment:</p>
						<p>Next Treatment: </p>
						<br />
						<LockButton />
					</div>
				</div>
				<div className="row">
					<div className="columns medium-6 medium-offset-6">
						<MyButton type="button" className="med-button" value="CLOSE "/>
					</div>
				</div>
			</div>);
  	}
});

module.exports = AppDetails;