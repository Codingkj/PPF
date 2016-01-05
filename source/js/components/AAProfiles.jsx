var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var Paragraph = require('./Paragraph.jsx');
var MyButton = require('./Buttons.jsx');

var MenuBar = require('./MenuBar.jsx');
var ProfileImage = require('./ProfileImage.jsx');


var Practitioners = React.createClass({
  render: function(){
    return (<div>
            <MenuBar />
            <br />
              <div className="row">
                   <br />
                <div className="columns medium-2 medium-offset-1">
                  <ProfileImage />
                  <br /><br />
                </div>
                <div className="columns medium-5">
                  <Paragraph value="Some text goes here about how the practitioner came to join the practice" />
                </div>
                <div className="columns medium-3"> 
                  <MyButton className="med-button" type="button" value="BOOK NOW!" />
                </div>
              </div>
              <div className="row">
                <div className="columns medium-2 medium-offset-1">
                  <ProfileImage />
                </div>
                <div className="columns medium-5">
                  <Paragraph value="Some text goes here about how the practitioner came to join the practice" />
                </div>
                <div className="columns medium-3"> 
                  <MyButton className="med-button" type="button" value="BOOK NOW!" />
                </div>
              </div>
             <br /><br /> 
            </div>

      );
  }
});

module.exports = Practitioners;
