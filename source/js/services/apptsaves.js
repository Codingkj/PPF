var jQuery = require('jquery');
var uuid = require('node-uuid');

var HOST_NAME = 'http://localhost:8080';

var API_ENDPOINTS = {
  APPOINTMENTS: '/api/appointments',
  PRACTICE: '/api/practice',
  USERS:'/api/users',
};

function getID(){
  var generatedId = uuid.v1();
  console.log('ID generated as:',generatedId);
  return generatedId;
}

function saveAppointment(token, date, day, month, year, time, lock, clientEmail, practitioner,treatment,reminderFlag,manualFlag,handleResponse) {

  var appId = getID();

  console.log('IN SAVE APPOINTMENT - reminderFlag IS', reminderFlag);
  var data = {
    id: appId,
    token: token,
    date:date,
    day: day,
    month: month,
    year:year,
    time:time,
    lock:lock,
    clientEmail:clientEmail,
    practitioner:practitioner,
    treatment:treatment,
    reminderFlag:reminderFlag,
    manualFlag:manualFlag,
  };

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.APPOINTMENTS,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function () {
     console.log('in request.done');
    handleResponse(null, data);
  });
}

function getUserAppointments(token, clientEmail, handleResponse) {
  console.log('INSIDE getUserAppointments');
  var data = {
    token: token,
    Email: clientEmail,   
  };
//get and then remove
  var request = jQuery.ajax({
    method: 'get',
    url: HOST_NAME + API_ENDPOINTS.APPOINTMENTS,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
     console.log('in request.fail');
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
    console.log('in request.done',data);
  });
}

function getAllAppointments(token, handleResponse) {
  console.log('IN Utilities2 and inSIDE getAllAppointments');
  var data = {
    token: token,  
  };
//get and then remove
  var request = jQuery.ajax({
    method: 'get',
    url: HOST_NAME + API_ENDPOINTS.APPOINTMENTS,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
     console.log('in request.fail');
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
    console.log('in request.done',data);
  });
}

function getAllUserAppointmentsOnOneDay(token, date, handleResponse) {
  console.log('INSIDE getAllUserAppointmentsOnOneDay',token,date);
  var data = {
    token: token,
    date: date,   
  };
//get and then
  var request = jQuery.ajax({
    method: 'get',
    url: HOST_NAME + API_ENDPOINTS.APPOINTMENTS,
    dataType: 'json',
    data: data
  });

console.log('REQUEST CREATED IS', request);

  request.fail(function (jqXHR, textStatus, errorThrown) {
     console.log('in request.fail');
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
    console.log('in request.done and data is',data);
  });
}

function getAllUsers(token, handleResponse) {
  console.log('IN Utilities2 and inSIDE getAllUsers');
  
  var data = {
    token: token,  
  }; 

  var request = jQuery.ajax({
    method: 'get',
    url: HOST_NAME + API_ENDPOINTS.USERS,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
     console.log('in request.fail');
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
    console.log('in get all Users  request.done',data);
  });
}



function removeAppointment(token, apptId, handleResponse) {
  console.log('IN Utilities2 and inSIDE REMOVEAppointments and ID is',apptId);
  var data = {
    token: token, 
    id: apptId
  };
//get and then remove
  var request = jQuery.ajax({
    method: 'delete',
    url: HOST_NAME + API_ENDPOINTS.APPOINTMENTS + '/' + apptId + '?token='+token,
    dataType: 'json'

  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
     console.log('in request.fail');
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
    console.log('in remove Appointment and request.done',data);
  });
}

function removeReminder(token, apptId, handleResponse) {
  console.log('IN Utilities2 and inSIDE REMOVEReminder and ID is',apptId);
  var data = {
    token: token, 
    id: apptId,
    reminderFlag:'false'
  };
//get and then remove
  var request = jQuery.ajax({
    method: 'patch',
    url: HOST_NAME + API_ENDPOINTS.APPOINTMENTS + '/' + apptId + '?token='+token,
    dataType: 'json'

  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
     console.log('in request.fail');
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
    console.log('in remove Appointment and request.done',data);
  });
}

function addReminder(token, apptId, handleResponse) {
  console.log('IN Utilities2 and inSIDE REMOVEReminder and ID is',apptId);
  var data = {
    token: token, 
    id: apptId,
    reminderFlag:'true'
  };
//get and then remove
  var request = jQuery.ajax({
    method: 'patch',
    url: HOST_NAME + API_ENDPOINTS.APPOINTMENTS + '/' + apptId + '?token='+token,
    dataType: 'json'

  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
     console.log('in request.fail');
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
    console.log('in remove Appointment and request.done',data);
  });
}

module.exports = {
  addReminder:addReminder,
  saveAppointment: saveAppointment,
  getAllUsers:getAllUsers,
  getAllAppointments:getAllAppointments,
  getUserAppointments: getUserAppointments,
  getAllUserAppointmentsOnOneDay:getAllUserAppointmentsOnOneDay,
  removeAppointment:removeAppointment,
  removeReminder:removeReminder
};
