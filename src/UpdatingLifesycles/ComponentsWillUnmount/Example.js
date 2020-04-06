import React from 'react';

export class Example extends React.Component {
  componentWillUnmount() {
    alert('Goodbye world');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}