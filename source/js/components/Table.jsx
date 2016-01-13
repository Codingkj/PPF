var React = require('react');
var LockButton = require('./LockButtons.jsx');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');

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

  getFullDates:function(startDate){
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

  findThisWeeksClients:function(startDate){
      var targetName;
      var LockedButtonText;
      var todayNames = [];
      var todayTreatments = [];
      var todayLock = [];
      var todayManual = [];
  },

  getLockButtonStatus:function(startDate){

  },

  render: function() {
       
      var LockedButtonText = 'LOCK';
      var todayNames = [];

      var wholeDate = AppointmentStore.getCurrentWholeDate();
      var startDate = this.findPreviousMonday(wholeDate);
 
      var fullDates = this.getFullDates(startDate);
      var displayDates = this.calculateDatesForTheWeek(fullDates);  
      var displayMonth = this.assignMonthLabels(fullDates);
      
      var displayClients = this.findThisWeeksClients(wholeDate);
      var LockButtonStatus = this.getLockButtonStatus(wholeDate);

     return (<div className="table-week">
      <table>
      	<thead>
      		<tr >
      			<th className="weekly-header center" width="60"></th>
      			<th className="weekly-header center" width="140">Monday </th>
      			<th className="weekly-header center" width="140">Tuesday </th>
      			<th className="weekly-header center" width="140">Wednesday </th>
      			<th className="weekly-header center" width="140">Thursday </th>
      			<th className="weekly-header center" width="140">Friday </th>
      			<th className="weekly-header center" width="100">Saturday</th>
                        <th className="weekly-header center" width="100">Sunday </th>
      		</tr>
                  <tr className="second-weekly-header">
                        <th className="table-cell center" width="60">Time</th>
                        <th className="table-cell center" width="140">{displayDates[0]} {displayMonth[0]}</th>
                        <th className="table-cell center" width="140">{displayDates[1]} {displayMonth[1]}</th>
                        <th className="table-cell center" width="140">{displayDates[2]} {displayMonth[2]}</th>
                        <th className="table-cell center" width="140">{displayDates[3]} {displayMonth[3]}</th>
                        <th className="table-cell center" width="140">{displayDates[4]} {displayMonth[4]}</th>
                        <th className="table-cell center" width="100">{displayDates[5]} {displayMonth[5]}</th>
                        <th className="table-cell center" width="100">{displayDates[6]} {displayMonth[6]}</th>
                  </tr>
      	</thead>
      	<tbody>
                  <tr>
                        <td className="time-column-style">09:00</td>
                        <td id="11" className="table-cell">{todayNames[0]}</td>
                        <td id="12" className="table-cell"></td>
                        <td id="13" className="table-cell"></td>
                        <td id="14" className="table-cell"></td>
                        <td id="15" className="table-cell"></td>
                        <td id="16" className="table-cell"></td>
                        <td id="17" className="table-cell"></td>

                  </tr>
      		<tr>
      			<td className="time-column-style">10:00</td>
      			<td id="21" className="table-cell">{todayNames[1]}</td>
      			<td id="22" className="table-cell"></td>
      			<td id="23" className="table-cell"></td>
      			<td id="24" className="table-cell"></td>
      			<td id="25" className="table-cell"></td>
      			<td id="26" className="table-cell"></td>
                        <td id="27" className="table-cell"></td>

      		</tr>
      		<tr>
      			<td className="time-column-style">11:00</td>
                        <td className="table-cell">{todayNames[2]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        
                      
      		</tr>
      		<tr>
      			<td className="time-column-style">12:00</td>
      			<td className="table-cell">{todayNames[3]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td className="time-column-style">13:00</td>
      			<td className="table-cell">{todayNames[4]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td className="time-column-style">14:00</td>
      			<td className="table-cell">{todayNames[5]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td className="time-column-style">15:00</td>
      			<td className="table-cell">{todayNames[6]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td className="time-column-style">16:00</td>
      			<td className="table-cell">{todayNames[7]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td className="time-column-style">17:00</td>
      			<td className="table-cell">{todayNames[8]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td className="time-column-style">18:00</td>
      			<td className="table-cell">{todayNames[9]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td className="time-column-style" >19:00</td>
      			<td className="table-cell">{todayNames[10]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
                  <tr className="hidden">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                  </tr>
                  <tr>
                        <td className="time-column-style"></td>
                        <td className="table-cell"><button id="lockMonday" type="button" className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockTuesday" type="button" className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockWednesday" type="button" className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockThursday" type="button" className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockFriday" type="button" className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockSaturday" type="button" className="small-button">{LockedButtonText}</button></td>
                        <td className="table-cell"><button id="lockSunday" type="button"  className="small-button">{LockedButtonText}</button></td>
                  </tr>
      	</tbody>
      </table>	  
		
     </div>);
  }
});

module.exports = TableComponent;