var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var MyButton = require('./Buttons.jsx');
var MyBreadcrumbs = require('./Breadcrumbs.jsx');
var MenuBar = require('./MenuBar.jsx');
var ClientMenuBar = require('./ClientMenuBarWhenLoggedIn.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentStore = require('../stores/AppointmentStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');

var Treatments1 = React.createClass({
  
  bookTreatment: function(){
    event.preventDefault();
     AppointmentActionCreators.dateAndTime();
  },

  render: function(){

    var types = ClientStore.getTreatments();
    var practitioners = ClientStore.getPractice();
  
    var standardText = "What kind of treatment do you require from ";
    var firstText = standardText + practitioners.practitioner1 + ' ?';
    

    return (<div className="page-background1">
              
              <ClientMenuBar />
              <div className="separator">
                <div className="row">
                  <div className="large-12 columns">
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-12">
                    <div id="treatment-header">
                        <MyBreadcrumbs />
                        <Header defaultValue="Treatments" className="center"/>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="column medium-10 medium-offset-2">  
                    <Paragraph value={firstText} />
                </div>
              </div>
              <div className="row">
                <div className="column medium-7 medium-offset-5"> 
                    <div className="treatment-button">  
                        <MyButton clicked={this.bookTreatment} className="med-button" type="button" value={types[0]}/>
                    </div>
                    <div className="treatment-button">
                        <MyButton clicked={this.bookTreatment} className="med-button" type="button" value={types[1]}/>
                    </div>
                    <div className="treatment-button">
                        <MyButton clicked={this.bookTreatment} className="med-button" type="button" value={types[2]}/>
                    </div>
                    <div className="treatment-button">
                        <MyButton clicked={this.bookTreatment} className="med-button" type="button" value={types[3]}/>
                    </div>
                  </div>
              </div>
              <div className=" separator">
                      <div className="row">
                          <div className="large-12 columns">
                             
                          </div>
                      </div>
                  </div>
          </div>);
  }
});

module.exports = Treatments1;
