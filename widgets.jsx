var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var Clock = require('./clock');
var Weather = require('./weather');

var tabContent = [
              {title: "title1", content: "here is some content 1"},
              {title: "title2", content: "here is some content 2"},
              {title: "title3", content: "here is some content 3"},
              {title: "title4", content: "here is some content 4"},
              {title: "title5", content: "here is some content 5"},
              {title: "title6", content: "here is some content 6"},
              {title: "title7", content: "here is some content 7"},
            ];


var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <Weather/>
        <Clock/>
        <Tabs tabs={ tabContent }/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
