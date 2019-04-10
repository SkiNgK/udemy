import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import Navbar from './Navbar';

const companyDetails = require('../imgs/detalhe_empresa.png');

export default class Company extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar 
            hidden={false}
            backgroundColor = '#EC7148'/>
        <Navbar back navigator={this.props.navigator} backColor='#EC7148'/>
        <View style={styles.companyLogo}>
            <Image source={companyDetails}/>
            <Text style={styles.companyTitle}>A Empresa</Text>
        </View>
        <View style={styles.companyDetails}>
            <Text style={styles.infoCompany}>Lorem ipsum dolorem sit amet, dolorem sit lorem ipsum dolorem sit amet, dolorem sit lorem ipsum dolorem sit amet, dolorem sit</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    companyLogo: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20
    },
    companyTitle: {
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25,
        flex: 1,
        color: '#EC7148'
    },
    companyDetails: {
        marginTop: 20,
        marginLeft: 20,
        padding: 20
    },
    infoCompany: {
        fontSize: 18
    }
});