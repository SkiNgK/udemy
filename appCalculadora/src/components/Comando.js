import React from 'react'
import {
    View,
    Button
} from 'react-native'


export default props => (
    <View>
        <Button 
        onPress={props.acao}
        title='Calcular'/>
    </View>
);
