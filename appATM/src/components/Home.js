import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Navbar from './Navbar';

const logo = require('../imgs/logo.png');
const clients = require('../imgs/menu_cliente.png');
const contats = require('../imgs/menu_contato.png');
const company = require('../imgs/menu_empresa.png');
const services = require('../imgs/menu_servico.png');

export default class Home extends Component {
  render() {
    return (
      <View>
        <StatusBar 
          hidden={false}
          backgroundColor = '#ffd700'/>
          <Navbar/>
          <View style={ styles.logo}>
            <Image source={logo}/>
          </View>
          <View style={styles.menu}> 
            <View style={styles.options}> 
            <TouchableHighlight 
            underlayColor={'#B9C941'}
            activeOpacity={0.7}
            onPress={() => {
              this.props.navigator.push({ id: 'clients'});
            }}>
              <Image style={styles.marginOptions} source={clients}/>
            </TouchableHighlight>
            <TouchableHighlight 
            underlayColor={'#61BD8C'}
            activeOpacity={0.7}
            onPress={() => {
              this.props.navigator.push({ id: 'contacts'});
            }}>
              <Image style={styles.marginOptions} source={contats}/>
            </TouchableHighlight>
            </View>
            <View style={styles.options}> 
            <TouchableHighlight 
            underlayColor={'#EC7148'}
            activeOpacity={0.7}
            onPress={() => {
              this.props.navigator.push({ id:'company'})
            }}>
              <Image style={styles.marginOptions} source={company}/>
            </TouchableHighlight>
            <TouchableHighlight 
            underlayColor={'#19D1C8'}
            activeOpacity={0.7}
            onPress={() => {
              this.props.navigator.push({ id:'services'})
            }}>
              <Image style={styles.marginOptions} source={services}/>
            </TouchableHighlight>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  options: {
    flexDirection: 'row',
  },
  marginOptions: {
    margin: 10
  }
})