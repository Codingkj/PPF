var React = require('react');

var MyParaComponent = React.createClass({
  render: function () {
    return (
      <div>
        <p className={this.props.className+' '+ this.props.shade}>{this.props.value}</p>
      </div>
    );
  }
});

module.exports = MyParaComponent;