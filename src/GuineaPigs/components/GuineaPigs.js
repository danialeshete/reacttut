import React from 'react';
import PropTypes from 'prop-types';

//stateless function component

export const GuineaPigs = (props) => {

    let src = props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
}

GuineaPigs.propTypes = {
  src: PropTypes.string.isRequired
};


/* 
stateless  component 

export class GuineaPigs extends React.Component {

  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
} */


