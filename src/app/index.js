var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var TitleComponent = React.createClass({
  render: function() {
    var _props = this.props.ctx;
    return(
      <div>
        <h1>{_props.heading}</h1>
        <h2>{_props.subheading}</h2>
      </div>
    );
  }
});

var title = { heading: 'Todo Experiment', subheading: "An experiment with React" };

ReactDOM.render(<TitleComponent ctx={title} />, document.getElementById('title'));

// Create component
var ToDo = React.createClass({
  getInitialState: function() {
    return {
      todos:['wash up', 'eat some cheese', 'take a shower'],
      age: 30
    }
  },
  render: function() {

    // We bind 'this' to the setTimeout so that setState can find it
    var ager = setTimeout(function(){
      this.setState({
        age: 35
      })
    }.bind(this), 5000);

    return(
      <div id="todo list">
      <p>This is a todo list</p>
      <p>{this.state.age}</p>
      <ul>
        <li>{this.state.todos[0]}</li>
        <li>{this.state.todos[1]}</li>
        <li>{this.state.todos[2]}</li>
      </ul>
      </div>
    );
  }
});

ReactDOM.render(<ToDo ctx={title} />, document.getElementById('wrapper'));
