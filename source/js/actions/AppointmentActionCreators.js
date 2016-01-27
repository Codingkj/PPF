var Dispatcher = require('../dispatcher/Dispatcher');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var Utilities2 = require('../services/apptsaves.js');
var uuid = require('node-uuid');


function addAppointment(event) {
    var action = {
      type: 'add_appointment',
      time: event.target.textContent,
    };   
    Dispatcher.dispatch(action);
}

function addReminder(id){

    var action = {
      type:'add_reminder'
    };
    console.log('now going to dispatch ADD REMINDER ACTION FROM AC');
 Dispatcher.dispatch(action);
}

function afterCreateAccount(){
    var action = {
      type:'after_create_account'
    };
 Dispatcher.dispatch(action);
}

function appDetails(){
    var action = {
      type:'app_details'
    };
 Dispatcher.dispatch(action);
}

function bookAnAppointment(practitionerString){
    var action = {
      type:'book_AnAppointment',
      practitioner:practitionerString,
    };
 console.log('ACTION type has just been set as',action.type);
 Dispatcher.dispatch(action);
}

function bookPractitioner(name){

  if (name === 'Angelo') {
    nextPage = 'Treatment1';
  } 
  else
  { 
    nextPage ='Treatment2';
  }
    var action = {
      type:'book_practitioner',
      practitioner:name,
      nextPage:nextPage
    };
  console.log('ACTION type has just been set as',action.type);
 Dispatcher.dispatch(action);
}

function changeToPreviousWeek(){
  console.log('in action creator');
   var action = {
      type:'changeToPreviousWeek',
      
    };
    console.log('ACTION type has just been set as',action.type);
 Dispatcher.dispatch(action);
}

function changeToNextWeek(){
   var action = {
      type:'changeToNextWeek'
      
    };
    console.log('ACTION type has just been set as',action.type);
 Dispatcher.dispatch(action);
}

function changeToDailyView(){
    var action = {
      type:'changeToDailyView'
    };
 Dispatcher.dispatch(action);
 console.log('ACTION type has just been set as',action.type);
}

function clearIsDateChosen(){
    var action = {
      type:'clear_date',
    };
 Dispatcher.dispatch(action);
 console.log('ACTION type has just been set as',action.type);
}

function changeToWeekView(){
    var action = {
      type:'changeToWeekView'
    };
 Dispatcher.dispatch(action);
 console.log('ACTION type has just been set as',action.type);
}
function changeToPreviousMonth(newCurrentDate){
   var action = {
      type:'previous_month',
      currentDate:newCurrentDate
    };
 Dispatcher.dispatch(action);
}
function changeToNextMonth(newCurrentDate){
   var action = {
      type:'next_month',
      currentDate:newCurrentDate
    };
 Dispatcher.dispatch(action);
}

function contactFormReceived(name){

  var action = {
      type:'contact_form_sent',
      sender: name,
    };
 Dispatcher.dispatch(action);
}

function createClient(){
  var action = {
      type:'go_create_account'
    };
 Dispatcher.dispatch(action);
}

function dashboardPractitioner(){
  console.log('got to AC dashboardPractitioner');
    var action = {
      type:'show_dashboard_practitioner'
    };
 Dispatcher.dispatch(action);
}

function dateAndTime(){
    var action = {
      type:'date_time'
    };
     console.log('ACTION type has just been set as',action.type);
 Dispatcher.dispatch(action);
}

function dateChosen(date){
   console.log('dateChosen in ACTIONCREATOR is',date);
    var usedTimes = getAllAppointmentsForOneDayFromBackEnd(date);
    var action = {
      type:'date_chosen',
      date: date,
      usedTimes:usedTimes,
    };
    console.log('action contents for dateChosen are',action);
 Dispatcher.dispatch(action);
}



function dashboard () {
    //go to backend and get appointments
   var userToken = AppointmentStore.getToken();
   console.log('Token we have in getAllAppointments is',userToken);
   var userEmail = ClientStore.getCurrentClientEmail();
   console.log('the Email RETRIEVED is...', userEmail);
      
   Utilities2.getUserAppointments(userToken, userEmail, function handleResponse(error, response) {
        console.log('BEEN to GET appointments');
          if (error) {
            AppointmentActionCreators.failMessage('Could not GET appointment.');
            console.log('Your GET Failed');
          return;
          }
      console.log('the response was',response);
       
      successMessage('GOT Appointments!');

      var action = {
        type:'returned_appointments',
        data: response,
      };
      console.log('ACTION type dispatched from getAllAppointments',action.type);
      Dispatcher.dispatch(action);

      var action = {
          type:'dashboard',
      };
      Dispatcher.dispatch(action);
      }.bind(this));      
}

function failMessage(message){
    var action = {
      type:'fail_message',
      text: message,
    };
 Dispatcher.dispatch(action);
 console.log('action type has just been set as',action.type);
  }

