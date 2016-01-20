var React = require('react');



var MyDatebox = React.createClass({


  render: function(){
    return (<div>

      <div className="row">
        <div className="small-9 columns small-centered">
          <article className="event center">

              <div className="event-date">
                <p className="event-month">{this.props.month}</p>
                <p className="event-day">{this.props.day}</p>
              </div>

              <div className="event-desc">
                <h4 className="event-desc-header">{this.props.time}</h4>
                <p className="event-desc-detail"><span className="event-desc-time"></span>You have an appointment for a {this.props.treatment} with {this.props.practitioner}</p>
                <div className="row">
                    <div className="columns small-4">  
                        <button onClick={this.props.cancelApptClicked} className="cancelAppointment-button" type="button">Cancel Appointment</button>
                    </div>
                    <div className="columns small-4">    
                        <p className="tiny-font">Message goes here</p>
              
                    </div>
                    <div className="columns small-4">
                        <button onClick={this.props.changeReminder} className="tiny-button" type="button">{this.props.buttonStatus}</button>
                    </div>
                </div> 
                  

              </div>

          </article>

          <hr />

            
        </div>
      </div>
      </div>);
  }
});

module.exports = MyDatebox;
