var React = require('react');
var ReactDOM = require('react-dom');

var ApplicationStart = require('./components/ApplicationStart.jsx');
var CreateAccount = require('./components/AACreateAccount.jsx');

var Dashboard =require('./components/AADashboard.jsx');
var PractDashboard =require('./components/AADashboardPractitioners.jsx');
var DateTime = require('./components/AADateTime.jsx');
var LoginScreen =require('./components/AAlogin.jsx');

var Profiles = require('./components/AAProfiles.jsx');
var Treatments = require('./components/AATreatments.jsx');
var DailyView =require('./components/AAViewDay.jsx');
var WeekView = require('./components/AAViewWeek.jsx');
var Panel = require('./components/Panel.jsx');
var ConfirmCancel = require('./components/ConfirmCancel.jsx');
var ConfirmLogout = require('./components/ConfirmLogout.jsx');
var AppDetails = require('./components/AppDetails.jsx');
var Policy = require('./components/Policy.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');



function findMatchingClient(email){
	var allClients = ClientStore.getAllClients;
	$.each(allClients, function(index){
		if allClients[index].email == email){
		   return allClients[index];
	}
}



function highlightDate(date){
      var checkdates = $('.active');
      $.each(checkdates,function(index) {
            if (checkdates[index].innerHTML == date.toString()){
              var selectedDate = checkdates[index];
             $(selectedDate).addClass('shaded').removeClass('unshaded');
          }
      });
    } 
