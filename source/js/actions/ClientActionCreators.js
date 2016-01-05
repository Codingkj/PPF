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
    type: 'remove_all_appointments'
  };
  
  Dispatcher.dispatch(action);
}

function addClient(){
	var action ={
		type:'add-client'
	};
	Dispatcher.dispatch(action);
}

module.exports = {
  addAppointment: addAppointment,
  removeAppointment: removeAppointment,
  removeAllAppointments: removeAllAppointments
};