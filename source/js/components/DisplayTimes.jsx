var React = require('react');
var MyButton = require('./Buttons.jsx');
var timeButton = require('./TimeButtons.jsx')
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');

var DisplayTimes= React.createClass({

getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus()
  	};
  },


  handleChange: function () {
      console.log("CHANGING Display Times");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
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

  freeTimes: function (dateRequested){
	var allAppointments = AppointmentStore.getAllAppointments;
	var freeTimes = [];
	var counter = 0;
    while (counter < 11){
		if (allAppointments.dateNumber = dateRequested){
			if (allAppointments.email = ''){
				if (allAppointments.lock = 'NO'){
					freeTimes[counter] = 'displayTime';
					}
				else {
					freeTimes[counter] = 'hidden';
				}
			}
		}
		counter = counter + 1;
	}
	return freeTimes;
  },

  timeClicked: function(){

  },

  render: function(){

	var dateRequested = AppointmentStore.getCurrentDay();
	freeTimes = this.freeTimes(dateRequested);
	console.log('freetimes value::',freeTimes[1],freeTimes[3]);

    return (<div>
			 <br />
				<div className="row">
					<div className="time-div columns medium-3">
						<MyButton value="09:00am" className="time-button" type="button"/>
					</div>
					<div className="time-div columns medium-3">	
						<MyButton value="10:00am" className="time-button" type="button"/>
					</div>
					<div className="time-div columns medium-6">	
						<MyButton value="11:00am" className="time-button" type="button"/>
					</div>
				</div>
				<div className="row">
					<div className="time-div columns medium-3">	
						<MyButton value="12:00am" className="time-button" type="button"/>
					</div>
					<div className="time-div columns medium-3">		
						<MyButton value="1:00pm" show={freeTimes[4]} className="time-button" type="button"/>
					</div>
					<div className="time-div columns medium-6">	
						<MyButton value="2:00pm" show={freeTimes[5]} className="time-button" type="button"/>
					</div>
				</div>
				<div className="row">
					<div className="time-div columns medium-3">
						<MyButton value="3:00pm" show={freeTimes[6]} className="time-button" type="button"/>
					</div>
					<div className="time-div columns medium-3">	
						<MyButton value="4:00pm" show={freeTimes[7]} className="time-button" type="button"/>
					</div>
					<div className="time-div columns medium-6">	
						<MyButton value="5:00pm" show={freeTimes[8]} className="time-button" type="button"/>
					</div>
				</div>
				<div className="row">	
					<div className="time-div columns medium-3">		
						<MyButton value="6:00pm" show={freeTimes[9]} className="time-button" type="button"/>
					</div>
					<div className="time-div columns medium-3">	
						<MyButton value="7:00pm" show={freeTimes[10]} className="time-button" type="button"/>
					</div>
					<div className="time-div columns medium-6">
					</div>
				</div>
				
      		</div>);
  }
});

module.exports = DisplayTimes;
