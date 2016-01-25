var React = require('react');



var MyDatebox = React.createClass({

  getTimeString: function(time){
     var timeNotation = ['9:00am','10:00am','11:00am','12:00','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
     if (time == '9'){ return timeNotation[0];}
      else if (time == '10'){return timeNotation[1];}
        else if (time == '11'){return timeNotation[2];}
          else if (time == '12'){return timeNotation[3];}
            else if (time == '13'){return timeNotation[4];}
              else if (time == '14'){return timeNotation[5];}
                else if (time == '15'){return timeNotation[6];}
                  else if (time == '16'){return timeNotation[7];}
                    else if (time == '17'){return timeNotation[8];}
                      else if (time == '18'){return timeNotation[9];}
                        else if (time == '19'){return timeNotation[10];}
                          else return 'Bogus Time';
            
   },
   cancelApptClicked: function(event){
   // var appointmentId = event.target.id;
   console.debug('is the ID',event);
   console.log('in cancelApptClicked on Dashboard.',event, appointmentId);
   AppointmentActionCreators.removeAppointment(appointmentId);
   },

  render: function(){

    var dateReceived = this.props.day;
   
    var timeReceived = this.props.time;
   
    var showTime = this.getTimeString(timeReceived);
    

    if (this.props.buttonStatus === true){
      var buttonClass = "tiny-button $mintgreen";
      var buttonMessage = 'Turn REMINDER OFF.';
      var reminderMessage = 'A reminder will be sent 48 hours prior to this time';
    }

      else if (this.props.buttonStatus === false){
        var buttonClass = "tiny-button $mylightbeige";
        var buttonMessage = 'Turn REMINDER ON.';
        var reminderMessage = 'No reminder set.';
      }
    

    return (<div>

      <div className="row">
        <div className="small-9 columns small-centered">
          <article className="event center">

              <div className="event-date">
                <p className="event-month">{this.props.month}</p>
                <p className="event-day">{this.props.day}</p>
              </div>

              <div className="event-desc">
                <h4 className="event-desc-header">{showTime}</h4>
                <p className="event-desc-detail"><span className="event-desc-time"></span>You have an appointment for a {this.props.treatment} with {this.props.practitioner}</p>
                <div className="row">
                    <div className="columns small-4">  
                        <button onClick={this.cancelApptClicked} className="cancelAppointment-button" type="button">Cancel Appointment</button>
                    </div>
                    <div className="columns small-4">    
                        <p className="tiny-font">{reminderMessage}</p>
              
                    </div>
                    <div className="columns small-4">
                        <button onClick={this.props.changeReminder} className={buttonClass} type="button">{buttonMessage}</button>
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
