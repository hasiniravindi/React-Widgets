var React = require('react');
var ReactDOM = require('react-dom');

var Weather = React.createClass({
  getInitialState: function() {
    return { weather: "weather data loading.."};
  },

  componentDidMount: function() {
    var geo = navigator.geolocation;
    var self=this;
    // raw DOM way to request
    geo.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      var key = "645c5d39c7603f17e23fcaffcea1a3c1";
      var baseurl = "http://api.openweathermap.org/data/2.5/weather";
      var units = "&units=imperial";
      var url = baseurl+"?lat="+lat+"&lon="+lon+units+"&APPID="+key;

      var request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function() {
        var response = JSON.parse(request.responseText);
        self.setState({weather: response.main.temp + " degrees F"});
      };
      request.send();
    });
  },
  // BETTER SETUP
  // componentDidMount: function(){
  //   geo.geoCurrentPosition(this.makeWeatherRequest)
  // },
  // makeWeatherRequest: function(position){
  //   //set up the XMLHttpRequest
  //   request.onload = this.receiveWeather;
  //   request.send();
  // },
  // receiveWeather: function(response){
  //   setState{weather: response.weather}
  // }

  render: function(){
    return <div>{this.state.weather}</div>;
  }
});

module.exports = Weather;
