var React = require('react');

var MenuComponent = React.createClass({
  render: function() {
  
     return (<div data-sticky-container>
     			<div className="sticky" id="navbar" data-sticky data-margin-top="0" data-margin-bottom="0">
			      <nav data-magellan>
					    <ul className="horizontal menu expanded">
					      <li className="menu-text">Our Logo</li>
					      <li className="menu-text"><a href="#">CLIENT DASHBOARD</a></li>
					      <li className="menu-text"><a href="#">PRACTITIONER INFO</a></li>
					      <li className="menu-text"><a href="#"></a></li>  
					      <li className="menu-text"><a href="#">LOG IN</a></li>  
					      <li className="menu-text"><a href="#">About Us</a></li>
					      <li className="menu-text"><a href="#">Contact Us</a></li> 
					    </ul>
				
				  </nav>
				</div>
      </div>);
  }
});

module.exports = MenuComponent;