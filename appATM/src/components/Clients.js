import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import Navbar from './Navbar';

const clientsDetails = require('../imgs/detalhe_cliente.png');
const client1 = require('../imgs/cliente1.png');
const client2 = require('../imgs/cliente2.png');

export default class Clients extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar 
            hidden={false}
            backgroundColor = '#B9C941'/>
        <Navbar back navigator={this.props.navigator} backColor='#B9C941'/>
        <View style={styles.logoClients}>
            <Image source={clientsDetails}/>
            <Text style={styles.logoTitle}>Nossos Clientes</Text>
        </View>
        <View style={styles.clientDetail}> 
            <Image source={client1}/>
            <Text style={styles.clientText}>cliente 1</Text>
        </View>
        <View style={styles.clientDetail}>
            <Image source={client2}/>
            <Text style={styles.clientText}>cliente 2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    logoClients: {
        marginTop: 30, 
        marginLeft: 15,
        flexDirection: 'row'
    },
    logoTitle: {
        fontSize: 30,
        flex: 1,
        marginLeft: 10,
        marginTop: 25,
        color: '#B9C941'
    },
    clientDetail: {
        padding: 20,
        marginTop: 10,
        marginLeft: 15
    },
    clientText: {
        fontSize: 18,
        marginLeft: 20
    }
});
