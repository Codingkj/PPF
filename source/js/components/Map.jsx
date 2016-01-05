var React = require('react');

var latitude = 51.4962994;
var longitude = -0.1108573;

// var mapOptions={ 
//             center:new google.maps.LatLng(latitude,longitude),
//             zoom:12   };
    
// var mapCreated = new google.maps.Map(document.getElementById(mapContainer),mapOptions);
//       google.maps.event.trigger(document.getElementById(mapContainer), 'resize');


// var marker = new google.maps.Marker({
//                             position:{lat:latitude,lng:longitude},
//                             map: map,
//                             title: 'We are here!',
//                           });
// <script src="http://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true">
//    </script>

var Map = React.createClass({
  render: function() {
     return (<div id="mapContainer" className="map">
     	<iframe width="1100" height="320" src={this.props.src}></iframe>
     	</div>);
  }
});

module.exports = Map;