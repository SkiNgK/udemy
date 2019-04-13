import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './src/App'

const appCalculadora = () => (
  <App/>
);

AppRegistry.registerComponent('appCalculadora', () => appCalculadora);
