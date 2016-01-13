var React = require('react');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var MyButtonComponent = React.createClass({
	render: function (){
		return (<div>
			<button onClick={this.props.clicked} id={this.props.id} className={this.props.className} type={this.props.type}>{this.props.value}</button>
      </div>
      );
	}
});

module.exports = MyButtonComponent;
