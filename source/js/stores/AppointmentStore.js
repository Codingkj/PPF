var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var Utilities2 = require('../services/apptsaves.js');
var ClientStore = require('./ClientStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var HashId = require('../services/HashId.js');
//events is providedby node.js

//On opening screen user can:
// choose item from Navbar-
// choose to Book appointment 
//  --->> Login screen  Nothing stored
var MONTH = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var DAY_NAMES = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']; 


var currentDate = new Date();
console.debug('immediately after setting initial value:',currentDate);
var currentMonth = currentDate.getMonth();
var currentMonthName = MONTH[currentMonth];



var displayAppointments = '';

var currentState = {
		wholeDate:currentDate,
		date:currentDate.getDate(),
		day:currentDate.getDate().toString(),	
		month:currentDate.getMonth(),
		monthName: currentMonthName,
		year:'2016',
		currentPage:'LandingPage',
		lock:'NO',
		successMessage:'',
		failMessage:'',
		token:null,
		pageToShowAfterLogin:'dashboard',
		isDateChosen:false,
		isTimeChosen:false,
		dateChosen:'',
		daySelected:'',
		monthSelected:'',
		yearSelected:'',
		timeChosen:'',
		selectedPractitioner:'',
		selectedTreatment:'',
		reminderFlag:false,
		manualFlag:false,
		currentUserAppointments:{},
		};


var appointment = {
	token:'',
	dateChosen: currentDate,
	dateNumber:'7',
	dateMonth:'January',
	dateYear: '2016',
	time: '12:00',
	practitioner:'Angelo',
	treatment: 'Massage',
	lock: 'OFF',
	email:'jsimpson@tt.com',
	reminder: 'ON',
	manual: 'NO',
	};



function addAppointment(action) {
	 // var id = HashID.generate();
	 var saveToken = currentState.token;
	 var saveDate = currentState.dateChosen;
	 var saveDay = currentState.daySelected;
	 var saveMonth = currentState.monthSelected;
	 var saveYear = currentState.yearSelected;
	 var saveTime = currentState.timeChosen;
	 console.log('time chosen was',saveTime);

	 var saveEmail = ClientStore.getCurrentClientEmail();
	 var savePractitioner = currentState.selectedPractitioner;
	 var saveTreatment = currentState.selectedTreatment;
	 var saveReminderFlag = currentState.reminderFlag;
	 var saveManualFlag = currentState.manualFlag;

	 Utilities2.saveAppointment(saveToken, saveDate, saveDay, saveMonth, saveYear, saveTime, false, saveEmail, savePractitioner,saveTreatment,saveReminderFlag, saveManualFlag,function handleResponse(error, response) {
     console.log('BEEN to save appointment and returned');
     console.log('SAVE-DATA was:',saveDate,saveDay,saveMonth,savePractitioner,saveTreatment,saveReminderFlag);
	      if (error) {
	        console.log('that bit failed and we dont know why');
	        return;
	      }
      console.log('The response was',response);
      }.bind(this));
}
    

function addReminder(action) {
	  currentState.reminderFlag = true;
	  console.log('just set the reminder status to ',currentState.reminderFlag);
	  AppointmentStore.emit('change');
}
function afterCreateAccount(action){
	//need to save users details here.
	currentState.currentPage = 'Dashboard';
    AppointmentStore.emit('change');
}
function bookAnAppointment(action){
	//if token present then currentPage=Dashboardneeds if not currently logged in section
	currentState.currentPage = 'Login';
	AppointmentStore.emit('change');
}
function bookPractitioner(action){
	console.log('ACTION IN bookPractitioner is ',action);
	currentState.selectedPractitioner = action.practitioner;
	currentState.currentPage = action.nextPage;
	console.log('CURRENT PRACTITIONER has just been stored as',action.practitioner);
	AppointmentStore.emit('change');
}

function changeDateToNextDay(action){


	currentDate = new Date(currentState.wholeDate.getTime() + 24 * 60 * 60 * 1000);
 	console.log('IN NEXT DAY CurrentDate is now',currentDate);

	currentState.wholeDate = currentDate;
	currentState.date = currentDate.getDate();
		
	var tempday =  currentDate.getDate();
	currentState.day = tempday.toString();
	var month = currentDate.getMonth();
	currentState.month = month.toString();
	currentState.monthName = MONTH[month];
	var tempyear = currentDate.getFullYear();
	currentState.year = tempyear.toString();
	currentState.currentPage = 'DailyView';
	AppointmentStore.emit('change');
}


function changeDateToPreviousDay(action){ 
	
 	currentDate = new Date(currentState.wholeDate.getTime() - 24 * 60 * 60 * 1000);
 	console.log('IN PREVIOUS DAY CurrentDate is now',currentDate);

	currentState.wholeDate = currentDate;
	currentState.date = currentDate.getDate();
		
	var tempday =  currentDate.getDate();
	currentState.day = tempday.toString();
	var month = currentDate.getMonth();
	currentState.month = month.toString();
	currentState.monthName = MONTH[month];
	var tempyear = currentDate.getFullYear();
	currentState.year = tempyear.toString();
	currentState.currentPage = 'DailyView';
	AppointmentStore.emit('change');
}


function changeToDailyView(action){
    currentState.currentPage = 'DailyView';
    AppointmentStore.emit('change');
}

function changeToWeekView(action){
    currentState.currentPage = 'WeekView';
    AppointmentStore.emit('change');
}

function changeToPreviousWeek(action){
	console.log('in CHANGE TO PREVIOUS WEEK currentdate that is...',currentDate);
	currentDateUsed = currentState.wholeDate;
   	currentDate = new Date(currentDateUsed.getTime() - 7 * 24 * 60 * 60 * 1000);
	

	currentState.wholeDate = currentDate;
	currentState.date = currentDate.getDate();
		
	var tempday =  currentDate.getDate();
	currentState.day = tempday.toString();
	var month = currentDate.getMonth();
	currentState.month = month.toString();
	currentState.monthName = MONTH[month];

	var tempyear = currentDate.getFullYear();
	currentState.year = tempyear.toString();

    currentState.currentPage = 'WeekView';
	AppointmentStore.emit('change');
}

function changeToNextWeek(action){
 	console.log('in CHANGE TO NEXT WEEK currentdate that is...',currentDate);
	currentDateUsed = currentState.wholeDate;
   	currentDate = new Date(currentDateUsed.getTime() + 7 * 24 * 60 * 60 * 1000);
	
	console.debug('IN CHANGE TO NEXT WEEK',currentDate);

	currentState.wholeDate = currentDate;
	currentState.date = currentDate.getDate();
		
	var tempday =  currentDate.getDate();
	currentState.day = tempday.toString();
	var month = currentDate.getMonth();
	currentState.month = month.toString();
	currentState.monthName = MONTH[month];
	console.debug('IN CHANGE TO NEXT WEEK',currentDate);
	
	var tempyear = currentDate.getFullYear();
	currentState.year = tempyear.toString();

	currentState.currentPage = 'WeekView';
	AppointmentStore.emit('change');

}
function changeToNextMonth(action){
  
    var currentDate = action.currentDate;
    console.log('IN STORE and currentdate just changed in Previous Month to',currentDate)
    currentDate = new Date(currentDate.getTime());

    currentState.dateChosen = '';
	currentState.wholeDate = currentDate;

	var tempMonth = currentDate.getMonth();
	currentState.monthSelected = MONTH[tempMonth];
	currentState.monthName = MONTH[tempMonth];
	console.log('Just set the month NAME to ',currentState.monthSelected);
	console.log('in date Month is',MONTH[tempMonth],currentState.monthSelected);
	currentState.yearSelected = currentDate.getFullYear();

	currentState.currentDate = action.currentDate;
	currentState.currentPage = 'DateTime';
    AppointmentStore.emit('change');

}

function changeToPreviousMonth(action){
  
    var currentDate = action.currentDate;
    console.log('IN STORE and currentdate just changed in Previous Month to',currentDate)
    currentDate = new Date(currentDate.getTime());

    currentState.dateChosen = '';
	currentState.wholeDate = currentDate;
	currentState.daySelected = currentDate.getDate();

	var tempMonth = currentDate.getMonth();
	currentState.monthSelected = MONTH[tempMonth];
	currentState.monthName = MONTH[tempMonth];

	currentState.yearSelected = currentDate.getFullYear();

	currentState.currentDate = action.currentDate;
	currentState.currentPage = 'DateTime';
    AppointmentStore.emit('change');
}



function dashboard(action){
	currentState.currentPage = 'Dashboard';
    AppointmentStore.emit('change');
}
function dashboardPractitioner(action){
	currentState.currentPage = 'DashboardPractitioner';
    AppointmentStore.emit('change');
}
function dateAndTime(action){
	currentState.currentPage = 'DateTime';
    AppointmentStore.emit('change');
}
function dateChosen(action){
	currentState.isDateChosen = true;
	var tempDate = action.date;
	currentState.dateChosen = action.date;
	console.log('dateCHOSEN just updated in STORE to',action.date);
	currentState.daySelected = tempDate.getDate();
	var tempMonth = tempDate.getMonth();
	currentState.monthSelected = MONTH[tempMonth];
	console.log('in date Month is',tempMonth,MONTH[tempMonth],currentState.monthSelected);
	currentState.yearSelected = tempDate.getFullYear();
	currentUserAppointments = action.usedTimes;
	console.log('used TIMEs received by store are',action.usedTimes); 
	AppointmentStore.emit('change');
}
function failMessageChange(action){
	currentState.failMessage = action.text;
	AppointmentStore.emit('change');
}
function goCreateAccount(action){
	currentState.currentPage = 'GoToCreatePage';
    AppointmentStore.emit('change');
}
function highlightTime(action){
	currentState.currentPage = 'DateTime';
	//using the event target - can we find it again and change className?
	console.log('got to Highlight time function that should be local');
	AppointmentStore.emit('change');
}

function landingPage(action){
	currentState.currentPage = 'LandingPage';
	if (action.gotoPlace =='contacts')
		{};
    AppointmentStore.emit('change');
}
function login(action){
	currentState.currentPage = 'Login';
	AppointmentStore.emit('change');
}

function profiles(action){
	currentState.currentPage = 'Profiles';
    AppointmentStore.emit('change');
}
function removeAppointment(AppointmentId) {
	 //find matching appointment
	 		//find user and then day/month/year or find Id?
	 //find appointment that matches the one that was being displayed.
	 // delete diary[AppointmentId];
	 currentState.currentPage('Dashboard');
	 AppointmentStore.emit('change');
}
function removeReminder(action) {
	currentState.reminderFlag = false;
  	AppointmentStore.emit('change');
}

function returnedAppointments(action){
	console.debug('ACTION....',action.data);
	currentState.currentUserAppointments = action.data;
	console.debug('currentUserAppointments has justbeen set in returned appointments as:',currentState.currentUserAppointments);
}
function returnedAppointmentsOnOneDay(action){
	console.debug('action.data IN APPOINTMENTS FOR ONE DAY are...',action.data);
	currentState.currentUserAppointments = action.data;
	AppointmentStore.emit('change');
}

function showApptDetails(action){
	currentState.currentPage = 'App-details';

    AppointmentStore.emit('change');
}
function showFreeTimes(action){
	currentState.currentPage = 'DateTime';
	dateRequested = action.date;
	allAppointments = AppointmentStore.getAllAppointments();

	for (var freeSlot in allAppointments){
		if (allAppointments.date === dateRequested){
			allAppointments.isdateSelected === 'YES'
			}
		} 
	AppointmentStore.emit('change');
}
function storeMyToken(action){
	currentState.token = action.token;
	console.log('current state TOKEN just been set as',currentState.token);
	AppointmentStore.emit('change');
}
function successMessageChange(action){
	currentState.successMessage = action.text;
	AppointmentStore.emit('change');
}
function timeEntered(action){
	currentState.timeSelected = true;
	currentState.timeChosen = action.time;
	AppointmentStore.emit('change');
}
function treatment1(action){
	//need to assign the current treatment.
	currentState.currentPage = 'Treatment1';
	currentState.practitioner= action.practitioner;
    AppointmentStore.emit('change');
}
function treatment2(action){
	//need to assign the current treatment.
	currentState.currentPage = 'Treatment2';
	currentState.practitioner= action.practitioner;
    AppointmentStore.emit('change');
}
function treatmentUpdate(action){
	currentState.selectedTreatment = action.treatment;
	currentState.currentPage = 'DateTime';
	AppointmentStore.emit('change');
}
function weekView(action){
	currentState.currentPage = 'WeekView';
    AppointmentStore.emit('change');
}

var AppointmentStore = objectAssign({}, EventEmitter.prototype, {
  
	addChangeListener: function (changeEventHandler) {
	    this.on('change', changeEventHandler);
	  },

	removeChangeListener: function (changeEventHandler) {
	    this.removeListener('change', changeEventHandler);
	  },

	

	getCurrentUserAppointments:function(){
		console.debug('in STORE - currentUserAppointments are:',currentState.currentUserAppointments);
		return currentState.currentUserAppointments;
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

	getCurrentMonthName: function(){
		return currentState.monthName;
	}, 

	getCurrentYear: function (){
		return currentState.year;
	}, 

	getLockDayStatus: function (){
		return currentState.lock;
	},
	getCurrentComponent: function(){
		return currentState.currentPage;
	},
	getMonthName: function(monthNumber){
		var monthName = MONTH[monthNumber];
		return monthName; 
	},
	getIsDateChosen: function(){
		return currentState.isDateChosen;
	},
	getIsTimeChosen: function(){
		return currentState.isTimeChosen;
	},
	getSelectedPractitioner:function(){
		return currentState.selectedPractitioner;
	},
	getSelectedTreatment:function(){
		return currentState.selectedTreatment;
	},
	getValueOfDateSelected:function(){
		return currentState.dateChosen;
	},
	getValueOfTimeSelected:function(){
		return currentState.timeChosen;
	},
	getValueOfMonthSelected:function(){
		return currentState.monthSelected;
	},
	getValueOfYearSelected:function(){
		return currentState.yearSelected;
	},
	getValueOfDaySelected:function(){
		return currentState.daySelected;
	},
	getToken: function(){
		console.log('returning this Token from STORE:',currentState.token);
		return currentState.token;
	},
	getReminderFlag: function(){
		return currentState.reminderFlag;
	},
	getManualFlag: function(){
		return currentState.manualFlag;
	},
	getFailMessage:function(){
		return currentState.failMessage;
	},
	getSuccessMessage:function(){
		return currentState.successMessage;
	},
	getPageToShowAfterLogin:function(){
		return currentState.pageToShowAfterLogin;
	},
});

function handleAction(action) {
	
  if (action.type === 'add_appointment') {
    addAppointment(action)
  } else if (action.type === 'add_reminder') {
    addReminder(action);
  } else if (action.type === 'after_create_account'){
  	afterCreateAccount(action);
  } else if (action.type === 'book_AnAppointment'){
  	bookAnAppointment(action);
  } else if (action.type === 'book_practitioner'){
  	bookPractitioner(action);
 
  } else if (action.type === 'changeToDailyView'){
  	changeToDailyView(action);
  } else if (action.type === 'changeToWeekView'){
  	changeToWeekView(action);
  } else if (action.type === 'changeToNextWeek'){
  	changeToNextWeek(action);
  } else if (action.type === 'changeToPreviousWeek'){
  	changeToPreviousWeek(action);
   } else if (action.type === 'clear_date'){
  	currentState.isDateChosen = false;
  }	else if (action.type === 'dashboard'){
  	dashboard(action);
  }	else if (action.type === 'show_dashboard_practitioner'){
  	dashboardPractitioner(action);
  }	else if (action.type === 'date_time'){
  	dateAndTime(action);
  }	else if (action.type === 'date_chosen'){
  	dateChosen(action);
  } else if (action.type === 'fail_message'){
  	failMessageChange(action);
  } else if (action.type === 'get_previousDay'){
  	console.log('got to app store');
  	changeDateToPreviousDay(action);

  } else if (action.type === 'get_nextDay'){
  	console.log('got to app store');
  	changeDateToNextDay(action);
  } else if (action.type === 'go_create_account'){
  	goCreateAccount(action);
  } else if (action.type === 'highlight_time'){
  	highlightTime(action);
  }	else if (action.type === 'landingPage'){
  	landingPage(action);
  
  }	else if (action.type === 'logout'){
  	landingPage(action);
  }	else if (action.type === 'login'){
  	login(action);
  	
  } else if (action.type === 'lock_week'){
  	lock_week(action);
  } else if (action.type === 'lock_day'){
  	lockDay(action);
  } else if (action.type === 'next_month'){
  	changeToNextMonth(action);
  } else if (action.type === 'previous_month'){
  	changeToPreviousMonth(action);
  } else if (action.type === 'profiles'){
  	profiles(action);
  } else if (action.type === 'remove_appointment') {
    removeAppointment(action);
  } else if (action.type === 'remove_reminder'){
  	removeReminder(action);
  } else if (action.type === 'returned_appointments'){
  	returnedAppointments(action);
  } else if (action.type === 'returned_appointments_on_one_day'){
  	returnedAppointmentsOnOneDay(action);
  } else if (action.type === 'app_details'){
  	showApptDetails(action);
  }	else if (action.type === 'store_token'){
  	storeMyToken(action);
  }	else if (action.type === 'show_free_times'){
  	showFreeTimes(action);
  }	else if (action.type === 'success_message'){
  	successMessageChange(action);
  }	else if (action.type === 'time_entered'){
  	timeEntered(action);
  }	else if (action.type === 'treatment1'){
  	treatment1(action);
  }	else if (action.type === 'treatment2'){
  	treatment2(action);
  }	else if (action.type === 'treatment_chosen'){
  	treatmentUpdate(action);
  } else if (action.type === 'unlock_week'){
  	unlockWeek(action);
  } else if (action.type === 'lock_appointment'){
  	lockAppointment(action);
  } else if (action.type === 'unlock_appointment'){
  	unlockAppointment(action);
  } else if (action.type === 'unlock_day'){
  	unlockDay(action);
  } else if (action.type === 'remove_all_appointments'){
  	unlockAppointment(action);
  } else if (action.type === 'week_view'){
  	weekView(action);
 
  }
}

AppointmentStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = AppointmentStore;
  