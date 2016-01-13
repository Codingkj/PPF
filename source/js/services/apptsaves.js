var jQuery = require('jquery');

var HOST_NAME = 'http://localhost:8080';

var API_ENDPOINTS = {
  APPOINTMENTS: '/api/appointments',
  PRACTICE: '/api/practice',

};

function saveAppointment(token, date,day, month,year,time,lock,clientEmail,practitioner,treatment,reminderFlag,manualFlag,handleResponse) {

  var data = {
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

function getAppointmentsForClient(token, clientEmail, handleResponse) {

  var data = {
    token: token,
    Email: clientEmail,
    
  };
//get and then remove
  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.LOG_IN,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
    console.log('in request for appointments are done');
  });
}

module.exports = {
  saveAppointment: saveAppointment,
  getAppointmentsForClient: getAppointmentsForClient,
};