function getAllAppointmentsForOneDayFromBackEnd(dateChosen){
   console.log('DATE CHOSEN IS: ',dateChosen);
   var userToken = AppointmentStore.getToken();
   console.log('Token we have in getAllAppointments is',userToken);
   var userEmail = ClientStore.getCurrentClientEmail();
   console.log('the Email RETRIEVED is...', userEmail);
   Utilities2.getAllUserAppointmentsOnOneDay(userToken, dateChosen, function handleResponse(error, response) {
          console.log('BEEN to GET appointments');
            if (error) {
              AppointmentActionCreators.failMessage('Could not GET appointment.');
              console.log('Your GET Failed');
            return;
            }
        console.log('the response from get appointment was',response);
            
        successMessage('GOT Appointments!');
        var action = {
          type:'returned_appointments_on_one_day',
          data: response,
        };
        console.log('ACTION type dispatched from getAllAppointments',action.type);
        Dispatcher.dispatch(action);
    });
}

function getAllUsers(){
   
   var userToken = AppointmentStore.getToken();
   console.log('Token we have in getAllClients is',userToken);
  
   Utilities2.getAllUsers(userToken, function handleResponse(error, response) {
        console.log('BEEN to GET Clients');
            if (error) {
              AppointmentActionCreators.failMessage('Could not GET client.');
              console.log('Your GET Failed');
            return;
            }
        console.log('the response from get clients',response);  
          
        successMessage('GOT Clients!');
        var action = {
          type:'returned_clients',
          data: response,
        };
        console.log('ACTION dispatched from getAllClients',action.data);
        Dispatcher.dispatch(action);
    });
}

function getAllClients(){
   
   var userToken = AppointmentStore.getToken();
   console.log('Token we have in getAllClients is',userToken);
  
   Utilities2.getAllUsers(userToken, function handleResponse(error, response) {
        console.log('BEEN to GET Clients');
            if (error) {
              AppointmentActionCreators.failMessage('Could not GET client.');
              console.log('Your GET Failed');
            return;
            }
        console.log('the response from get clients',response);  
          
        successMessage('GOT Clients!');
        var action = {
          type:'returned_clients',
          data: response,
        };
        console.log('ACTION dispatched from getAllClients',action.data);
        Dispatcher.dispatch(action);
    });
}

function getAllAppointments(){
   
   var userToken = AppointmentStore.getToken();
  
   Utilities2.getAllAppointments(userToken, function handleResponse(error, response) {
        console.log('BEEN to GET Appointments');
            if (error) {
              AppointmentActionCreators.failMessage('Could not GET client.');
              console.log('Your GET Failed');
            return;
            }
        console.log('the response from get clients',response);  
      
        successMessage('GOT Appointments');
         var action = {
          type:'returned_appointments',
          data: response,
        };
        console.log('ACTION type dispatched from getAllappointments',action.type);
        Dispatcher.dispatch(action);
    });
   
}


function getPreviousDay(){
    var action = {
      type:'get_previousDay',
     
    };
 
 console.log('action type has just been set as',action.type);
 Dispatcher.dispatch(action);
  }

function getNextDay(){
    var action = {
      type:'get_nextDay',
    };

 console.log('action type has just been set as',action.type);
  Dispatcher.dispatch(action);
  }



function highlightTime(){
var action = {
      type:'highlight_time'
    };
 Dispatcher.dispatch(action);
}

function home(){
  var action = {
      type:'landingPage'
    };
 Dispatcher.dispatch(action);
}

function lockAppointment(date, time,month,year){
    var action = {
        type: 'lock_appointment',
        date: date,
        time: time,
        month: month,
        year: year,
        lock: 'ON',
      };
      
      Dispatcher.dispatch(action);
    }

function turnLockWeekOn(startDateOfWeek){
    // for (var count=startDateOfWeek;count<startDateOfWeek+8;count++){
    //   lockday(count)
    // }
    var action = {
        type: 'lock_week',
      };
      
      Dispatcher.dispatch(action);
  }

function lockDay(Date,month,year){
    var times = ['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00']
    for (var iterator = 1; iterator < 12;iterator++){
      lockAppointment(date,times[iterator],month,year);
    }
    var action = {
        type: 'lock_day',
      };
      
      Dispatcher.dispatch(action);
  }

function logout(){
    var action = {
      type:'logout'
    };
 Dispatcher.dispatch(action);
}

function login(){
    var action = {
      type:'login'
    };
  console.log('ACTION type has just been set as',action.type);
 Dispatcher.dispatch(action);
}



function profiles(){
    var action = {
      type:'profiles'
    };
 Dispatcher.dispatch(action);
}

function removeAppointment(appointmentToRemove){
 console.log('GOT to ReMOVE an Appointment',appointmentToRemove);
 
 var userToken = AppointmentStore.getToken();
 console.log('passing this value as the TOKEN: to removeAppointments',userToken);
  
 Utilities2.removeAppointment(userToken, appointmentToRemove, function handleResponse(error, response) {
        console.log('BEEN to ReMOVE an Appointment');
            if (error) {
              AppointmentActionCreators.failMessage('Could not remove client.');
              console.log('Your GET Failed');
            return;
            }
        console.log('the response from REMOVE appointments',response);  
         
         
    });
 console.log('In remove appointment - about to dispatch action to refresh page');
 var action = {
          type:'dashboard',
        };
console.log('ACTION type dispatched from removeAppointments',action.type);
Dispatcher.dispatch(action);
 
}

