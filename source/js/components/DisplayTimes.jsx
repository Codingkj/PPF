var React = require('react');
var MyButton = require('./Buttons.jsx');
var timeButton = require('./TimeButtons.jsx')
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');
var Paragraph = require('./Paragraph.jsx');
var ParagraphTime = require('./ParagraphTime.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');


var DisplayTimes= React.createClass({

getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
      isDateSelected:AppointmentStore.getDateSelected(),
      dateChosen:AppointmentStore.getValueOfDateSelected(),
      timeSelected:null,
      timeChosen:null,
  	};
  },


  handleChange: function () {
      console.log("CHANGING Display Times");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonthName(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
      isDateSelected:AppointmentStore.getDateSelected(),
      dateChosen:AppointmentStore.getValueOfDateSelected(),
      timeSelected:AppointmentStore.getTimeSelected(),
      timeChosen: AppointmentStore.getValueOfTimeSelected(),
    });
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
	var allAppointments = AppointmentStore.getAllAppointments();
	var freeTimes = [];
	var counter = 0;
	console.log('inside FREETIMES and DateRequested is....',dateRequested,event);

    while (counter < 11){
    	console.log('Appointment dateNumber is',allAppointments.dateNumber);
		if (allAppointments.dateNumber === dateRequested){
			if (allAppointments.email === ''){
				if (allAppointments.lock === 'OFF'){
					freeTimes[counter] = 'displayTime';
					}
				else {
					freeTimes[counter] = 'hidden';
				}
			}
		}
		else if (allAppointments.dateNumber !== dateRequested){
			freeTimes[counter] = 'displayTime';
		}

		counter = counter + 1;
	}
	return freeTimes;
  },

  timeClicked: function(event){
  	var timeChosenHere = event.target.id;
  	console.log('in TimeClicked timeChosenHere',timeChosenHere);
 	console.log('event and time-click',event);
  	AppointmentActionCreators.highlightTime(event);
  	AppointmentActionCreators.timeEntered(timeChosenHere);
		
  },

  render: function(){

	var isDateRequested = this.props.isDateChosen;
	var dateRequested = this.props.date; 
	console.log('DateChosen is ',dateRequested);
	freeTimes = this.freeTimes(dateRequested);

	console.log('freetimes value....',freeTimes[0],freeTimes[1],freeTimes[2],freeTimes[3],freeTimes[4],freeTimes[5],freeTimes[6],freeTimes[7],freeTimes[8],freeTimes[9],freeTimes[10]);

    return (<div>
			 <br />
			 	<div className="row">
					<div className="columns medium-12">
			 				<p>You have chosen this date: {this.props.dateChosen}</p>
                      
                      		<br />
                      		<p>Times that are available on that date are below. Please choose a time:</p>
							<br />
							<br />		
					</div>
				</div>	
				<div className="row">
					<div className="time-div columns medium-3">
						{freeTimes[0] === 'displayTime' ?<button id="9" onClick={this.timeClicked} value="09:00am" className="time-button" type="button"></button>:null}
					</div>
					<div className="time-div columns medium-3">	
					    {freeTimes[1] === 'displayTime' ?<button id="10" onClick={this.timeClicked} value="10:00am" className="time-button" type="button"></button>:null}
						
					</div>
					<div className="time-div columns medium-6">	
					 	{freeTimes[2] === 'displayTime' ?<button id="11" onClick={this.timeClicked} value="11:00am" className="time-button" type="button"></button>:null}
					</div>
				</div>
				<div className="row">
					<div className="time-div columns medium-3">	
						{freeTimes[3] === 'displayTime' ?<button id="12" onClick={this.timeClicked} value="12:00pm" className="time-button" type="button"></button>:null}
						
					</div>
					<div className="time-div columns medium-3">	
						{freeTimes[4] === 'displayTime' ?<button id="13" onClick={this.timeClicked} value="1:00pm" className="time-button" type="button"></button>:null}	
						
					</div>
					<div className="time-div columns medium-6">	
						{freeTimes[5] === 'displayTime' ?<button id="14" onClick={this.timeClicked} value="2:00pm" className="time-button" type="button"></button>:null}	
						
					</div>
				</div>
				<div className="row">
					<div className="time-div columns medium-3">
						{freeTimes[6] === 'displayTime' ?<button id="15" onClick={this.timeClicked} value="3:00pm" className="time-button" type="button"></button>:null}	
						
					</div>
					<div className="time-div columns medium-3">	
						{freeTimes[7] === 'displayTime' ?<button id="16" onClick={this.timeClicked} value="4:00pm" className="time-button" type="button"></button>:null}	
						
					</div>
					<div className="time-div columns medium-6">	
						{freeTimes[8] === 'displayTime' ?<button id="17" onClick={this.timeClicked} value="5:00pm" className="time-button" type="button"></button>:null}	
						
					</div>
				</div>
				<div className="row">	
					<div className="time-div columns medium-3">	
						{freeTimes[9] === 'displayTime' ?<button id="18" onClick={this.timeClicked} value="6:00pm" className="time-button" type="button"></button>:null}		
						
					</div>
					<div className="time-div columns medium-3">	
						{freeTimes[10] === 'displayTime' ?<button id="19" onClick={this.timeClicked} value="7:00pm" className="time-button" type="button"></button>:null}	
						
					</div>
					<div className="time-div columns medium-6">
					{this.state.timeChosen !== null ? <p>"Time selected was" {this.state.timeChosen}</p>:null}
					</div>
				</div>
				
      		</div>);
  }
});

module.exports = DisplayTimes;
