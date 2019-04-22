import React, { Component } from 'react'
import {
    View,
    TextInput,
    Image,
    TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux';

import { 
    modificaMensagem,
    enviaMensagem
} from '../actions/AppActions';

class Conversa extends Component {

    _enviaMensagem(){
        const {mensagem, contatoNome, contatoEmail} = this.props;

        this.props.enviaMensagem(mensagem, contatoNome, contatoEmail);
    }

    render() {
        console.log(this.props)
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 100 }}></View>
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput 
                    style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }}
                    onChangeText={(texto) => this.props.modificaMensagem(texto) }
                    value={this.props.mensagem}
                    />
                    <TouchableHighlight
                    // .bind para ajustar o contexto de execução da função
                    onPress={this._enviaMensagem.bind(this)}
                    underlayColor='#fff'
                    >
                        <Image source={require('../imgs/enviar_mensagem.png')}/>
                    </TouchableHighlight>
                </View>    
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        mensagem: state.AppReducer.mensagem,
    }
)

export default connect(mapStateToProps, {
    modificaMensagem,
    enviaMensagem
})(Conversa);