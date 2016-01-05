var Dispatcher = require('../dispatcher/Dispatcher');

function addAppointment(item) {
    var action = {
      type: 'add_appointment',
      item: item
    };
    
    Dispatcher.dispatch(action);
}

function removeAppointment(itemId) {
    var action = {
      type: 'remove_appointment',
      itemId: itemId
    };
    
    Dispatcher.dispatch(action);
}

function removeAllAppointments() {
    var action = {
      type: 'remove_all_appointments',
    };
    
    Dispatcher.dispatch(action);
  }

function getPreviousDay(){
    var action = {
      type:'get_PreviousDay',
     
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

function getNextDay(){
    var action = {
      type:'get_NextDay',
      date:day,
      month:month,
      year:year,
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
  }
  
   

function unlockDay(Date){
    var action = {
        type: 'remove_all_appointments',
      };     
      Dispatcher.dispatch(action);
    }

function lockWeek(startDateOfWeek,month,year){
    for (var count=startDateOfWeek;count<startDateOfWeek+8;count++){
      lockday(count)
    }
  }
    

function unlockWeek(startDateOfWeek){
   var action = {
      type: 'remove_all_appointments',
    };
    
    Dispatcher.dispatch(action); 
  }

module.exports = {
  addAppointment: addAppointment,
  removeAppointment: removeAppointment,
  removeAllAppointments: removeAllAppointments,
  getPreviousDay:getPreviousDay,
  getNextDay:getNextDay,
};