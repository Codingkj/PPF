var React = require('react');
var LockButton = require('./LockButtons.jsx');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');

var startDate;

var TableComponent = React.createClass({

// getInitialState: function () {
//     return {
//       date:AppointmentStore.getCurrentWholeDate,
//       day: AppointmentStore.getCurrentDay(),
//       month: AppointmentStore.getCurrentMonth(),
//       year:AppointmentStore.getCurrentYear(),
//       lock:AppointmentStore.getLockDayStatus()
//       };
//   },


//   handleChange: function () {
//       console.log("CHANGING");
//     this.setState({
//       date:AppointmentStore.getCurrentWholeDate,
//       day: AppointmentStore.getCurrentDay(),
//       month: AppointmentStore.getCurrentMonth(),
//       year:AppointmentStore.getCurrentYear(),
//       lock:AppointmentStore.getLockDayStatus(),
//     });
//     console.log('CHANGED TO ',day,month,year);
//   },

//   componentDidMount: function () {
//       ClientStore.addChangeListener(this.handleChange);
//       AppointmentStore.addChangeListener(this.handleChange);
//   },

//   componentWillUnmount: function () {
//       ClientStore.removeChangeListener(this.handleChange);
//       AppointmentStore.removeChangeListener(this.handleChange);
//   },

  render: function() {
      // var dateNum = AppointmentStore.getCurrentDateNum();  //
      var monthNow = AppointmentStore.getCurrentMonth();  //{this.props.startDate}
      var wholeDate = AppointmentStore.getCurrentWholeDate();  
      console.log ('wholeDate is...B4', wholeDate);
      console.log('this.props.startDate is..',this.props.startDate);
      var dayOfTheWeek = wholeDate.getDay();
      console.log ('Day of week is..B4',dayOfTheWeek);

      var dayOfMonth = wholeDate.getDate();
      console.log ('day of month is B4',dayOfMonth);

      while (dayOfTheWeek !== 0){
             dayOfTheWeek = dayOfTheWeek -1;
             dayOfMonth = new Date(wholeDate.setDate(wholeDate.getDate()-1)).getDate();
      }
      dayOfMonth = new Date(wholeDate.setDate(wholeDate.getDate()+1)).getDate();
      //dateObj.setDate(dayValue) //
      // myDate.setDate(myDate.getDate() + 21)
      console.log('wholeDate after',wholeDate);
      console.log('dayOfTheWeek after',dayOfTheWeek);
      console.log('dayOfTheMonth after',dayOfMonth);

      var date1num = wholeDate.getDate();
      var date2num = new Date(wholeDate.setDate(wholeDate.getDate() + 1)).getDate();
      console.log('date2num is now.',date2num);
      var date3num = new Date(wholeDate.setDate(wholeDate.getDate() + 1)).getDate();
     
      var date4num = new Date(wholeDate.setDate(wholeDate.getDate() + 1)).getDate();
      
      var date5num = new Date(wholeDate.setDate(wholeDate.getDate() + 1)).getDate();
      
      var date6num = new Date(wholeDate.setDate(wholeDate.getDate() + 1)).getDate();
      
      var date7num = new Date(wholeDate.setDate(wholeDate.getDate() + 1)).getDate();
      console.log('date7num is now.',date7num);
      

      var targetName;
      var LockedButtonText;
      var todayNames = [];
      var todayTreatments = [];
      var todayLock = [];
      var todayManual = [];
    
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
                        <th className="table-cell center" width="140">{date1num} {displayMonth}</th>
                        <th className="table-cell center" width="140">{date2num} {displayMonth}</th>
                        <th className="table-cell center" width="140">{date3num} {displayMonth}</th>
                        <th className="table-cell center" width="140">{date4num} {displayMonth}</th>
                        <th className="table-cell center" width="140">{date5num} {displayMonth}</th>
                        <th className="table-cell center" width="100">{date6num} {displayMonth}</th>
                        <th className="table-cell center" width="100">{date7num} {displayMonth}</th>
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