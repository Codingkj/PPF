var jQuery = require('jquery');

var HOST_NAME = 'http://localhost:8080';

var API_ENDPOINTS = {
  SIGN_UP: '/api/users',
  LOG_IN: '/api/users/authenticate'
};

function signUp(username, password, firstName, lastName, handleResponse) {

  var data = {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.SIGN_UP,
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

  request.done(function (data) {
    handleResponse(null, data);
    console.log('in request.done, data object is',data);
  });
}

module.exports = {
  logIn: logIn,
  signUp: signUp
};
