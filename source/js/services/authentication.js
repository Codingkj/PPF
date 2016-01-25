var jQuery = require('jquery');
var uuid = require('node-uuid');
var HOST_NAME = 'http://localhost:8080';

var API_ENDPOINTS = {
  USERS: '/api/users',
  LOG_IN: '/api/users/authenticate'
};

function getID(){
  var generatedId = uuid.v1();
  console.log('ID generated as:',generatedId);
  return generatedId;
}

function signUp(username, password, firstName, lastName, handleResponse) {

  var userId = getID();

  console.log('USER ID made as',userId);

  var data = {
    id: userId,
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };


console.debug('IN SIGNUP my url:', HOST_NAME+API_ENDPOINTS.USERS, data);

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.USERS,
    dataType: 'json',
    data: data
  });

  
  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function (response) {
     console.log('in request.done');
    handleResponse(null, response);
  });
}

function logIn(username, password, handleResponse) {

  var data = {
    username: username,
    password: password
  };

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.LOG_IN,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function (response) {
    handleResponse(null, response);
    console.log('in request.done, response',response);
  });
}

module.exports = {
  logIn: logIn,
  signUp: signUp
};
