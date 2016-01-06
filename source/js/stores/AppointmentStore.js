var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

//events is providedby node.js

//On opening screen user can:
// choose item from Navbar-
// choose to Book appointment 
//  --->> Login screen  Nothing stored
var MONTH = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var DAY_NAMES = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']; 

var practice = {
	number: 1122,
	street: 'Good Avenue',
	city: 'London',
	postcode:'SE1 4U2',
	phone: '555-2434',
	email: 'service@practice.com'
}

currentDate = new Date();
console.debug('immediately after setting initial value:',currentDate);
var currentMonth = currentDate.getMonth();
var currentMonthName = MONTH[currentMonth];


var currentState = {
		wholeDate:currentDate,
		date:currentDate.getDate(),
		day:currentDate.getDate().toString(),	
		month:currentDate.getMonth(),
		monthName: currentMonthName,
		year:'2016',
		componentPage:'WeekView',
		lock:'NO'
		}

var diaryEntry = {
	id:'001',
	dateNumber:'1',
	dateMonth:'January',
	dateYear: '2016',
	dayOfTheWeek: 'Tuesday',
	time: '12:00',
	reminder: 'ON',
	practitioner:'Angelo',
	treatment: 'Massage',
	lock: 'ON',
	email:'jsimpson@tt.com',
	manual: 'NO',
	}

function addAppointment(Appointment) {
	  diaryEntry[Appointment.id] = Appointment;
	  AppointmentStore.emit('change');
}
function addReminder(Appointment) {
	  diaryEntry[Appointment.id] = Appointment;
	  AppointmentStore.emit('change');
}
function bookAnAppointment(action){
	currentState.componentPage = 'Login';
	AppointmentStore.emit('change');
}
function bookPractitioner(action){
	currentState.componentPage = 'DateTime';
	AppointmentStore.emit('change');
}
function changeDateToNextDay(action){

	currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
	day = currentDate.getDate();
	month = currentDate.getMonth();
	year = currentDate.getFullYear();

	currentState = {
		wholeDate:currentDate,
		date: day,
		day: day.toString(),
		monthName: MONTH[month],
		month: month.toString(),
		year:year.toString(),
		componentPage:'ViewDay',
		lock:'NO'
		};
	AppointmentStore.emit('change');
}
function changeDateToPreviousDay(action){ 
	
 	currentDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
 	console.log('newCurrentDate',currentDate);
	day = currentDate.getDate();
	console.log('new day is...',day);
	month = currentDate.getMonth();
	year = currentDate.getFullYear();

	console.log('IN PREVIOUS DAY',day,month,year);

	currentState = {
		wholeDate:currentDate,
		date: day,
		day: day.toString(),
		monthName: MONTH[month],
		month: month.toString(),
		year:year.toString(),
		componentPage:'ViewDay',
		lock:'NO'
	};
	AppointmentStore.emit('change');
}


function changeToDailyView(action){
    currentState.componentPage = 'DailyView';
    AppointmentStore.emit('change');
}

function changeToWeekView(action){
    currentState.componentPage = 'WeekView';
    AppointmentStore.emit('change');
}

function changeToPreviousWeek(action){
	console.log('recalculating currentdate that is...',currentDate);
   currentDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
	day =currentDate.getDate();
	month =currentDate.getMonth();
	year =currentDate.getFullYear();

	currentState = {
		wholeDate:currentDate,
		date: day,
		day: day.toString(),
		monthName: MONTH[month],
		month: month.toString(),
		year:year.toString(),
		componentPage:'WeekView',
		lock:'NO'
		};
	AppointmentStore.emit('change');
	console.log('at end of change to PREVIOUS week',currentState.wholeDate);
}

function changeToNextWeek(action){

	console.log('got to re-calculating next week and currentDate is',currentDate);
   currentDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
   console.log('currentDate NEW value..',currentDate);
	day = currentDate.getDate();
	month = currentDate.getMonth();
	year = currentDate.getFullYear();
	console.log('after setting new date',currentDate);

	currentState = {
		wholeDate:currentDate,
		date: day,
		day: day.toString(),
		monthName: MONTH[month],
		month: month.toString(),
		year:year.toString(),
		componentPage:'WeekView',
		lock:'NO'
		};
		console.log('at end ofchange to NEXT week',currentState.wholeDate);
    AppointmentStore.emit('change');
}
function createAccount(action){
	currentState.componentPage = 'WeekView';
    AppointmentStore.emit('change');
}
function dashboard(action){
	currentState.componentPage = 'Dashboard';
    AppointmentStore.emit('change');
}
function dashboardPractitioner(action){
	currentState.componentPage = 'DashboardPractitioner';
    AppointmentStore.emit('change');
}
function dateAndTime(action){
	currentState.componentPage = 'Date-time';
    AppointmentStore.emit('change');
}

