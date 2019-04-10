import React, { Component } from 'react';
import {
  Text,
  View,
	Image,
	StyleSheet
} from 'react-native';

const Styles = StyleSheet.create({
  iconChoice: {
    alignItems: 'center',
    marginBottom: 10
  },
  txtChoice: {
    fontSize: 18
  }
});

const imgPedra = require('../../images/pedra.png');
const imgTesoura = require('../../images/tesoura.png');
const imgPapel = require('../../images/papel.png');

class IconChoiced extends Component {
	render(){
		if (this.props.choice === 'Pedra') {
		return(
			<View style={Styles.iconChoice}>
			<Text style={Styles.txtChoice}>{this.props.player}</Text>
			<Image source={imgPedra}></Image>
			</View>
		);
		} else if (this.props.choice === 'Papel') {
		return(
			<View style={Styles.iconChoice}>
			<Text style={Styles.txtChoice}>{this.props.player}</Text>
			<Image source={imgPapel}></Image>
			</View>
		);
		} else if (this.props.choice === 'Tesoura') {
		return(
			<View style={Styles.iconChoice}>
			<Text style={Styles.txtChoice}>{this.props.player}</Text>
			<Image source={imgTesoura}></Image>
			</View>
		);
		} else {
		return false;
		}
	};
};

export default IconChoiced;
