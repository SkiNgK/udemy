import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Header, Icon, Button, Card, ThemeProvider } from 'react-native-elements';

const Styles = {
  viewBackground: {
    backgroundColor: 'lightcyan',
  },
};

const pressButton = () => {
  alert('botão pressionado');
}

type Props = {};
export default class App extends Component<Props> {
  
  render() {
    const {viewBackground} = Styles;
    return (
      <View style={viewBackground}>
        <Header
          containerStyle={{marginTop:- 25}}
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Card
          title='HELLO WORLD'
        >
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress={pressButton}
          />
        </Card>
        <Card
          title='HELLO WORLD'
        >
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
          />
        </Card>        
      </View>
    );
  };
};
