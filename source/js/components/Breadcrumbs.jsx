var React = require('react');



var MyBreadcrumbs= React.createClass({

  getInitialState: function () {
    return {
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus()
  	};
  },


  handleChange: function () {
      console.log("CHANGING Breadcrumbs");
    this.setState({
      day: AppointmentStore.getCurrentDay(),
      month: AppointmentStore.getCurrentMonth(),
      year:AppointmentStore.getCurrentYear(),
      lock:AppointmentStore.getLockDayStatus(),
    });
    console.log('CHANGED TO ',day,month,year);
  },

  componentDidMount: function () {
      ClientStore.addChangeListener(this.handleChange);
      AppointmentStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
      ClientStore.removeChangeListener(this.handleChange);
      AppointmentStore.removeChangeListener(this.handleChange);
  },

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
