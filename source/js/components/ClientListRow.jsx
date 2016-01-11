var React = require('react');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var ClientListRow = React.createClass({

      render: function() {
        return (<div>
            <div className="row">
                  <div className="columns medium-12">
                        <tr>
                            <td>{this.props.clientFirstName}</td>
                            <td>{this.props.clientSecondName}</td>
                        </tr>
                  </div>
            </div>
      </div>

module.exports = ClientListRow;
