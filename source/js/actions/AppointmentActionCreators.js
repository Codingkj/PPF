var Dispatcher = require('../dispatcher/Dispatcher');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var Utilities2 = require('../services/apptsaves.js');

function addAppointment(event) {
    var action = {
      type: 'add_appointment',
      time: event.target.textContent,
    };   
    Dispatcher.dispatch(action);
}

function addReminder(){
    var action = {
      type:'add_reminder'
    };
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

function bookPractitioner(){
    var action = {
      type:'treatment1',
      practitionerNumber:'1',
    };
  console.log('ACTION type has just been set as',action.type);
 Dispatcher.dispatch(action);
}

function cancelAppointment() {
    var action = {
      type: 'remove_appointment',
      appointmentId: '8',
    };   
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

function changeToWeekView(){
    var action = {
      type:'changeToWeekView'
    };
 Dispatcher.dispatch(action);
 console.log('ACTION type has just been set as',action.type);
}

function createClient(){
  var action = {
      type:'go_create_account'
    };
 Dispatcher.dispatch(action);
}



function dashboardPractitioner(){
    var action = {
      type:'dashboard_practitioner'
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
    var action = {
      type:'date_chosen',
      date:date,
    };
 Dispatcher.dispatch(action);
}

function failMessage(message){
    var action = {
      type:'fail_message',
      text: message,
    };
 Dispatcher.dispatch(action);
 console.log('action type has just been set as',action.type);
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
       
        
      var ReturnedAppointments = response.appointment;  
      console.log('returned appointments are:',ReturnedAppointments);
      successMessage('GOT Appointments!');
      var action = {
        type:'returned_appointments',
        data: ReturnedAppointments
      };
      console.log('ACTION type dispatched from getAllAppointments',action.type);
      Dispatcher.dispatch(action);
      var action = {
          type:'dashboard'
      };
      Dispatcher.dispatch(action);
      }.bind(this));
        
}

function getAllAppointmentsForOneDayFromBackEnd(dateChosen){
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
        console.log('the response was',response);
        console.log('The GET APPOINTMENT response was',response.appointment);      
          
        var ReturnedAppointments = response.appointment;  
        console.log('returned appointments FOR ONE DAY are:',ReturnedAppointments);
        successMessage('GOT Appointments!');
        var action = {
          type:'returned_appointments_on_one_day',
          data: ReturnedAppointments
        };
        console.log('ACTION type dispatched from getAllAppointments',action.type);
        Dispatcher.dispatch(action);
    });
}



function getPreviousDay(){
    var action = {
      type:'get_PreviousDay',
     
    };
 Dispatcher.dispatch(action);
 console.log('action type has just been set as',action.type);
  }

function getNextDay(){
    var action = {
      type:'get_NextDay',
      date:day,
      month:month,
      year:year,
    };
 Dispatcher.dispatch(action);
 console.log('action type has just been set as',action.type);
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

function lockWeek(){
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

function nextMonth(){
   var action = {
      type:'next_month'
    };
 Dispatcher.dispatch(action);
}

function profiles(){
    var action = {
      type:'profiles'
    };
 Dispatcher.dispatch(action);
}

function previousMonth(){
   var action = {
      type:'previous_month'
    };
 Dispatcher.dispatch(action);
}

function removeAllAppointments() {
    var action = {
      type: 'remove_all_appointments',
    };
    
    Dispatcher.dispatch(action);
  }

function removeReminder(){
    var action = {
      type:'remove_reminder'
    };
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
   
function unlockWeek(startDateOfWeek){
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
  addAppointment: addAppointment,
  addReminder:addReminder,
  appDetails:appDetails,
  bookAnAppointment:bookAnAppointment,
  bookPractitioner:bookPractitioner,
  cancelAppointment: cancelAppointment,
  changeToPreviousWeek:changeToPreviousWeek,
  changeToNextWeek:changeToNextWeek,
  changeToDailyView:changeToDailyView,
  changeToWeekView:changeToWeekView,
  afterCreateAccount:afterCreateAccount,
  createClient:createClient,
  dashboard:dashboard,
  dashboardPractitioner:dashboardPractitioner,
  dateAndTime:dateAndTime,
  dateChosen:dateChosen,
  failMessage:failMessage,
  getAllAppointmentsForOneDayFromBackEnd:getAllAppointmentsForOneDayFromBackEnd,
  getPreviousDay:getPreviousDay,
  getNextDay:getNextDay,
  highlightTime:highlightTime,
  home:home,
  login:login,
  logout:logout,
  lockDay:lockDay,
  lockWeek:lockWeek,
  lockAppointment:lockAppointment,
  nextMonth:nextMonth,
  previousMonth:previousMonth,
  profiles:profiles,
  removeReminder:removeReminder,
  removeAllAppointments:removeAllAppointments,
  setCurrentClientEmail:setCurrentClientEmail,
  showFreeTimes:showFreeTimes,
  storeToken:storeToken,
  successMessage:successMessage,
  timeEntered:timeEntered,
  treatment1:treatment1,
  treatment2:treatment2,
  treatmentUpdate:treatmentUpdate,
  unlockAppointment:unlockAppointment,
  unlockDay:unlockDay,
  unlockWeek:unlockWeek,
  weekView:weekView,
};