import React, { Component } from 'react'
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableHighlight,
    ListView
} from 'react-native'
import { connect } from 'react-redux';
import _ from 'lodash';

import { 
    modificaMensagem,
    enviaMensagem,
    conversaUsuarioFetch,
    limpaMensagem
} from '../actions/AppActions';

class Conversa extends Component {

    componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail)
        this.criaFonteDeDados( this.props.conversa );
    }
    
    componentWillReceiveProps(nextProps){
        if(this.props.contatoEmail != nextProps.contatoEmail){
            this.props.conversaUsuarioFetch(nextProps.contatoEmail)
        }
        this.criaFonteDeDados(nextProps.conversa);
    }

    _enviaMensagem(){
        const {mensagem, contatoNome, contatoEmail} = this.props;

        this.props.enviaMensagem(mensagem, contatoNome, contatoEmail);
        this.props.limpaMensagem();
    }

    criaFonteDeDados( conversa ){
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2})
        this.dataSource = ds.cloneWithRows( conversa );
    }

    renderRow(texto) {
        if (texto.tipo === "envio"){
            return(
            <View style={{ alignItems: 'flex-end', marginTop: 5, marginRight: 15, marginLeft: 20, marginBottom: 5 }}>
                <Text style={{ fontSize: 18, padding: 10, color: '#000', padding: 10, backgroundColor: '#dbf5b4', elevation: 1}}>{texto.mensagem}</Text>
            </View>
            )
        } else {
            return(
                <View style={{ alignItems: 'flex-start', marginTop: 5, marginLeft: 15, marginRight: 20, marginBottom: 5 }}>
                    <Text style={{ fontSize: 18, padding: 10, color: '#000', padding: 10, backgroundColor: '#f7f7f7', elevation: 1}}>{texto.mensagem}</Text>
                </View>
                )
        }
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 10 }}>
                    <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    />
                </View>
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

const mapStateToProps = state => {
    // conversão de um objeto para um array
    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid }
    })
    return(
        {
            conversa,
            mensagem: state.AppReducer.mensagem,
        }
    )
}

export default connect(mapStateToProps, {
    modificaMensagem,
    enviaMensagem,
    conversaUsuarioFetch,
    limpaMensagem
})(Conversa);