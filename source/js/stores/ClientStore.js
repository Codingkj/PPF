var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');


var DAY_NAMES = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']; 

var practice = {
	number: 1122,
	street: 'Good Avenue',
	city: 'London',
	postcode:'SE1 4U2',
	phone: '555-2434',
	email: 'service@practice.com',
	practitioner1: 'Angelo',
	practitioner2: 'Dr. Micheals'
}

var treatmentType = ['Massage', 'Deep Tissue Massage', 'Reiki','Hot Stone Massage', 'Acupuncture','Consultation (60 mins)','Consultation (40 mins)'];

var client ={
	id:'001',
	fname: 'John',
	lname: 'Simpson',
	email:'jsimpson@tt.com',
	password: 'xxxxxx',
	mobile: '0771 4950123',
	otherPhone: ' ',
	currentClientEmail:'sc@calstate.com',
}

var returnedClients = [];
var contactFormStatus = 'OFF';

function addClient(client) {
  Customers[client.id] = client;
  AppointmentStore.emit('change');
}


function removeClient(AppointmentId) {
  delete Customers[client.id];
  ClientStore.emit('change');
}



var ClientStore = objectAssign({}, EventEmitter.prototype, {
  
  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  },

  getAllUsers:function() {
    return returnedClients;
	},
  getPractice: function(){
	return practice;
	},
  getTreatments:function(){
	return treatmentType;
	},
  getClient: function (email) {
    return client;
	},
  getCurrentClientEmail: function (email) {
    return client.currentClientEmail;
	},
  getContactFormStatus: function(){
    return contactFormStatus;
  },

});

function handleAction(action) {
  if (action.type === 'add_client') {
    addClient(action.item);
  } else if (action.type === 'remove_client') {
    removeAppointment(action.itemId);
  } else if (action.type === 'returned_clients') {
    returnedClients = action.data;
    console.log('IN CLIENT STORE ',action.data);
  } else if (action.type === 'set_clientEmail') {
    client.currentClientEmail = action.email;
    ClientStore.emit('change');
  } else if (action.type === 'contact_form_sent'){
    getContactFormStatus = 'ON';
    ClientStore.emit('change');
  }
}

ClientStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = ClientStore;