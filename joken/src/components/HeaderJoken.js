import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

const jokenImg = require('../../images/jokenpo.png')

class HeaderJoken extends Component{
  render(){
    return(
      <View>
        <Image source={jokenImg}/>
      </View>
    );
  };
};

export default HeaderJoken;
