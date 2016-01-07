var React = require('react');
var LockButton = require('./LockButtons.jsx');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');

var startDate;

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
             console.log('fullDayOfMonth',fullDayOfMonth);
      }
      var firstMonday = new Date(fullDayOfMonth.getTime() + 24 * 60 * 60 * 1000);
      return firstMonday;
  },

  getFullDates:function(startDate){
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


  findThisWeeksClients:function(startDate){
      var targetName;
      var LockedButtonText;
      var todayNames = [];
      var todayTreatments = [];
      var todayLock = [];
      var todayManual = [];
  },

  
  dateClicked: function(event){
      Utilities.highlightDate();
      findFreeTimes = Utilities.FreeAppointmentTimes();
      AppointmentActionCreators.showFreeTimes();
  },

  previousMonth: function(){
      var currentDate = AppointmentStore.getCurrentWholeDate();
      var currentMonth = currentDate.getMonth();
      currentMonth = currentMonth - 1;
      var newMonth = currentDate.setMonth(currentDate.getMonth() - 1);
      var newFullDate = new Date()
      return newFullDate;
  },

  nextMonth: function(){
      var currentDate = AppointmentStore.getCurrentWholeDate();

      newFullDate = new Date(currentDate.getMonth()+1)%12+1;
      console.log('having added in next month',newFullDate);
      
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
                        <th onClick={this.previousMonth}>PREV</th>
                        <th className="center calendar-month" colSpan="5">{displayMonth}</th>
                        <th onClick={this.nextMonth}>NEXT</th>
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
                        
                        <td id="00" onClick={this.dateClicked} className="month-cell">{displayDates[0]}</td>
                        <td id="01" onClick={this.dateClicked} className="month-cell">{displayDates[1]}</td>
                        <td id="02" onClick={this.dateClicked} className="month-cell">{displayDates[2]}</td>
                        <td id="03" onClick={this.dateClicked} className="month-cell">{displayDates[3]}</td>
                        <td id="04" onClick={this.dateClicked} className="month-cell">{displayDates[4]}</td>
                        <td id="05" onClick={this.dateClicked} className="month-cell">{displayDates[5]}</td>
                        <td id="06" onClick={this.dateClicked} className="month-cell">{displayDates[6]}</td>

                  </tr>
      		<tr>
      			
      			<td id="07" onClick={this.dateClicked} className="month-cell">{displayDates[7]}</td>
      			<td id="08" onClick={this.dateClicked} className="month-cell">{displayDates[8]}</td>
      			<td id="09" onClick={this.dateClicked} className="month-cell">{displayDates[9]}</td>
      			<td id="10" onClick={this.dateClicked} className="month-cell">{displayDates[10]}</td>
      			<td id="11" onClick={this.dateClicked} className="month-cell">{displayDates[11]}</td>
      			<td id="12" onClick={this.dateClicked} className="month-cell">{displayDates[12]}</td>
                        <td id="13" onClick={this.dateClicked} className="month-cell">{displayDates[13]}</td>

      		</tr>
      		<tr>
      			
                        <td id="14" onClick={this.dateClicked} className="month-cell">{displayDates[14]}</td>
                        <td id="15" onClick={this.dateClicked} className="month-cell">{displayDates[15]}</td>
                        <td id="16" onClick={this.dateClicked} className="month-cell">{displayDates[16]}</td>
                        <td id="17" onClick={this.dateClicked} className="month-cell">{displayDates[17]}</td>
                        <td id="18" onClick={this.dateClicked} className="month-cell">{displayDates[18]}</td>
                        <td id="19" onClick={this.dateClicked} className="month-cell">{displayDates[19]}</td>
                        <td id="20" onClick={this.dateClicked} className="month-cell">{displayDates[20]}</td>
                        
                      
      		</tr>
      		<tr>
      			
      			<td id="21" onClick={this.dateClicked} className="month-cell">{displayDates[21]}</td>
                        <td id="22" onClick={this.dateClicked} className="month-cell">{displayDates[22]}</td>
                        <td id="23" onClick={this.dateClicked} className="month-cell">{displayDates[23]}</td>
                        <td id="24" onClick={this.dateClicked} className="month-cell">{displayDates[24]}</td>
                        <td id="25" onClick={this.dateClicked} className="month-cell">{displayDates[25]}</td>
                        <td id="26" onClick={this.dateClicked} className="month-cell">{displayDates[26]}</td>
                        <td id="27" onClick={this.dateClicked} className="month-cell">{displayDates[27]}</td>
      		</tr>
      		<tr>
      			
      			<td id="28" onClick={this.dateClicked} className="month-cell">{displayDates[28]}</td>
                        <td id="29" onClick={this.dateClicked} className="month-cell">{displayDates[29]}</td>
                        <td id="30" onClick={this.dateClicked} className="month-cell">{displayDates[30]}</td>
                        <td id="31" onClick={this.dateClicked} className="month-cell">{displayDates[31]}</td>
                        <td id="32" onClick={this.dateClicked} className="month-cell">{displayDates[32]}</td>
                        <td id="33" onClick={this.dateClicked} className="month-cell">{displayDates[33]}</td>
                        <td id="34" onClick={this.dateClicked} className="month-cell">{displayDates[34]}</td>
      		</tr>
      		<tr>
      		
      			<td id="35" onClick={this.dateClicked} className="month-cell">{displayDates[35]}</td>
                        <td id="36" onClick={this.dateClicked} className="month-cell">{displayDates[36]}</td>
                        <td id="37" onClick={this.dateClicked} className="month-cell">{displayDates[37]}</td>
                        <td id="38" onClick={this.dateClicked} className="month-cell">{displayDates[38]}</td>
                        <td id="39" onClick={this.dateClicked} className="month-cell">{displayDates[39]}</td>
                        <td id="40" onClick={this.dateClicked} className="month-cell">{displayDates[40]}</td>
                        <td id="41" onClick={this.dateClicked} className="month-cell">{displayDates[41]}</td>
      		</tr>
      		
            
      	</tbody>
      </table>	  
		
     </div>);
  }
});

module.exports = TableMonth;