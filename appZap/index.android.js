import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/App';

const appZap = props => (
  <App></App>
)

AppRegistry.registerComponent('appZap', () => appZap);
