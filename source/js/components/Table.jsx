var React = require('react');
var LockButton = require('./LockButtons.jsx');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');

var TableComponent = React.createClass({

  render: function() {
      var dateString = new Date();
      var date1 = dateString.getDate();
      var date2 = date1 + 1;
      var date3 = date1 + 2;
      var date4 = date1 + 3;
      var date5 = date1 + 4;
      var date6 = date1 + 5;
      var date7 = date1 + 6;

      var targetName;
      var LockedButtonText;
      var todayNames = [];
      var todayTreatments = [];
      var todayLock = [];
      var todayManual = [];
      var chosenDay = '1';
      var chosenMonth = 'January';
      var chosenYear = '2016';

      var monthNow = dateString.getMonth();
      var MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var displayMonth = MONTH[monthNow];
     


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
                        <th className="table-cell center" width="140">{date1.toString()} {displayMonth}</th>
                        <th className="table-cell center" width="140">{date2.toString()} {displayMonth}</th>
                        <th className="table-cell center" width="140">{date3.toString()} {displayMonth}</th>
                        <th className="table-cell center" width="140">{date4.toString()} {displayMonth}</th>
                        <th className="table-cell center" width="140">{date5.toString()} {displayMonth}</th>
                        <th className="table-cell center" width="100">{date6.toString()} {displayMonth}</th>
                        <th className="table-cell center" width="100">{date7.toString()} {displayMonth}</th>
                  </tr>
      	</thead>
      	<tbody>
                  <tr>
                        <td>09:00</td>
                        <td id="11" className="table-cell">{todayNames[0]}</td>
                        <td id="12" className="table-cell"></td>
                        <td id="13" className="table-cell"></td>
                        <td id="14" className="table-cell"></td>
                        <td id="15" className="table-cell"></td>
                        <td id="16" className="table-cell"></td>
                        <td id="17" className="table-cell"></td>

                  </tr>
      		<tr>
      			<td>10:00</td>
      			<td id="21" className="table-cell">{todayNames[1]}</td>
      			<td id="22" className="table-cell"></td>
      			<td id="23" className="table-cell"></td>
      			<td id="24" className="table-cell"></td>
      			<td id="25" className="table-cell"></td>
      			<td id="26" className="table-cell"></td>
                        <td id="27" className="table-cell"></td>

      		</tr>
      		<tr>
      			<td>11:00</td>
                        <td className="table-cell">{todayNames[2]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        
                      
      		</tr>
      		<tr>
      			<td>12:00</td>
      			<td className="table-cell">{todayNames[3]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td>13:00</td>
      			<td className="table-cell">{todayNames[4]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td>14:00</td>
      			<td className="table-cell">{todayNames[5]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td>15:00</td>
      			<td className="table-cell">{todayNames[6]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td>16:00</td>
      			<td className="table-cell">{todayNames[7]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td>17:00</td>
      			<td className="table-cell">{todayNames[8]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td>18:00</td>
      			<td className="table-cell">{todayNames[9]}</td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
                        <td className="table-cell"></td>
      		</tr>
      		<tr>
      			<td>19:00</td>
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
                        <td></td>
                        <td className="table-cell"><LockButton data-toggler id="lockMonday" type="button" value={LockedButtonText} className="small-button2"/></td>
                        <td className="table-cell"><LockButton data-toggler id="lockTuesday" type="button" value={LockedButtonText} className="small-button2"/></td>
                        <td className="table-cell"><LockButton data-toggler id="lockWednesday" type="button" value={LockedButtonText} className="small-button2"/></td>
                        <td className="table-cell"><LockButton data-toggler id="lockThursday" type="button" value={LockedButtonText} className="small-button2"/></td>
                        <td className="table-cell"><LockButton data-toggler id="lockFriday" type="button" value={LockedButtonText} className="small-button2"/></td>
                        <td className="table-cell"><LockButton data-toggler id="lockSaturday" type="button" value={LockedButtonText} className="small-button2"/></td>
                        <td className="table-cell"><LockButton data-toggler id="lockSunday" type="button" value={LockedButtonText} className="small-button2"/></td>
                  </tr>
      	</tbody>
      </table>	  
		
     </div>);
  }
});

module.exports = TableComponent;