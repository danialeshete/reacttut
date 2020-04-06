import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { userInput: '' };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
        <h1 style={{position: "absolute"}}>{this.state.userInput}</h1>
      </div>
    );
  }
}

function printMousePos() {
    var cursorX;
    var cursorY;
    document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}
    document.getElementById('test').innerHTML = "x: " + cursorX + ", y: " + cursorY;
}
    export default Input;