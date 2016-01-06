var React = require('react');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');

var DisplayTimes= React.createClass({

getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus()
  	};
  },


  handleChange: function () {
      console.log("CHANGING Display Times");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
    });
    console.log('CHANGED TO ');
  },

  componentDidMount: function () {
      ClientStore.addChangeListener(this.handleChange);
      AppointmentStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
      ClientStore.removeChangeListener(this.handleChange);
      AppointmentStore.removeChangeListener(this.handleChange);
  },

  render: function(){

var counter;
var freeTimes = [];
var allAppointments = AppointmentStore.getAllAppointments;
var dateRequested;

if (allAppointments.dateNumber = dateRequested){
	if (allAppointments.email = ''){
	if (allAppointments.lock = 'NO'){
		freeTimes[counter]= allAppointments.time;
		}
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
