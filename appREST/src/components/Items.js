import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

export default class Items extends Component {
  render() {
    return (
      <View style={ styles.itemBox }>
        <View style={ styles.picture }>
          <Image style={{height: 100, width: 100}} source={{ uri: this.props.item.foto }}></Image>
        </View>
        <View style={ styles.itemsDetails }>
          <Text style={ styles.itemTitle }>{this.props.item.titulo}</Text>
          <Text style={ styles.itemPrice }>R$ {this.props.item.valor}</Text>
          <Text>Local: {this.props.item.local_anuncio}</Text>
          <Text>Data: {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemBox: {
    borderWidth: 0.3,
    borderColor: '#87ceeb',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#f0ffff'
  },
  picture: {
    width: 102,
    height: 102
  },
  itemsDetails: {
    marginLeft: 20,
    flex: 1
  },
  itemTitle: {
    fontSize: 18,
    color: '#4682b4',
    marginBottom: 5
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});