function removeAllAppointments() {
    var action = {
      type: 'remove_all_appointments',
    };
    
    Dispatcher.dispatch(action);
  }

function removeReminder(id){
Utilities2.removeReminder(userToken, id, function handleResponse(error, response) {
        console.log('BEEN to ReMOVE A Reminder');
            if (error) {
              AppointmentActionCreators.failMessage('Could not remove reminder.');
              console.log('Your remove Failed');
            return;
            }
        console.log('the response from REMOVE reminder',response);    
    });

    var action = {
      type:'dashboard'
    };
    console.log('In ActionCreator - about to dispatch REMOVE REMINDER');
 Dispatcher.dispatch(action);
}

function showFreeTimes(dayPicked){
  console.log('at start of showFreeTimes');
  var action = {
    type: 'show_free_times',
    date: dayPicked
  };
  console.log('ACTION type has just been set as',action.type);
  Dispatcher.dispatch(action);
}

function setCurrentClientEmail(username){
  console.log('setting client email');
 var action = {
    type: 'set_clientEmail',
    email: username
  };
  console.log('inside actioncreator ',action.email);
  Dispatcher.dispatch(action);
}
function showContactDetails(){
  var action = {
    type: 'landingPage',
    gotoPlace: 'contacts',
  };
  console.log('action type has just been set as',action.type);
Dispatcher.dispatch(action);
}

function storeToken(token){
  var action = {
    type: 'store_token',
    token: token,
  };
  console.log('action type has just been set as',action.type);
Dispatcher.dispatch(action);
}

function successMessage(message){
    var action = {
      type:'success_message',
      text: message,
    };
 Dispatcher.dispatch(action);
 console.log('action type has just been set as',action.type);
  }

function timeEntered(time){
var action = {
      type:'time_entered',
      time: time,
    };
 Dispatcher.dispatch(action);
 console.log('action type has just been set as',action.type);
  }

function treatment1(){
    var action = {
      type:'treatment-1'
    };
 Dispatcher.dispatch(action);
}

function treatment2(){
    var action = {
      type:'treatment-2'
    };
 Dispatcher.dispatch(action);
}

function treatmentUpdate(treatmentChosen){
  var action = {
        type: 'treatment_chosen',
        treatment: treatmentChosen,
      };
      
      Dispatcher.dispatch(action);
  }

function unlockAppointment(date, time){
    var action = {
        type: 'unlock_appointment',
      };
      
      Dispatcher.dispatch(action);
    }
  
function unlockDay(Date){
    var action = {
        type: 'unlock_day',
      };     
      Dispatcher.dispatch(action);
    }
   
function turnLockWeekOff(startDateOfWeek){
   var action = {
      type: 'unlock_week',
    };
    
    Dispatcher.dispatch(action); 
  }

function weekView(){
   var action = {
      type: 'week_view',
    }; 
    Dispatcher.dispatch(action); 
}

module.exports = {
  afterCreateAccount:afterCreateAccount,
  addAppointment: addAppointment,
  addReminder:addReminder,
  appDetails:appDetails,
  bookAnAppointment:bookAnAppointment,
  bookPractitioner:bookPractitioner,
  
  changeToPreviousWeek:changeToPreviousWeek,
  changeToNextWeek:changeToNextWeek,
  changeToDailyView:changeToDailyView,
  changeToWeekView:changeToWeekView,
  changeToPreviousMonth:changeToPreviousMonth,
  changeToNextMonth:changeToNextMonth,
  clearIsDateChosen:clearIsDateChosen,
 
  createClient:createClient,
  contactFormReceived:contactFormReceived,
  dashboard:dashboard,
  dashboardPractitioner:dashboardPractitioner,
  dateAndTime:dateAndTime,
  dateChosen:dateChosen,
  failMessage:failMessage,
  getAllUsers:getAllUsers,
  getAllAppointments:getAllAppointments,
  getAllAppointmentsForOneDayFromBackEnd:getAllAppointmentsForOneDayFromBackEnd,
  getPreviousDay:getPreviousDay,
  getNextDay:getNextDay,
  highlightTime:highlightTime,
  home:home,
  login:login,
  logout:logout,
  lockDay:lockDay,
  
  lockAppointment:lockAppointment,
  profiles:profiles,
  removeReminder:removeReminder,
  removeAppointment:removeAppointment,
  removeAllAppointments:removeAllAppointments,
  setCurrentClientEmail:setCurrentClientEmail,
  showFreeTimes:showFreeTimes,
  showContactDetails:showContactDetails,
  storeToken:storeToken,
  successMessage:successMessage,
  timeEntered:timeEntered,
  treatment1:treatment1,
  treatment2:treatment2,
  treatmentUpdate:treatmentUpdate,
  turnLockWeekOn:turnLockWeekOn,
  turnLockWeekOff:turnLockWeekOff,
  unlockAppointment:unlockAppointment,
  unlockDay:unlockDay,
  weekView:weekView,
};