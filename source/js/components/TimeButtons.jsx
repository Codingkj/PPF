var React = require('react');

var timeButton = React.createClass({
	render: function (){
		console.log('className has become',this.props.className);
		return (<div>
			<button onClick={this.props.clicked} id={this.props.id} className={this.props.className} type={this.props.type}> {this.props.value}</button>
			
      </div>
      );
	}
});

module.exports = timeButton;