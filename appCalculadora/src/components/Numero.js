import React from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

export default props => (
    <TextInput 
    style={styles.numero}
    value={props.num}
    onChangeText={valorDoCampo => props.atualizaValor(props.nome, valorDoCampo)}
    >
    </TextInput> 
);

const styles = StyleSheet.create({
    numero: {
        height: 80,
        width: 140,
        fontSize: 20
    }
});