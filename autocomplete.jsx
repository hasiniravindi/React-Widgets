var React = require('react');
var ReactDOM = require('react-dom');

var Autocomplete = React.createClass({
  getInitialState: function(){
    return { searchString: "" };
  },

  handleChange: function(e){
    this.setState({searchString: e.target.value});
  },

  handleClick: function(e){
    this.setState({searchString: e.target.textContent});
  },

  render: function() {
    var self = this;
    var list = this.props.list.filter(function(l){
        return l.match(new RegExp('^'+self.state.searchString));
    });

    return (
      <div>
        <input type="text" placeholder="search" value={this.state.searchString} onChange={this.handleChange}/>
        <ul>
          {
            list.map(function(item, index) {
              return (
                <li key={index} onClick={self.handleClick}>
                  {item}
                </li>);
           })
         }
       </ul>
     </div>
    );
  }
});


module.exports = Autocomplete;
