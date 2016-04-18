var React = require('react');
var ReactDOM = require('react-dom');

var Tabs = React.createClass({
  getInitialState: function(){
    return { selected: 0 };
  },

  clicked: function(index){
    this.setState({selected: index});
  },

  render: function() {
    var tabs = this.props.tabs;
    var self = this;

    return (
      <div>
        <ul className="tab-titles">
          {
            tabs.map(function(tab, index) {

              var style = "unselected";

              if(self.state.selected === index){
                style = 'selected';
              }

              return (
                <h1 className={ style } onClick={self.clicked.bind(self, index)}>
                  {tab.title}
                </h1>);
            })
          }
        </ul>
        <article>
          {tabs[this.state.selected].content}
        </article>
      </div>
    );
  }
});

module.exports = Tabs;
