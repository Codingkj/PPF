var React = require('react');
var MyButton = require('./Buttons.jsx');
var Paragraph = require('./Paragraph.jsx');

var MyDatebox = React.createClass({
  render: function(){
    return (<div>

      <div className="row">
        <div className="small-9 columns small-centered">
          <article className="event">

              <div className="event-date">
                <p className="event-month">{this.props.month}</p>
                <p className="event-day">{this.props.day}</p>
              </div>

              <div className="event-desc">
                <h4 className="event-desc-header">{this.props.time}</h4>
                <p className="event-desc-detail"><span className="event-desc-time"></span>You have an appointment for a {this.props.treatment} with {this.props.practitioner}</p>
                <div className="row">
                    <div className="columns small-4">  
                        <MyButton clicked={this.cancelApptClicked} className="cancelAppointment-button" type="button" value="Cancel Appointment"/>
                    </div>
                    <div className="columns small-4">    
                        <Paragraph value={this.props.message} className="tiny-font"/>
                       
                        <br />
                    </div>
                    <div className="columns small-4">
                        <MyButton clicked={this.changeReminder} className="tiny-button" type="button" value={this.props.buttonText}/>
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
