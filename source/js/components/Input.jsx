var React = require('react');

var InputComponent = React.createClass({
  render: function() {
     return (<div>
      <input type={this.props.type} placeholder={this.props.placeholder} className={this.props.className}/>
      </div>);
  }
});

module.exports = InputComponent;