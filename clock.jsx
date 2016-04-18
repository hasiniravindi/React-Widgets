var React = require('react');
var ReactDOM = require('react-dom');

var Clock = React.createClass({
  getInitialState: function(){
    return { time: new Date() };
  },

  componentDidMount: function(){
    this.timer = setInterval(this.tick, 1000);
  },

  tick: function(){
    this.setState({time: new Date()});
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
  },

  render: function() {
    var time = this.state.time;
    return (
      <div>{"Current Time: " + time}</div>
    );
  }
});

//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
//api key : 645c5d39c7603f17e23fcaffcea1a3c1

module.exports = Clock;
