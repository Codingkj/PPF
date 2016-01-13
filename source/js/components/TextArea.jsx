var React = require('react');

var TextAreaComponent = React.createClass({
  render: function() {
     return (<div>
      <textarea rows={this.props.rows} placeholder={this.props.placeholder} className={this.props.className}/>
      </div>);
  }
});

module.exports = TextAreaComponent;