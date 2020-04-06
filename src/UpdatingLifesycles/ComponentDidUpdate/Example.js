import React from 'react';

export class Example extends React.component {
  componentDidUpdate(prevProps, prevState) {
    alert('Component is done rendering!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}