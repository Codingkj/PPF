var React = require('react');

var TextInputComponent = React.createClass({
  render: function() {
     return (<div>
      <input type="text" placeholder={this.props.placeholder} className={this.props.className}/>
      </div>);
  }
});

module.exports = TextInputComponent;