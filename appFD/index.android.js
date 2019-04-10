import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

const Styles = {
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  viewBackground: {
    backgroundColor: 'palegreen',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  }
};

const generatePhrase = () => {
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber*5)

  var phrases = Array();
  phrases[0] = 'A vida é um caos aleatório,ordenada pelo tempo.';
  phrases[1] = 'O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.';
  phrases[2] = 'A verdade, é que dói lembrar dela';
  phrases[3] = 'No mundo do aleatório a ordem é não se preocupar.';
  phrases[4] = 'E sem certezas do amanhã apostamos em um futuro aleatório.';

  var selectedPhrase = phrases [randomNumber];
  Alert.alert(selectedPhrase);
}

const App = () => {
  const {viewBackground, buttonStyle, buttonText} = Styles
  return(
    <View style={ viewBackground }>
      <Image source={require('./images/logo.png')}></Image>
      <TouchableOpacity 
        style={ buttonStyle } 
        onPress={ generatePhrase }>
        <Text style={ buttonText }>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('appFD',() => App);

