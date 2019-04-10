import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import HeaderJoken from './src/components/HeaderJoken'
import IconChoiced from './src/components/IconChoiced'

const Styles = StyleSheet.create({
  chosseButtonStyle: {
    width: 90
  },
  buttonPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  resultPanel: {
    alignItems: 'center',
  },
  txtResult: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    height: 60,
    marginTop: 10,
    alignItems: 'center'
  },
  iconChoice: {
    alignItems: 'center',
    marginBottom: 10
  },
  txtChoice: {
    fontSize: 18
  }
});

class joken extends Component {

  constructor(props) {
    super(props);

    this.state = { userChoice: '', cpuChoice: '', result: '' }
  };

  joken(userChoice) {
    var cpuChoice = Math.floor(Math.random() * 3);

    switch (cpuChoice) {
      case 0: cpuChoice = 'Pedra'; break;
      case 1: cpuChoice = 'Papel'; break;
      case 2: cpuChoice = 'Tesoura'; break;
    }

    if (cpuChoice == 'Pedra' && userChoice == 'Papel') {
      result = 'Você Venceu!';
    } if (cpuChoice == 'Pedra' && userChoice == 'Tesoura') {
      result = 'Você Perdeu!';
    } if (cpuChoice == 'Pedra' && userChoice == 'Pedra') {
      result = 'Empate';
    }

    if (cpuChoice == 'Papel' && userChoice == 'Pedra') {
      result = 'Você Perdeu!';
    } if (cpuChoice == 'Papel' && userChoice == 'Tesoura') {
      result = 'Você Venceu!';
    } if (cpuChoice == 'Papel' && userChoice == 'Papel') {
      result = 'Empate';
    }

    if (cpuChoice == 'Tesoura' && userChoice == 'Pedra') {
      result = 'Você Venceu!';
    } if (cpuChoice == 'Tesoura' && userChoice == 'Tesoura') {
      result = 'Empate';
    } if (cpuChoice == 'Tesoura' && userChoice == 'Papel') {
      result = 'Você Perdeu!';
    }

    this.setState({
      userChoice: userChoice,
      cpuChoice: cpuChoice,
      result: result
    });
  };
  render() {
    const { chosseButtonStyle } = Styles;
    return (
      <View>
        <HeaderJoken></HeaderJoken>
        <View style={Styles.buttonPanel}>
          <View style={Styles.chosseButtonStyle}>
            <Button
              title='Pedra'
              onPress={() => { this.joken('Pedra') }}
            />
          </View>
          <View style={Styles.chosseButtonStyle}>
            <Button
              title='Papel'
              onPress={() => { this.joken('Papel') }}
            />
          </View>
          <View style={Styles.chosseButtonStyle}>
            <Button
              title='Tesoura'
              onPress={() => { this.joken('Tesoura') }}
            />
          </View>
        </View>
        <View style={Styles.resultPanel}>
          <IconChoiced choice={this.state.userChoice} player='Jogador'></IconChoiced>
          <IconChoiced choice={this.state.cpuChoice} player='Computador'></IconChoiced>
          <Text style={Styles.txtResult}>Resultado: {this.state.result}</Text>
        </View>
      </View>
    );
  };
};

AppRegistry.registerComponent('joken', () => joken);
