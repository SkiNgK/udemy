import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions} from 'react-native-router-flux'

import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {
    componentWillMount() {
        this.props.contatosUsuarioFetch();
        //recebe os dados vazios de contatos vazios 
        //e usando esses dados para inicializar a variável fonteDeDados
        this.criaFonteDeDados(this.props.contatos);
    }

    componentWillReceiveProps(nextProps) {
        //passando os dados dos contatos para a variavel fonteDeDados
        this.criaFonteDeDados(nextProps.contatos);
    }

    //logica para instanciar o datasource
    criaFonteDeDados( contatos ){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.fonteDeDados = ds.cloneWithRows(contatos)
    }

    renderRow(contato){
        return(
            //o redux permite a passagem de parametros por actions do routerflux
            <TouchableHighlight onPress={() => Actions.conversa({ 
                title: contato.nome,
                contatoNome: contato.nome, 
                contatoEmail: contato.email})}>
                <View style={{flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC'}}>
                    <Text style={{fontSize: 25}}>
                        {contato.nome}
                    </Text>
                    <Text style={{fontSize: 18}}>
                        {contato.email}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <ListView 
            enableEmptySections
            dataSource={this.fonteDeDados}

            //a função recebe por parametro em cada uma das interações 
            //do dataSource o registro a ser renderizado
            renderRow={data => this.renderRow(data)}
            //renderRow={this.renderRow} é a mesma coisa da função de cima
            />
        )
    }
}

const mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid}
    })
    return {
        contatos
    }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);