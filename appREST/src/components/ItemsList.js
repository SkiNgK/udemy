import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import axios from 'axios';
import Items from './Items';

export default class ItemsList extends Component {
  constructor(props) {
    super(props);

    this.state = { itemsList: [] };
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(response => { 
      this.setState({ itemsList: response.data }); 
    })
      .catch(() => { console.log('error ao recuperar os dados') });
  }

  render() {
    return (
      <ScrollView style={styles.backgroundColor}>
        {this.state.itemsList.map(item =>
          <Items 
            key={item.titulo}
            item={item}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#afeeee'
  }
})