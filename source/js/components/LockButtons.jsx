var React = require('react');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');


var LockButtons = React.createClass({

  render: function(){
    return (<div>

      <button className={this.props.classname} type={this.props.type}>{this.props.value}</button>
      </div>);
  }
});

module.exports = LockButtons;