function landingPage(action){
	currentState.componentPage = 'LandingPage';
    AppointmentStore.emit('change');
}

function profiles(action){
	currentState.componentPage = 'Profiles';
    AppointmentStore.emit('change');
}
function removeAppointment(AppointmentId) {
	 delete diary[AppointmentId];
	 AppointmentStore.emit('change');
}
function removeReminder(AppointmentId) {
	 delete diary[AppointmentId];
  	AppointmentStore.emit('change');
}
function showApptDetails(action){
	currentState.componentPage = 'App-details';
    AppointmentStore.emit('change');
}
function treatment1(action){
	currentState.componentPage = 'Treatment1';
    AppointmentStore.emit('change');
}
function treatment2(action){
	currentState.componentPage = 'Treatment2';
    AppointmentStore.emit('change');
}

var AppointmentStore = objectAssign({}, EventEmitter.prototype, {
  
	addChangeListener: function (changeEventHandler) {
	    this.on('change', changeEventHandler);
	  },

	removeChangeListener: function (changeEventHandler) {
	    this.removeListener('change', changeEventHandler);
	  },

	getAllAppointments: function() {
	    return diaryEntry;
		},

	getCurrentDay: function(){
		return currentState.day;
	},
	getCurrentDate: function(){
	return currentDate;
	},

	getCurrentWholeDate: function(){
		return currentState.wholeDate;
	},

	getCurrentDateNum: function(){
		return currentState.date;
	},

	getCurrentMonth: function(){
		return currentState.monthName;
	}, 

	getCurrentYear: function (){
		return currentState.year;
	}, 

	getLockDayStatus: function (){
		return currentState.lock;
	},
	getCurrentComponent: function(){
		return currentState.componentPage;
	},
	
		
});

function handleAction(action) {
	console.log('INSIDE handleaction in Store',action.type);
	console.log('CurrentDate is ',currentDate);
	console.log('CurrentState.date is',currentState.date);
  // if (action.type === 'add_appointment') {
  //   addAppointment(action);
  // } else if (action.type === 'add_reminder') {
  //   addReminder(action);
  //    } else if (action.type === 'book_AnAppointment'){
  // 	bookAnAppointment(action);
  // } else if (action.type === 'book_practitioner'){
  // 	bookPractitioner(action);
  // } else if (action.type === 'get_PreviousDay'){
  // 	changeDateToPreviousDay(action);

  // } else if (action.type === 'get_NextDay'){
  // 	changeDateToNextDay(action);
  // } else 
  if (action.type === 'changeToDailyView'){
  	changeToDailyView(action);
  } else if (action.type === 'changeToWeekView'){
  	changeToWeekView(action);
  } else 
  if (action.type === 'changeToNextWeek'){
  	changeToNextWeek(action);
  }
 //  } else if (action.type === 'changeToPreviousWeek'){
 //  	changeToPreviousWeek(action);
  
 //  } else if (action.type === 'create_account'){
 //  	createAccount(action);
 //  }	else if (action.type === 'dashboard'){
 //  	dashboard(action);
 //  }	else if (action.type === 'dashboard_practitioner'){
 //  	dashboardPractitioner(action);
 //  }	else if (action.type === 'date_time'){
 //  	dateAndTime(action);
  
 
 //  }	else if (action.type === 'logout'){
 //  	landingPage(action);
 //  }	else if (action.type === 'login'){
 //  	landingPage(action);
  	
 //     } else if (action.type === 'lock_week'){
 //  	lock_week(action);
 //  	} else if (action.type === 'lock_day'){
 //  	lockDay(action);

 //  } else if (action.type === 'profiles'){
 //  	profiles(action);
 //   } else if (action.type === 'remove_appointment') {
 //    removeAppointment(action);
 //  } else if (action.type === 'remove_reminder'){
 //  	removeReminder(action);
 //  }else if (action.type === 'app_details'){
 //  	showApptDetails(action);

  
 //  }	else if (action.type === 'treatment-1'){
 //  	treatment1(action);
 //  }	else if (action.type === 'treatment-2'){
 //  	treatment2(action);
 //  } else if (action.type === 'unlock_week'){
 //  	unlockWeek(action);
 //  } else if (action.type === 'lock_appointment'){
 //  	lockAppointment(action);
 //  } else if (action.type === 'unlock_appointment'){
 //  	unlockAppointment(action);
 //  	} else if (action.type === 'unlock_day'){
 //  	unlockDay(action);
 //  	} else if (action.type === 'remove_all_appointments'){
 //  	unlockAppointment(action);
	// }
}

AppointmentStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = AppointmentStore;
  