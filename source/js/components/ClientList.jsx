var React = require('react');
var LockButton = require('./LockButtons.jsx');
var MyButton = require('./Buttons.jsx');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');

var rows = [];

var ClientList = React.createClass({
 

  render: function() {

  // for each User found in allClients
  // create a row in a table with fname, lname.


      var allClients = ClientStore.getAllClients();
      console.log('allClients is',allClients);

      for (var name in allClients){

            this.state.allClients.forEach(function(name) {
            rows.push(<ClientListRow clientFirstName={allClients.fname} clientSecondName={allClients.lname} />);
            }.bind(this));
      }
     

  }
});

module.exports = ClientList;