var React = require('react');

var LockButtons = React.createClass({
  render: function(){
    return (<div>

      <button className="lock-button" type={this.props.type}>{this.props.value}</button>
      </div>);
  }
});

module.exports = LockButtons;
