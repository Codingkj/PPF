var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var TextInput = require('./TextInput.jsx');
var LockButton = require('./LockButtons.jsx');
var Table = require('./Table.jsx');
var MenuBar = require('./MenuBar.jsx');
var MyButton = require('./Buttons.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');

var WeekView = React.createClass({
  render: function(){
    return (<div className="week-view-background">
              <MenuBar />

              <div className="row">
                <div className="columns medium-12">
                  <Header defaultValue="Weekly View of Appointments" className="center"/><br />
                </div>
              </div>

              <div className="row">
                <div className="columns medium-1 medium-offset-1">
                    <MyButton type="button" value="Previous Week" className="tiny-button" />
                  </div>
                  <div className="columns medium-8">
                      <Table  />  
                  </div>
                  <div className="columns medium-2">
                      <MyButton type="button" value="Next Week" className="tiny-button" />
                  </div>
              </div>
                  
              <div className="row">
                <div className="columns medium-2 medium-offset-2">
                 <MyButton className="med-button" type="button" value="LOCK WEEK" />
                </div>
                <div className="columns medium-2">
                 <MyButton className="med-button" type="button" value="UNLOCK WEEK" />    
                </div>
                <div className="columns medium-4 medium-offset-2">
                 <MyButton className="med-button" type="button" value="Go to Daily View" />    
                </div>
              </div>
              <br /><br />
   
      </div>);
  }
});

module.exports = WeekView;
