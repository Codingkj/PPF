var React = require('react');
var LockButton = require('./LockButtons.jsx');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var startDate;


var TableComponent = React.createClass({


  findPreviousMonday: function(todaysFullDate){
      var dayOfTheWeek = todaysFullDate.getDay();
      var fullDayOfMonth = todaysFullDate; 
      var sunday = 0;
      
      while (dayOfTheWeek !== sunday){
             dayOfTheWeek = dayOfTheWeek -1;
             fullDayOfMonth = new Date(fullDayOfMonth.getTime() - 24 * 60 * 60 * 1000);
             console.log('fullDayOfMonth',fullDayOfMonth);
      }
      var Monday = new Date(fullDayOfMonth.getTime() + 24 * 60 * 60 * 1000);
      return Monday;
  },

  getFullDates:function(){
      var wholeDate = AppointmentStore.getCurrentWholeDate();
      var startDate = this.findPreviousMonday(wholeDate);

      var fullDates = []; 
      fullDates[0] = startDate;
      fullDates[1] = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
      console.log('fullDates[1] is now...',fullDates[1]);
      fullDates[2] = new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000);
      fullDates[3] = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);   
      fullDates[4] = new Date(startDate.getTime() + 4 * 24 * 60 * 60 * 1000);  
      fullDates[5] = new Date(startDate.getTime() + 5 * 24 * 60 * 60 * 1000);
      fullDates[6] = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);
      console.log('fullDates[6] is now...',fullDates[6]);
      return fullDates;
  },

  calculateDatesForTheWeek: function(fullDates){
      var dateNum = [];           

      dateNum[0] = fullDates[0].getDate();
      dateNum[1] = fullDates[1].getDate();
      console.log('dateNum[1] is now...',dateNum[1]);
      dateNum[2] = fullDates[2].getDate();
      dateNum[3] = fullDates[3].getDate();   
      dateNum[4] = fullDates[4].getDate();  
      dateNum[5] = fullDates[5].getDate();   
      dateNum[6] = fullDates[6].getDate();
      console.log('dateNum[6] is now...',dateNum[6]);
      return dateNum;
  },
  assignMonthLabels: function (dateNum){
       var MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
       var displayMonthNames = [];
       var iterator=0;
       while (iterator<7)  {
             monthNow = dateNum[iterator].getMonth();
             displayMonthNames[iterator] = MONTH[monthNow];
             iterator = iterator + 1;
      }
      return displayMonthNames;
  },


  findThisWeeksClients: function(startDate){
      var MONTH = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
      var LockedButtonText;
      var todayEmails = [];
      var todayTreatments = [];
      var todayLock = [];
      var todayManual = [];
      var startDay = startDate.getDate();
      var startMonthNumber = startDate.getMonth();
      var startMonthName = MONTH[startMonthNumber];
      var startYear = startDate.getFullYear();
     var allClients = ClientStore.getAllUsers();  
      var fullNames = [];
     var allAppointments = AppointmentStore.getCurrentUserAppointments();
      
      allAppointments.map(function (appointment) {
       
        console.log('appointment day, month, year are:',appointment.day,appointment.month,appointment.year,appointment.clientEmail);
        if (appointment.year == startYear) {
          if (appointment.month == startMonthName){
            if (appointment.day == startDay){
              if (appointment.time == '9'){
    
                todayEmails[0] = appointment.clientEmail;
                console.debug('MATCH!!!!!');
                
 
              }
              else if (appointment.time == '10'){
                todayEmails[1] = appointment.email;
                console.debug('MATCH!!!!!');
    
 
              }
              else if (appointment.time == '11'){
                todayEmails[2] = appointment.clientEmail;
              }
              else if (appointment.time == '12'){
                todayEmails[3] = appointment.clientEmail;
              }
              else if (appointment.time == '13'){
                todayEmails[4] = appointment.clientEmail;
              }
              else if (appointment.time == '14'){
                todayEmails[5] = appointment.clientEmail;
              }
              else if (appointment.time == '15'){
                todayEmails[6] = appointment.clientEmail;
              }
              else if (appointment.time == '16'){
                todayEmails[7] = appointment.clientEmail;
                console.debug('MATCH of user to time!!!!!');
                
              }
              else if (appointment.time == '17'){
                console.debug('MATCH of user to time!!!!!');

 
                todayEmails[8] = appointment.clientEmail;
              }
              else if (appointment.time == '18'){
                todayEmails[9] = appointment.clientEmail;
              }
              else if (appointment.time == '19'){
                todayEmails[10] = appointment.clientEmail;
              }
            }
          }
        }
      });
      
      console.debug('Todays emails are::::  ',todayEmails);
      console.log('and allClients are',allClients);

      var count = 0;
      while (count < 11){
                  console.log('inside WHILE loop & count is',count);
                  
                  
                  for (var iterator=0; iterator < allClients.length-1 ;iterator++) {
                    console.log('Iterator=',iterator);
                    console.debug('checking thru next FOR loop',todayEmails[count], allClients[iterator].username);
                    if (todayEmails[count] != 'undefined') {
                        if (todayEmails[count] === allClients[iterator].username) {
                            console.debug('WE HAVE A MATCH');
                            var firstName = allClients[iterator].firstName;
                            var lastName = allClients[iterator].lastName;
                            fullNames[count] = firstName +' '+ lastName;
                            console.debug(fullNames[count]);
                        }
                      }
                
                  }
             count=count+1;
            };

      return fullNames; 
  },

  changeLock:function(startDate){

  },

  getLockButtonStatus:function(){

  },


  render: function() {
       
      var LockedButtonText = 'LOCK';    
 
      var fullDates = this.getFullDates();
      var displayDates = this.calculateDatesForTheWeek(fullDates);  
      var displayMonth = this.assignMonthLabels(fullDates);
         

      var todayNames = this.findThisWeeksClients(fullDates[0]);
      var tuesdayNames = this.findThisWeeksClients(fullDates[1]);
       var wednesdayNames = this.findThisWeeksClients(fullDates[2]);
        var thursdayNames = this.findThisWeeksClients(fullDates[3]);
         var fridayNames = this.findThisWeeksClients(fullDates[4]);
          var saturdayNames = this.findThisWeeksClients(fullDates[5]);
           var sundayNames = this.findThisWeeksClients(fullDates[6]);

  

     return (<div className="table-week">
      <table>
      	<thead>
      		<tr >
      			<th className="tableweek-header center" width="60"></th>
      			<th className="tableweek-header center" width="140">Monday </th>
      			<th className="tableweek-header center" width="140">Tuesday </th>
      			<th className="tableweek-header center" width="140">Wednesday </th>
      			<th className="tableweek-header center" width="140">Thursday </th>
      			<th className="tableweek-header center" width="140">Friday </th>
      			<th className="tableweek-header center" width="120">Saturday</th>
            <th className="tableweek-header center" width="120">Sunday </th>
      		</tr>
            <tr className="second-weekly-header">
            <th className="tableweek-header center" width="60">Time</th>
            <th className="tableweek-header center" width="140">{displayDates[0]} {displayMonth[0]}</th>
            <th className="tableweek-header center" width="140">{displayDates[1]} {displayMonth[1]}</th>
            <th className="tableweek-header center" width="140">{displayDates[2]} {displayMonth[2]}</th>
            <th className="tableweek-header center" width="140">{displayDates[3]} {displayMonth[3]}</th>
            <th className="tableweek-header center" width="140">{displayDates[4]} {displayMonth[4]}</th>
            <th className="tableweek-header center" width="100">{displayDates[5]} {displayMonth[5]}</th>
            <th className="tableweek-header center" width="100">{displayDates[6]} {displayMonth[6]}</th>
      </tr>
      	</thead>
      	<tbody>
          <tr>
            <td className="time-column-style">09:00</td>
            <td id="11"  className="table-cell"><button zf-open="app-details-panel" >{todayNames[0]}</button></td>
            <td id="12"  className="table-cell"><button zf-open="app-details-panel" >{tuesdayNames[0]}</button></td>
            <td id="13"  className="table-cell"><button zf-open="app-details-panel" >{wednesdayNames[0]}</button></td>
            <td id="14"  className="table-cell"><button zf-open="app-details-panel">{thursdayNames[0]}</button></td>
            <td id="15"  className="table-cell"><button zf-open="app-details-panel">{fridayNames[0]}</button></td>
            <td id="16"  className="table-cell"><button zf-open="app-details-panel">{saturdayNames[0]}</button></td>
            <td id="17"  className="table-cell"><button zf-open="app-details-panel">{sundayNames[0]}</button></td>

          </tr>
      		<tr>
      			<td className="time-column-style">10:00</td>
      			<td zf-open="app-details-panel" id="21" className="table-cell">{todayNames[1]}</td>
      			<td zf-open="app-details-panel" id="22" className="table-cell">{tuesdayNames[1]}</td>
      			<td zf-open="app-details-panel" id="23" className="table-cell">{wednesdayNames[1]}</td>
      			<td zf-open="app-details-panel" id="24" className="table-cell">{thursdayNames[1]}</td>
      			<td zf-open="app-details-panel" id="25" className="table-cell">{fridayNames[1]}</td>
      			<td zf-open="app-details-panel" id="26" className="table-cell">{saturdayNames[1]}</td>
            <td zf-open="app-details-panel" id="27" className="table-cell">{sundayNames[1]}</td>

      		</tr>
      		<tr>
      			<td id="31" className="time-column-style">11:00</td>
            <td zf-open="app-details-panel" className="table-cell">{todayNames[2]}</td>
            <td zf-open="app-details-panel" className="table-cell">{tuesdayNames[2]}</td>
            <td zf-open="app-details-panel" className="table-cell">{wednesdayNames[2]}</td>
            <td zf-open="app-details-panel" className="table-cell">{thursdayNames[2]}</td>
            <td zf-open="app-details-panel" className="table-cell">{fridayNames[2]}</td>
            <td zf-open="app-details-panel" className="table-cell">{saturdayNames[2]}</td>
            <td zf-open="app-details-panel" className="table-cell">{sundayNames[2]}</td>           
      		</tr>
      		<tr>
      			<td id="41" className="time-column-style">12:00</td>
      			<td zf-open="app-details-panel" className="table-cell">{todayNames[3]}</td>
            <td zf-open="app-details-panel" className="table-cell">{tuesdayNames[3]}</td>
            <td zf-open="app-details-panel" className="table-cell">{wednesdayNames[3]}</td>
            <td zf-open="app-details-panel" className="table-cell">{thursdayNames[3]}</td>
            <td zf-open="app-details-panel" className="table-cell">{fridayNames[3]}</td>
            <td zf-open="app-details-panel" className="table-cell">{fridayNames[3]}</td>
            <td zf-open="app-details-panel" className="table-cell">{saturdayNames[3]}</td>
            <td zf-open="app-details-panel" className="table-cell">{sundayNames[3]}</td>
      		</tr>
      		<tr>
      			<td id="51" className="time-column-style">13:00</td>
      			<td zf-open="app-details-panel" className="table-cell">{todayNames[4]}</td>
            <td zf-open="app-details-panel" className="table-cell">{tuesdayNames[4]}</td>
            <td zf-open="app-details-panel" className="table-cell">{wednesdayNames[4]}</td>
            <td zf-open="app-details-panel" className="table-cell">{thursdayNames[4]}</td>
            <td zf-open="app-details-panel" className="table-cell">{fridayNames[4]}</td>
            <td zf-open="app-details-panel" className="table-cell">{saturdayNames[4]}</td>
            <td zf-open="app-details-panel" className="table-cell">{sundayNames[4]}</td>
      		</tr>
      		<tr>
      			<td id="61" className="time-column-style">14:00</td>
      			<td zf-open="app-details-panel" className="table-cell">{todayNames[5]}</td>
            <td zf-open="app-details-panel" className="table-cell">{tuesdayNames[5]}</td>
            <td zf-open="app-details-panel" className="table-cell">{wednesdayNames[5]}</td>
            <td zf-open="app-details-panel" className="table-cell">{thursdayNames[5]}</td>
            <td zf-open="app-details-panel" className="table-cell">{fridayNames[5]}</td>
            <td zf-open="app-details-panel" className="table-cell">{saturdayNames[5]}</td>
            <td zf-open="app-details-panel" className="table-cell">{sundayNames[5]}</td>
      		</tr>
      		<tr>
      			<td id="71" className="time-column-style">15:00</td>
      			<td zf-open="app-details-panel" className="table-cell">{todayNames[6]}</td>
            <td zf-open="app-details-panel" className="table-cell">{tuesdayNames[6]}</td>
            <td zf-open="app-details-panel" className="table-cell">{wednesdayNames[6]}</td>
            <td zf-open="app-details-panel" className="table-cell">{thursdayNames[6]}</td>
            <td zf-open="app-details-panel" className="table-cell">{fridayNames[6]}</td>
            <td zf-open="app-details-panel" className="table-cell">{saturdayNames[6]}</td>
            <td zf-open="app-details-panel" className="table-cell">{sundayNames[6]}</td>
      		</tr>
      		<tr>
      			<td id="81" className="time-column-style">16:00</td>
      			<td zf-open="app-details-panel" className="table-cell">{todayNames[7]}</td>
            <td zf-open="app-details-panel" className="table-cell">{tuesdayNames[7]}</td>
            <td zf-open="app-details-panel" className="table-cell">{wednesdayNames[7]}</td>
            <td zf-open="app-details-panel" className="table-cell">{thursdayNames[7]}</td>
            <td zf-open="app-details-panel" className="table-cell">{fridayNames[7]}</td>
            <td zf-open="app-details-panel" className="table-cell">{saturdayNames[7]}</td>
            <td zf-open="app-details-panel" className="table-cell">{sundayNames[7]}</td>
      		</tr>
      		<tr>
      			<td id="91" className="time-column-style">17:00</td>
      			<td zf-open="app-details-panel" className="table-cell">{todayNames[8]}</td>
            <td zf-open="app-details-panel" className="table-cell">{tuesdayNames[8]}</td>
            <td zf-open="app-details-panel" className="table-cell">{wednesdayNames[8]}</td>
            <td zf-open="app-details-panel" className="table-cell">{thursdayNames[8]}</td>
            <td zf-open="app-details-panel" className="table-cell">{fridayNames[8]}</td>
            <td zf-open="app-details-panel" className="table-cell">{saturdayNames[8]}</td>
            <td zf-open="app-details-panel" className="table-cell">{sundayNames[8]}</td>
      		</tr>
      		<tr>
      			<td id="101" className="time-column-style">18:00</td>
      			<td zf-open="app-details-panel" className="table-cell">{todayNames[9]}</td>
            <td zf-open="app-details-panel" className="table-cell">{tuesdayNames[9]}</td>
            <td zf-open="app-details-panel" className="table-cell">{wednesdayNames[9]}</td>
            <td zf-open="app-details-panel" className="table-cell">{thursdayNames[9]}</td>
            <td zf-open="app-details-panel" className="table-cell">{fridayNames[9]}</td>
            <td zf-open="app-details-panel" className="table-cell">{saturdayNames[9]}</td>
            <td zf-open="app-details-panel" className="table-cell">{sundayNames[9]}</td>
      		</tr>
      		<tr>
      			<td id="111" className="time-column-style" >19:00</td>
      			<td zf-open="app-details-panel" className="table-cell">{todayNames[10]}</td>
            <td zf-open="app-details-panel" className="table-cell">{tuesdayNames[10]}</td>
            <td zf-open="app-details-panel" className="table-cell">{wednesdayNames[10]}</td>
            <td zf-open="app-details-panel" className="table-cell">{thursdayNames[10]}</td>
            <td zf-open="app-details-panel" className="table-cell">{fridayNames[10]}</td>
            <td zf-open="app-details-panel" className="table-cell">{saturdayNames[10]}</td>
            <td zf-open="app-details-panel" className="table-cell">{sundayNames[10]}</td>
      		</tr>
                  <tr className="hidden">
                        <td className="spacer-cell"></td>
                        <td className="spacer-cell"></td>
                        <td className="spacer-cell"></td>
                        <td className="spacer-cell"></td>
                        <td className="spacer-cell"></td>
                        <td className="spacer-cell"></td>
                        <td className="spacer-cell"></td>
                        <td className="spacer-cell"></td>
                  </tr>
                  <tr>
                        <td className="time-column-style"></td>
                        <td className="table-cell" data-toggle="lockMonday"><button id="lockMonday"  data-toggler="greenish" type="button" onClick={this.changeLock} className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockTuesday" data-toggle="lockTuesday"  data-toggler="greenish" type="button" onClick={this.changeLock} className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockWednesday" data-toggler="green" type="button" onClick={this.changeLock} className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockThursday" data-toggler="green" type="button" onClick={this.changeLock} className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockFriday" data-toggler="green" type="button" onClick={this.changeLock} className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockSaturday" data-toggler="green" type="button" onClick={this.changeLock} className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockSunday" data-toggler="green" type="button"  onClick={this.changeLock} className="small-button">{LockedButtonText}</button></td>
                  </tr>
      	</tbody>
      </table>	  
		
     </div>);
  }
});

module.exports = TableComponent;