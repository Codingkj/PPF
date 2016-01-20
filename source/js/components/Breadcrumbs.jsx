var React = require('react');
var AppointmentStore = require('../stores/AppointmentStore.js');
var ClientStore = require('../stores/ClientStore.js');

var MyBreadcrumbs= React.createClass({



  render: function(){
    return (<div>
    	 <div className=" row">
    	 	<div className="columns-12 center">
    			<ul className="pagination" role="navigation" aria-label="Your Path to Success">
				      <li className="disabled">« <span className="show-for-sr">Previous page</span></li>
				      <li className="current"><span className="show-for-sr">This page</span> 1</li>
				      <li><a href="#" aria-label="Treatment">2</a></li>
				      <li><a href="#" aria-label="Date & Time">3</a></li>
				      <li><a href="#" aria-label="Book & Confirm">4</a></li>
				      <li><a href="#" aria-label="Next page">» <span className="show-for-sr">Next page</span></a></li>
				</ul>
		   </div>
		 </div>
			
				  
      </div>);
  }
});

module.exports = MyBreadcrumbs;
