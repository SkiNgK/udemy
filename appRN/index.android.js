import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio*10);
  alert(numero_aleatorio);
}

const App = () => {
  return (
    <View>
      <Text>Hello World!</Text>
      <Button title="Gerar número aleatório" onPress={geraNumeroAleatorio}></Button>
    </View>
  );
};

AppRegistry.registerComponent('appRN', () => App);
