var React = require('react');
var LockButton = require('./LockButtons.jsx');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');

var TableDay = React.createClass({
 
  getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus()
      };
  },


  handleChange: function () {
      console.log("CHANGING");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
    });
    console.log('CHANGED TO ',day,month,year);
  },

  componentDidMount: function () {
      ClientStore.addChangeListener(this.handleChange);
      AppointmentStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
      ClientStore.removeChangeListener(this.handleChange);
      AppointmentStore.removeChangeListener(this.handleChange);
  },

  render: function() {
  var todayNames = [];
  var todayTreatments = [];
  var todayLock = [];
  var todayManual = [];
  
  var allAppointments = AppointmentStore.getAllAppointments();
  var allClients = ClientStore.getAllClients();


      // if (allAppointments.dateNumber == allCients.){
      //       if (allAppointments.dateMonth == 'xxx'){
      //             if (allAppointments.dateYear == 'xxx'){

                  if (allAppointments.email == allClients.email){
                        targetName = allClients;
                  

                        if (allAppointments.time == '09:00') {
                              todayNames[0] = targetName.fname+' '+targetName.lname;
                              todayTreatments[0] = allAppointments.treatment;
                              todayLock[0] = allAppointments.lock;
                              todayManual[0] = allAppointments.manual;
                        }
                        else if (allAppointments.time == '10:00'){
                              todayNames[1] = targetName.fname+' '+targetName.lname;
                              todayTreatments[1] = allAppointments.treatment;
                              todayLock[1] = allAppointments.lock;
                              todayManual[1] = allAppointments.manual;
                        }
                        else if (allAppointments.time == '11:00'){
                              todayNames[2] = targetName.fname+' '+targetName.lname;
                              todayTreatments[2] = allAppointments.treatment;
                              todayLock[2] = allAppointments.lock;
                              todayManual[2] = allAppointments.manual;;
                        }
                        else if (allAppointments.time == '12:00'){
                              todayNames[3] = targetName.fname+' '+targetName.lname;
                              todayTreatments[3] = allAppointments.treatment;
                              todayLock[3] = allAppointments.lock;
                              todayManual[3] = allAppointments.manual;
                        }
                        else if (allAppointments.time == '13:00'){
                              todayNames[4] = targetName.fname+' '+targetName.lname;
                              todayTreatments[4] = allAppointments.treatment;
                              todayLock[4] = allAppointments.lock;
                              todayManual[4] = allAppointments.manual;
                        }
                        else if (allAppointments.time == '14:00'){
                              todayNames[5] = targetName.fname+' '+targetName.lname;
                              todayTreatments[5] = allAppointments.treatment;
                              todayLock[5] = allAppointments.lock;
                              todayManual[5] = allAppointments.manual;
                        }
                        else if (allAppointments.time == '15:00'){
                              todayNames[6] = targetName.fname+' '+targetName.lname;
                              todayTreatments[6] = allAppointments.treatment;
                              todayLock[6] = allAppointments.lock;
                              todayManual[6] = allAppointments.manual;
                        }
                        else if (allAppointments.time == '16:00'){
                              todayNames[7] = targetName.fname+' '+targetName.lname;
                              todayTreatments[7] = allAppointments.treatment;
                              todayLock[7] = allAppointments.lock;
                              todayManual[7] = allAppointments.manual;
                        }
                        else if (allAppointments.time == '17:00'){
                              todayNames[8] = targetName.fname+' '+targetName.lname;
                              todayTreatments[8] = allAppointments.treatment;
                              todayLock[8] = allAppointments.lock;
                              todayManual[8] = allAppointments.manual;
                        }
                        else if (allAppointments.time == '18:00'){
                              todayNames[9] = targetName.fname+' '+targetName.lname;
                              todayTreatments[9] = allAppointments.treatment;
                              todayLock[9] = allAppointments.lock;
                              todayManual[9] = allAppointments.manual;
                        }
                        else if (allAppointments.time == '19:00'){
                              todayNames[10] = targetName.fname+' '+targetName.lname;
                              todayTreatments[10] = allAppointments.treatment;
                              todayLock[10] = allAppointments.lock;
                              todayManual[10] = allAppointments.manual;
                        }
                    }
      //          }
      //       }    
      // }
  
     return (<div className="table-day">
      <table>
      	<thead>
      		<tr>
      			<th width="60">Time</th>
      			<th width="200"><MyButton type="button" value="Clients Name" className="name-as-button" /></th>
                        <th width="100">Treatment</th>  
                        <th width="100">Locked?</th>
                        <th width="5"></th>
                        <th width="100">Manual bookings</th>

      		</tr>
      	</thead>
      	<tbody>
                  <tr>
                        <td>09:00</td>
                        <td>{}</td>
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
                        <td><MyButton value={todayManual[1]} /></td>

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