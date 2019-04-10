import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import Home from './src/components/Home';
import Clients from './src/components/Clients';
import Contacts from './src/components/Contacts';
import Company from './src/components/Company';
import Services from './src/components/Services';

export default class appATM extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home'}}
        renderScene={(route, navigator) => {
          if (route.id === 'home') {
            return(<Home navigator={navigator}/>)
          }
          if (route.id === 'clients') {
            return(<Clients navigator={navigator}/>)
          }
          if (route.id === 'contacts') {
            return(<Contacts navigator={navigator}/>)
          }
          if (route.id === 'company') {
            return(<Company navigator={navigator}/>)
          }
          if (route.id === 'services') {
            return(<Services navigator={navigator}/>)
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('appATM', () => appATM);
