import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
	Image,
	TouchableHighlight
} from 'react-native';

const btnBack = require('../imgs/btn_voltar.png')

export default class appATM extends Component {
  render() {

    if (this.props.back) {
    return (
			<View style={ [styles.navbarBox, {backgroundColor: this.props.backColor}] }>
			<TouchableHighlight 
			underlayColor={this.props.backColor}
			activeOpacity={0.7}
			onPress={() => {
				this.props.navigator.pop();
			}}>
					<Image style={ styles.btnBack} source={btnBack}/>
			</TouchableHighlight>
			</View>
			);
    }

    return (
      <View style={ styles.navbarBox }>
        <Text style={ styles.navbarTitle }>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    navbarBox: {
			backgroundColor: '#FFFF00',
			padding: 10,
			height: 60,
    },
    navbarTitle: {
			fontSize: 20,
			color: '#258357',
			fontWeight: 'bold',
			flex: 1,
			textAlign: 'center',
			padding: 6
		},
		btnBack: {
			marginBottom: 10
		}
})
