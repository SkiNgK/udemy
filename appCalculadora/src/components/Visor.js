import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native'

export default props => (
    <View>
        <TextInput 
        placeholder='Resultado'
        editable={false}
        value={props.resultado}
        style={styles.visor}
        />
    </View>
);

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30
    }
});