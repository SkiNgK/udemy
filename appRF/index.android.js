import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Routes from './src/Routes';

export default class appRF extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

AppRegistry.registerComponent('appRF', () => appRF);
