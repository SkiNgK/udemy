import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import Navbar from './Navbar';

const servicesDetails = require('../imgs/detalhe_servico.png');

export default class Services extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar 
            hidden={false}
            backgroundColor = '#19D1C8'/>
        <Navbar back navigator={this.props.navigator} backColor='#19D1C8'/>
        <View style={styles.serviceLogo}>
            <Image source={servicesDetails}/>
            <Text style={styles.serviceTitle}>Serviços</Text>
        </View>
        <View style={styles.serviceDetails}>
            <Text style={styles.txtServices}>- Consultoria</Text>
            <Text style={styles.txtServices}>- Processos</Text>
            <Text style={styles.txtServices}>- Acompanhamento de Projetos</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    serviceLogo: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20
    },
    serviceTitle: {
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25,
        flex: 1,
        color: '#19D1C8'
    },
    serviceDetails: {
        marginTop: 20,
        marginLeft: 20,
        padding: 20
    },
    txtServices: {
        fontSize: 18
    }
});
