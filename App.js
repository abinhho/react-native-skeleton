import React, { Component } from 'react';
import AppNavigator from './src/navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}
