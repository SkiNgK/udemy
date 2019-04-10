import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import Navbar from './Navbar';

const contactDetails = require('../imgs/detalhe_contato.png');

export default class Contacts extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar 
            hidden={false}
            backgroundColor = '#61BD8C'/>
        <Navbar back navigator={this.props.navigator} backColor='#61BD8C'/>
        <View style={styles.contactLogo}>
            <Image source={contactDetails}/>
            <Text style={styles.contactTitle}>Contatos</Text>
        </View>
        <View style={styles.contactDetails}>
            <Text style={styles.txtContacts}>Tel: (61) 33333-9999</Text>
            <Text style={styles.txtContacts}>Cel: (61) 99999-4444</Text>
            <Text style={styles.txtContacts}>Email: contatoATM@contato.com.br</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contactLogo: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20
    },
    contactTitle: {
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25,
        flex: 1,
        color: '#61BD8C'
    },
    contactDetails: {
        marginTop: 20,
        marginLeft: 20,
        padding: 20
    },
    txtContacts: {
        fontSize: 18
    }
});
