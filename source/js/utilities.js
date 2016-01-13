var React = require('react');
var ReactDOM = require('react-dom');

var ApplicationStart = require('./components/ApplicationStart.jsx');
var CreateAccount = require('./components/AACreateAccount.jsx');

var Dashboard =require('./components/AADashboard.jsx');
var PractDashboard =require('./components/AADashboardPractitioners.jsx');
var DateTime = require('./components/AADateTime.jsx');
var LoginScreen =require('./components/AAlogin.jsx');

var Profiles = require('./components/AAProfiles.jsx');
var Treatment1 = require('./components/AATreatments_Prac1.jsx');
var Treatment2 = require('./components/AATreatments_Prac2.jsx');
var DailyView =require('./components/AAViewDay.jsx');
var WeekView = require('./components/AAViewWeek.jsx');
var Panel = require('./components/Panel.jsx');
var ConfirmCancel = require('./components/ConfirmCancel.jsx');
var ConfirmLogout = require('./components/ConfirmLogout.jsx');
var AppDetails = require('./components/AppDetails.jsx');
var Policy = require('./components/Policy.jsx');
var ClientStore = require('./stores/ClientStore.js');
var AppointmentStore = require('./stores/AppointmentStore.js');



	function createUser(){
		console.log('Now need to send info to mongoose, create account, and on success, then let user go on to Dashboard');
	}

	function findMatchingClient(email){
		var allClients = ClientStore.getAllClients;
		$.each(allClients, function(index){
			if (allClients[index].email == email){
			   return allClients[index];
			}
		});
	}


    function calculateDatesForTheWeek (fullDates){
      var cellDates = [];           
      var cell = 0;

      while (cell < 42) {
            cellDates[cell] = fullDates[cell].getDate();
            cell = cell +1;
      }
      
      return cellDates;
  	}


	function getFullDates(startDate){
      var fullDates = []; 
      var cell = 0;
      
      console.log('startDate in getFullDates function is...',startDate);
      fullDates[cell] = startDate;
      cell = cell + 1;

      while (cell < 42) {
            fullDates[cell] = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
            startDate = fullDates[cell];
            cell = cell + 1;      
      }
      return fullDates;
  	}

  	

module.exports = {
		calculateDatesForTheWeek:calculateDatesForTheWeek,
		createUser:createUser,
		findMatchingClient:findMatchingClient,
		getFullDates:getFullDates,
		
	 
   
  };

