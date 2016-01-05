var React = require('react');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');

var DisplayTimes= React.createClass({


  render: function(){

var counter;
var freeTimes = [];
var allAppointments = AppointmentStore;


if (allAppointments.email = ''){
	if (allAppointments.lock = 'NO'){
		freeTimes[counter]= allAppointments.time
	}
}

    return (<div>
		
			<div>
				<MyButton value={freeTimes[counter]} />
			</div>
				
      </div>);
  }
});

module.exports = DisplayTimes;
