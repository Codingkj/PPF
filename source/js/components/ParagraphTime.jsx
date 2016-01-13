var React = require('react');

var ParagraphTime = React.createClass({
  render: function () {
    return (
      <div>
        <p className={this.props.className+' '+ this.props.shade}>{this.props.value + this.props.time}</p>
      </div>
    );
  }
});

module.exports = ParagraphTime;