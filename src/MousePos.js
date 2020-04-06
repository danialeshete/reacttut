import React from 'react';
import ReactDOM from 'react-dom';


export class MousePos extends React.Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    const { x, y } = this.state;
    return (<div onMouseMove={this._onMouseMove.bind(this)}>
      <h1>Mouse coordinates: { x } { y }</h1>
  </div>);
  }
}

export default MousePos;

 /* 
export class MousePos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Default Content"
    }
  }
 
  updateContent = () => {
      this.setState({ message: "Updated Content!"});
  }
 
  render() {
    return (
      <div>
        <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.message }
        </div>
        <div className="text-center">
          <button className="btn btn-secondary" onClick={this.updateContent}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}
 
export default MousePos; */