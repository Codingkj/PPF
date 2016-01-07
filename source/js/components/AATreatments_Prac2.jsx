var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var MyButton = require('./Buttons.jsx');
var MyBreadcrumbs = require('./Breadcrumbs.jsx');
var MenuBar = require('./MenuBar.jsx');
var ClientStore = require('../stores/ClientStore.js');
var AppointmentActionCreators = require('../actions/AppointmentActionCreators.js');
var AppointmentStore = require('../stores/AppointmentStore.js');

var Treatments2 = React.createClass({
  
  bookTreatment: function(event){
    event.preventDefault();
     AppointmentActionCreators.bookPractitioner();
  },

  render: function(){
    var types = ClientStore.getTreatments;
    var practitioners = ClientStore.getPractice;
  
    var standardText = "What kind of treatment do you require from ";
    var firstText = standardText + practitioners.practitioner1 + ' ?';
    var secondText = standardText + practitioners.practitioner2 + ' ?';

    return (<div>
              <MenuBar />
              <div className="row">
                <div className="columns medium-12">
                    <div id="treatment-header">
                        <MyBreadcrumbs/>
                        <Header defaultValue="Treatments" className="center"/>
                    </div>
                </div>
              </div>
              
              <div className="row">
                <div className="column medium-10 medium-offset-2">  
                    <Paragraph value={secondText} />
                </div>
              </div>
              <div className="row">
                <div className="column medium-7 medium-offset-5">  
                    <div className="treatment-button">     
                    <MyButton clicked={this.bookTreatment} className="med-button" type="button" value={types[4]}/>
                    </div>
                    <div className="treatment-button">
                    <MyButton clicked={this.bookTreatment} className="med-button" type="button" value={types[5]}/>
                    </div>
                    <div className="treatment-button">
                    <MyButton clicked={this.bookTreatment} className="med-button" type="button" value={types[6]}/>
                    </div>
                </div>
              </div>
        </div>);
  }
});

module.exports = Treatments2;
