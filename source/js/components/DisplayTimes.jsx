var React = require('react');
var MyButton = require('./Buttons.jsx');
var timeButton = require('./TimeButtons.jsx')
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');
var Paragraph = require('./Paragraph.jsx');
var ParagraphTime = require('./ParagraphTime.jsx');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');


var DisplayTimes= React.createClass({
	
  freeTimes: function (dateChosen){
	var freeTimes = [];
	for (var x = 0; x < 11; x++){
			freeTimes[x] = 'free';
			}
	var counter = 0;

	var appointmentsOnTheDay = AppointmentStore.getCurrentUserAppointments();
	
	console.log('inside Freetimes appointmentsOnTheDay ARE: ',appointmentsOnTheDay);
	console.log('inside FREETIMES and DateChosen is....',dateChosen);
	console.log('LENGTH of appointmentsOnTheDay is...',appointmentsOnTheDay.length);

    for (var counter=0; counter<appointmentsOnTheDay.length -1;counter++){

    	if (appointmentsOnTheDay[counter].date == dateChosen) {
 
    			console.debug('CHECKING DAILY SLOTS',appointmentsOnTheDay[0].time);

				if (appointmentsOnTheDay[counter].time == '9'){
					if (appointmentsOnTheDay[counter].clientEmail === ""){
						freeTimes[counter] = 'free';
						}
					else {
						freeTimes[counter] = 'busy';
				}
			}
				if (appointmentsOnTheDay[counter].time == '10'){
					if (appointmentsOnTheDay[counter].clientEmail !== ""){
							freeTimes[counter] = 'busy';
							}
						else {
							freeTimes[counter] = 'free';
					}
				}
				if (appointmentsOnTheDay[counter].time == '11'){
					if (appointmentsOnTheDay[counter].clientEmail !== ""){
							freeTimes[counter] = 'busy';
							}
						else {
							freeTimes[counter] = 'free';
					}
				}
				if (appointmentsOnTheDay[counter].time == '12'){
					if (appointmentsOnTheDay[counter].clientEmail !== ""){
							freeTimes[counter] = 'busy';
							}
						else {
							freeTimes[counter] = 'free';
					}
				}
				if (appointmentsOnTheDay[counter].time == '13'){
					if (appointmentsOnTheDay[counter].clientEmail !== ""){
							freeTimes[counter] = 'busy';
							}
						else {
							freeTimes[counter] = 'free';
					}
				}
				if (appointmentsOnTheDay[counter].time == '14'){
					if (appointmentsOnTheDay[counter].clientEmail !== ""){
							freeTimes[counter] = 'busy';
							}
						else {
							freeTimes[counter] = 'free';
					}
				}
				if (appointmentsOnTheDay[counter].time == '15'){
					if (appointmentsOnTheDay[counter].clientEmail !== ""){
							freeTimes[counter] = 'busy';
							}
						else {
							freeTimes[counter] = 'free';
					}
				}
				if (appointmentsOnTheDay[counter].time == '16'){
					if (appointmentsOnTheDay[counter].clientEmail !== ""){
							freeTimes[counter] = 'busy';
							}
						else {
							freeTimes[counter] = 'free';
					}
				}
				if (appointmentsOnTheDay[counter].time == '17'){
					if (appointmentsOnTheDay[counter].clientEmail !== ""){
							freeTimes[counter] = 'busy';
							}
						else {
							freeTimes[counter] = 'free';
					}
				}
				if (appointmentsOnTheDay[counter].time == '18'){
					if (appointmentsOnTheDay[counter].clientEmail !== ""){
							freeTimes[counter] = 'busy';
							}
						else {
							freeTimes[counter] = 'free';
					}
				}
				if (appointmentsOnTheDay[counter].time == '19'){
					if (appointmentsOnTheDay[counter].clientEmail !== ""){
							freeTimes[counter] = 'busy';
							}
						else {
							freeTimes[counter] = 'free';
						}
					}
				}	
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

	var dateChosen = this.props.dateChosen;
    var isDateChosen = this.props.isDateChosen;
	console.log('DateChosen in DisplayTimes is ',dateChosen);
	freeTimes = this.freeTimes(dateChosen);

	console.log('freetimes value....',freeTimes[0],freeTimes[1],freeTimes[2],freeTimes[3],freeTimes[4],freeTimes[5],freeTimes[6],freeTimes[7],freeTimes[8],freeTimes[9],freeTimes[10]);

    return (<div>
			 <br />
			 	<div className="row">
					<div className="columns medium-12">
			 				<p>You have chosen this date:</p>
                      
                      		<br />
                      		<p>Times that are available on that date are below. Please choose a time:</p>
							<br />	
					</div>
				</div>	
				<div className="row">
					<div className="time-div columns medium-3">
						{freeTimes[0] === 'free' ?<button id="9" onClick={this.timeClicked} className="time-button" type="button">09:00am</button>:null}
					</div>
					<div className="time-div columns medium-3">	
					    {freeTimes[1] === 'free' ?<button id="10" onClick={this.timeClicked} className="time-button" type="button">10:00am</button>:null}
						
					</div>
					<div className="time-div columns medium-6">	
					 	{freeTimes[2] === 'free' ?<button id="11" onClick={this.timeClicked} className="time-button" type="button">11:00am</button>:null}
					</div>
				</div>
				<div className="row">
					<div className="time-div columns medium-3">	
						{freeTimes[3] === 'free' ?<button id="12" onClick={this.timeClicked} className="time-button" type="button">12:00</button>:null}
						
					</div>
					<div className="time-div columns medium-3">	
						{freeTimes[4] === 'free' ?<button id="13" onClick={this.timeClicked} className="time-button" type="button">1:00pm</button>:null}	
						
					</div>
					<div className="time-div columns medium-6">	
						{freeTimes[5] === 'free' ?<button id="14" onClick={this.timeClicked} className="time-button" type="button">2:00pm</button>:null}	
						
					</div>
				</div>
				<div className="row">
					<div className="time-div columns medium-3">
						{freeTimes[6] === 'free' ?<button id="15" onClick={this.timeClicked} className="time-button" type="button">3:00pm</button>:null}	
						
					</div>
					<div className="time-div columns medium-3">	
						{freeTimes[7] === 'free' ?<button id="16" onClick={this.timeClicked} className="time-button" type="button">4:00pm</button>:null}	
						
					</div>
					<div className="time-div columns medium-6">	
						{freeTimes[8] === 'free' ?<button id="17" onClick={this.timeClicked} className="time-button" type="button">5:00pm</button>:null}	
						
					</div>
				</div>
				<div className="row">	
					<div className="time-div columns medium-3">	
						{freeTimes[9] === 'free' ?<button id="18" onClick={this.timeClicked} className="time-button" type="button">6:00pm</button>:null}		
						
					</div>
					<div className="time-div columns medium-3">	
						{freeTimes[10] === 'free' ?<button id="19" onClick={this.timeClicked} className="time-button" type="button">7:00pm</button>:null}	
						
					</div>
					<div className="time-div columns medium-6">
					
					</div>
				</div>
				
      		</div>);
  }
});

module.exports = DisplayTimes;
