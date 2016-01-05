var React = require('react');

var MyCheckbox = React.createClass({
  render: function(){
    return (<div>

      <input type="checkbox" className={this.props.className}></input>
      </div>);
  }
});

module.exports = MyCheckbox;
