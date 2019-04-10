import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import ItemsList from './src/components/ItemsList'

export default class appREST extends Component {
  render() {
    return (
      <ItemsList></ItemsList>
    );
  }
}

AppRegistry.registerComponent('appREST', () => appREST);
