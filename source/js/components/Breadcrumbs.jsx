var React = require('react');

var MyBreadcrumbs= React.createClass({
  render: function(){
    return (<div>
				<nav aria-label="You are here:" role="navigation">
				  <ul className="breadcrumbs">
				    <li><a href="#">Treatment</a></li>
				    <li><a href="#">Date & Time </a></li>
				     <li><a href="#">Book & Confirm</a></li>
				    <li>
				      <span className="show-for-sr">Current: </span> Choosing
				    </li>
				  </ul>
				</nav>
      </div>);
  }
});

module.exports = MyBreadcrumbs;
