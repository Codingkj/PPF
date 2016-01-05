var React = require('react');

var HeaderComponent = React.createClass({
  render: function() {
     return (<div className={this.props.className}>
      <h3>{this.props.defaultValue}</h3>
      </div>);
  }
});

module.exports = HeaderComponent;