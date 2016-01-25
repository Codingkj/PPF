var React = require('react');
var LockButton = require('./LockButtons.jsx');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');


var TableDay = React.createClass({
 
 getNames: function (emails){
    var todayFirstName = [];
    var todayLastName = [];
    var todayNames = [];
    console.debug('inside getNames and emails has come in as',emails);

    for (var count=0; count < emails.length-1;count++){
        console.debug('looking for names of',emails[count]);
        todayNames[count] = this.getClientName(emails[count]);
    }
    return todayNames;
  },

  getClientNames: function(){

  var startDate = AppointmentStore.getCurrentWholeDate();
  var allAppointments = AppointmentStore.getCurrentUserAppointments();
  var allClients = ClientStore.getAllUsers();
  var fullNames = [];
  var todayEmails = this.findTodaysClients(startDate, allAppointments);
  console.log('todaysEmails in getClientNames',todayEmails);  

      for (var count=0; count < 11 ; count++){
          if (todayEmails[count] !== undefined) {
              console.debug('Doing it');
              for (var iterator=0; iterator < allClients.length ;iterator++) {
                console.debug('checking',todayEmails[count], allClients[iterator].username);
            
                if (todayEmails[count] === allClients[iterator].username) {
                    console.debug('WE HAVE A MATCH');
                    var firstName = allClients[iterator].firstName;
                    var lastName = allClients[iterator].lastName;
                    fullNames[count] = firstName +' '+ lastName;
                    console.debug(fullNames[count]);
                    console.log(fullNames);
                }
            }
          }
      };
      console.log('fullnames',fullNames);
      return fullNames;
   },



   findTodaysClients: function(startDate,allAppointments){
      var MONTH = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
      var LockedButtonText;
      var todayEmails = [];
     
      var todayTreatment = [];
      var todayLock = [];
      var todayManual = [];
      var startDay = startDate.getDate();
      var startMonthNumber = startDate.getMonth();
      var startMonthName = MONTH[startMonthNumber];
      var startYear = startDate.getFullYear();
     
      
      allAppointments.map(function (appointment) {
       console.log('start day, month, year, are:',startDay,startMonthName,startYear);
        console.log('appointment day, month, year are:',appointment.day,appointment.month,appointment.year,appointment.clientEmail);
        if (appointment.year == startYear) {
          if (appointment.month == startMonthName){
            if (appointment.day == startDay){
              if (appointment.time == '9'){
                console.log('found a match on',appointment.clientEmail);
                todayEmails[0] = appointment.clientEmail;             
                todayTreatment[0] = appointment.treatment;
                console.log('appointment day, month, year are:',appointment.day,appointment.month,appointment.year,appointment.clientEmail);
 
              }
              else if (appointment.time == '10'){
                todayEmails[1] = appointment.clientEmail;
                console.debug('MATCH!!!!!');
                console.log('appointment day, month, year are:',appointment.day,appointment.month,appointment.year,appointment.clientEmail);
 
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
                console.debug('MATCH!!!!!');
                console.log('appointment day, month, year are:',appointment.day,appointment.month,appointment.year,appointment.clientEmail);
              }
              else if (appointment.time == '17'){
                console.debug('MATCH!!!!!');
                console.log('appointment day, month, year are:',appointment.day,appointment.month,appointment.year,appointment.clientEmail);
 
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
  return todayEmails;
  },

  


  render: function() {
  

  var todayNames = this.getClientNames();
  console.log('got my todayNames now as',todayNames);
  
  var todayTreatments = [];
  var todayLock = [];
  var todayManual = [];
  var dayRowShade = 'occupied';
  
  
     return (<div className="table-day">
      <table>
      	<thead>
      		<tr>
      			<th width="60">Time</th>
      			<th width="200"><MyButton type="button" value="Clients Name" className="name-as-button" /></th>
                        <th width="100">Treatment</th>  
                        <th width="100">Locked?</th>
                        <th width="5"></th>

      		</tr>
      	</thead>
      	<tbody>
                  <tr >

                        <td>09:00</td>
                        <td>{todayNames[0]}</td>
                        <td>{todayTreatments[0]}</td>
                        <td><LockButton value={todayLock[0]}/></td>
                        <td></td>
                        <td><MyButton value={todayManual[0]} /></td>

                  </tr>
      		<tr>
                  			<td>10:00</td>
                  			<td>{todayNames[1]}</td>
                        <td>{todayTreatments[1]}</td>
                        <td><LockButton value={todayLock[1]}/></td>
                        <td></td>
                        <td><button>{todayManual[1]}</button></td>

      		</tr>
      		<tr>
      			           <td>11:00</td>
                        <td>{todayNames[2]}</td>
                        <td>{todayTreatments[2]}</td>
                        <td><LockButton value={todayLock[2]}/></td>
                        <td></td>
                        <td><MyButton value={todayManual[2]} /></td>
      		</tr>
      		<tr>
      			<td>12:00</td>
      			           <td>{todayNames[3]}</td>
                        <td>{todayTreatments[3]}</td>
                        <td><LockButton value={todayLock[3]}/></td>
                        <td></td>
                        <td><MyButton value={todayManual[3]} /></td>
              
      		</tr>
      		<tr>
                  			<td>13:00</td>
                  			<td>{todayNames[4]}</td>
                        <td>{todayTreatments[4]}</td>
                        <td><LockButton value={todayLock[4]}/></td>
                        <td></td>
                        <td><MyButton value={todayManual[4]} /></td>
      		</tr>
      		<tr>
                  			<td>14:00</td>
                  			<td>{todayNames[5]}</td>
                        <td>{todayTreatments[5]}</td>
                        <td><LockButton value={todayLock[5]}/></td>
                        <td></td>
                        <td><MyButton value={todayManual[5]} /></td>
      		</tr>
      		<tr>
                  			<td>15:00</td>
                  			<td>{todayNames[6]}</td>
                        <td>{todayTreatments[6]}</td>
                        <td><LockButton value={todayLock[6]}/></td>
                        <td></td>
                        <td><MyButton value={todayManual[6]} /></td>
      		</tr>
      		<tr>
                  			<td>16:00</td>
                  			<td>{todayNames[7]}</td>
                        <td>{todayTreatments[7]}</td>
                        <td><LockButton value={todayLock[7]}/></td>
                        <td></td>
                        <td><MyButton value={todayManual[7]} /></td>
      		</tr>
      		<tr>
                  			<td>17:00</td>
                  			<td>{todayNames[8]}</td>
                        <td>{todayTreatments[8]}</td>
                        <td><LockButton value={todayLock[8]}/></td>
                        <td></td>
                        <td><MyButton value={todayManual[8]} /></td>
      		</tr>
      		<tr>
                  			<td>18:00</td>
                  			<td>{todayNames[9]}</td>
                        <td>{todayTreatments[9]}</td>
                        <td><LockButton value={todayLock[9]}/></td>
                        <td></td>
                        <td><MyButton value={todayManual[9]} /></td>
      		</tr>
      		<tr>
                  			<td>19:00</td>
                  			<td>{todayNames[10]}</td>
                        <td>{todayTreatments[10]}</td>
                        <td><LockButton value={todayLock[10]}/></td>
                        <td></td>
                        <td><MyButton value={todayManual[10]} /></td>
      		
      		</tr>
      	</tbody>
      </table>	  
		
     </div>);
  }
});

module.exports = TableDay;