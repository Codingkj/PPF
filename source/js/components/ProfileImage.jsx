var React = require('react');

var ProfileImage = React.createClass({
  render: function() {
     return (<div className="profile">
      <img src={this.props.src} className={this.props.className}/>
      </div>);
  }
});

module.exports = ProfileImage;