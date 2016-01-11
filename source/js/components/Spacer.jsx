var React = require('react');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var Spacer = React.createClass({
	render: function (){
		return (<div height={this.props.height} className="separator">
                        <div className="row">
                                <div className="large-12 columns">
                                     
                                  </div>
                        </div>
                </div>
      );
	}
});

module.exports = Spacer;
