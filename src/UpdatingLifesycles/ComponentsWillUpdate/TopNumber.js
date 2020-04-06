import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }
  componentWillMount(){
    
  }
  
  componentWillUpdate(nextProps, nextState){
  if (document.body.style.background != yellow 
  && this.state.highest >= 950*1000) {
  document.body.style.background = yellow;
}
  }

  componentWillReceiveProps(nextProps) {
    if (document.body.style.background != yellow 
  && this.state.highest >= 950*1000) {
  document.body.style.background = yellow;
} else if (!this.props.game 
  && nextProps.game) {
  document.body.style.background = 'white';
}
  }

  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};