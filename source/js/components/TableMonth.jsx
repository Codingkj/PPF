var React = require('react');
var LockButton = require('./LockButtons.jsx');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var ClientStore = require('../stores/ClientStore.js');
var Utilities = require('../Utilities.js');
var startDate;
var fullDates = []; 


var TableMonth = React.createClass({


  findFirstMondayInCurrentMonth: function(todaysFullDate){
      var dayOfMonth = todaysFullDate.getDate();
      var dayOfTheWeek;
      var fullDayOfMonth = todaysFullDate; 
      var sunday = 0;

      while (dayOfMonth !== 1) {
            dayOfMonth = dayOfMonth - 1;
            fullDayOfMonth = new Date(fullDayOfMonth.getTime() - 24 * 60 * 60 * 1000);
      }
      dayOfTheWeek = fullDayOfMonth.getDay();

      while (dayOfTheWeek !== sunday){
             dayOfTheWeek = dayOfTheWeek -1;
             fullDayOfMonth = new Date(fullDayOfMonth.getTime() - 24 * 60 * 60 * 1000);
      
      }
      var firstMonday = new Date(fullDayOfMonth.getTime() + 24 * 60 * 60 * 1000);
      return firstMonday;
  },

  getFullDates:function(startDate){
     
      var cell = 0;
      
      fullDates[cell] = startDate;
      cell = cell + 1;

      while (cell < 42) {
            fullDates[cell] = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
            startDate = fullDates[cell];
            cell = cell + 1;      
      }
      
      return fullDates;
  },

  calculateDatesForTheWeek: function(fullDates){
      var cellDates = [];           
      var cell = 0;

      while (cell < 42) {
            cellDates[cell] = fullDates[cell].getDate();
            cell = cell +1;
      }  
      return cellDates;
  },


 highlightChosenDate: function(){
        console.log('in tableMonth trying to highlight date');
  },

  dateClicked: function(event){
      console.log('DATEClicked IS',event.target.textContent);
      var targetDate = parseFloat(event.target.textContent);
      //now lookup the fullDate from those calculated previously.
      var targetFullDate = fullDates[targetDate + 3];
      console.log('TARGETFullDate is now',targetFullDate);
     
      AppointmentActionCreators.dateChosen(targetFullDate);
     
  },

  previousMonth: function(){
      var currentDate = AppointmentStore.getCurrentWholeDate();

      currentMonth = currentDate.getMonth();
      console.log('currentMonth =',currentMonth);
      if (currentMonth == 0)
          {
          currentMonth = 11;
        } else {
        currentMonth = currentMonth - 1;
        currentYear = currentDate.getFullYear() - 1;
        }
      console.log('currentMonth =',currentMonth);
      
      var newFullDate = new Date();
      console.log('fulldate =',newFullDate);
      newFullDate.setMonth(currentMonth,1);
      
      console.debug('having added in previous month',newFullDate);
      AppointmentActionCreators.changeToPreviousMonth(newFullDate);
  },

  nextMonth: function(){
       var currentDate = AppointmentStore.getCurrentWholeDate();

      currentMonth = currentDate.getMonth();
      console.log('currentMonth =',currentMonth);
      if (currentMonth == '11')
          {
          currentMonth = 0;
          currentYear = currentDate.getFullYear() + 1;
        } else {
       currentMonth = currentMonth + 1;
        }
      console.log('currentMonth =',currentMonth);
      
      var newFullDate = new Date();
      console.log('fulldate =',newFullDate);
      newFullDate.setMonth(currentMonth,1);
     
      console.debug('having added in next month',newFullDate);
      AppointmentActionCreators.changeToNextMonth(newFullDate);
  },


  render: function() {
       
      var LockedButtonText;
      var todayNames = [];

      var wholeDate = AppointmentStore.getCurrentWholeDate();
      var startDate = this.findFirstMondayInCurrentMonth(wholeDate);
 
      var fullDates = this.getFullDates(startDate);
      var displayDates = this.calculateDatesForTheWeek(fullDates);  
      
      var displayMonth = AppointmentStore.getCurrentMonthName();


     return (<div className="table-week">

      <table>
      	<thead>
            <tr>
                <th><button onClick={this.previousMonth}>PREV</button></th>
                <th className="center calendar-month" colSpan="5">{displayMonth}</th>
                <th><button onClick={this.nextMonth}>NEXT</button></th>
            </tr>
      		  <tr >
      			
          			<th className="weekly-header center" width="60">Mo</th>
          			<th className="weekly-header center" width="60">Tu</th>
          			<th className="weekly-header center" width="60">We</th>
          			<th className="weekly-header center" width="60">Th</th>
          			<th className="weekly-header center" width="60">Fr</th>
          			<th className="weekly-header center" width="60">Sa</th>
                <th className="weekly-header center" width="60">Su </th>
      		</tr>
                  
        	</thead>
        	<tbody>
          <tr>
                
                <td id="0" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[0]}</button></td>
                <td id="1" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[1]}</button></td>
                <td id="2" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[2]}</button></td>
                <td id="3" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[3]}</button></td>
                <td id="4" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[4]}</button></td>
                <td id="5" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[5]}</button></td>
                <td id="6" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[6]}</button></td>

          </tr>
        	<tr>
      			
        			<td id="7" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[7]}</button></td>
        			<td id="8" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[8]}</button></td>
        			<td id="9" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[9]}</button></td>
        			<td id="10" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[10]}</button></td>
        			<td id="11" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[11]}</button></td>
        			<td id="12" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[12]}</button></td>
              <td id="13" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[13]}</button></td>

      		</tr>
      		<tr>
      			
                  <td id="14" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[14]}</button></td>
                  <td id="15" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[15]}</button></td>
                  <td id="16" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[16]}</button></td>
                  <td id="17" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[17]}</button></td>
                  <td id="18" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[18]}</button></td>
                  <td id="19" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[19]}</button></td>
                  <td id="20" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[20]}</button></td>
                      
                      
      		</tr>
      		<tr>
			
			            <td id="21" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[21]}</button></td>
                  <td id="22" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[22]}</button></td>
                  <td id="23" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[23]}</button></td>
                  <td id="24" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[24]}</button></td>
                  <td id="25" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[25]}</button></td>
                  <td id="26" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[26]}</button></td>
                  <td id="27" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[27]}</button></td>
		      </tr>
      		<tr>
      			
      			      <td id="28" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[28]}</button></td>
                  <td id="29" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[29]}</button></td>
                  <td id="30" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[30]}</button></td>
                  <td id="31" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[31]}</button></td>
                  <td id="32" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[32]}</button></td>
                  <td id="33" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[33]}</button></td>
                  <td id="34" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[34]}</button></td>
        	</tr>
      		<tr>
      		
      			    <td id="35" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[35]}</button></td>
                <td id="36" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[36]}</button></td>
                <td id="37" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[37]}</button></td>
                <td id="38" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[38]}</button></td>
                <td id="39" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[39]}</button></td>
                <td id="40" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[40]}</button></td>
                <td id="41" className="month-cell"><button className="calendar-button" onClick={this.dateClicked} type="button" >{displayDates[41]}</button></td>
    		  </tr>
      		
            
      	</tbody>
      </table>	  
		
     </div>);
  }
});

module.exports = TableMonth;