var Dispatcher = require('../dispatcher/Dispatcher');

function addAppointment(item) {
    var action = {
      type: 'add_appointment',
      time: item.target.innerHTML,
    };
    
    Dispatcher.dispatch(action);
}

function addReminder(){
    var action = {
      type:'add_reminder'
    };
 Dispatcher.dispatch(action);
}

function appDetails(){
    var action = {
      type:'app_details'
    };
 Dispatcher.dispatch(action);
}

function bookAnAppointment(){
    var action = {
      type:'book_AnAppointment'
    };
 console.log('in actioncreator');
 Dispatcher.dispatch(action);
}

function bookPractitioner(){
    var action = {
      type:'treatment1',
      practitionerNumber:'1',
    };
 console.log('in actioncreator for practitioner');
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

function createAccount(){

    var action = {
      type:'create_account'
    };
 
 Dispatcher.dispatch(action);
}

function dashboard(){
    var action = {
      type:'dashboard'
    };
    console.log('inside dashboard actionCreator');
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
    console.log('dispatching action to change to DATETIME');
 Dispatcher.dispatch(action);
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

function createClient(){
  var action = {
      type:'go_create_account'
    };
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
 console.log('created an action called login and dispatching it');
 Dispatcher.dispatch(action);
}

function profiles(){
    var action = {
      type:'profiles'
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
  console.log('inside actioncreator ',action.date);
  Dispatcher.dispatch(action);
}

function storeToken(token){
  console.log('made it to storeToken action creator');
  var action = {
    type: 'store_token',
    token: 'YES',
  }
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

function unlockAppointment(date, time){
    var action = {
        type: 'unlock_appointment',
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
    
function unlockDay(Date){
    var action = {
        type: 'unlock_day',
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
  createAccount:createAccount,
  createClient:createClient,
  dashboard:dashboard,
  dashboardPractitioner:dashboardPractitioner,
  dateAndTime:dateAndTime,
  getPreviousDay:getPreviousDay,
  getNextDay:getNextDay,
  highlightTime:highlightTime,
  home:home,
  login:login,
  logout:logout,
  lockDay:lockDay,
  lockWeek:lockWeek,
  lockAppointment:lockAppointment,
  profiles:profiles,
  removeReminder:removeReminder,
  removeAllAppointments: removeAllAppointments,
  showFreeTimes:showFreeTimes,
  storeToken:storeToken,
  treatment1:treatment1,
  treatment2:treatment2,
  unlockAppointment:unlockAppointment,
  unlockDay:unlockDay,
  unlockWeek:unlockWeek,
  weekView:weekView,
};