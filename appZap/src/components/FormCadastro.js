import React, {Component} from 'react';
import { 
    View, 
    TextInput, 
    Button, 
    Image,
    Text,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastraUsuario,
    cadastraUsuarioErro
} from '../actions/AutenticacaoActions';

class formCadastro extends Component{

    //função interna começando com _ pra diferenciar das actions
    _cadastraUsuario(){
        // const nome = this.props.nome;
        // const email = this.props.email;
        // const senha = this.props.senha;
        //comportamento é o mesmo do bloco comentado acima
        const {nome, email, senha} = this.props;

        this.props.cadastraUsuario({ nome, email, senha});
        // alert(this.props.cadastroErro)
        // alert('teste');
    }

    renderBtnCadastro(){
        if (this.props.loadingCadastro) {
            return(
                <ActivityIndicator size="large"/>
            )
        }
        return(
            <Button 
            title="Cadastrar" 
            color="#115E54"
            onPress={() => this._cadastraUsuario()} 
            />
        )
    }


    render(){
        return(
            <Image style={{ flex: 1, width: null}} source={require('../imgs/bg.png')}>    
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput 
                            value={this.props.nome} 
                            placeholder="Nome"
                            placeholderTextColor="#fff"
                            style={{ fontSize: 20, height: 45 }}
                            onChangeText={texto => this.props.modificaNome(texto)}
                        />
                        <TextInput 
                            value={this.props.email} 
                            placeholder="E-mail"
                            placeholderTextColor="#fff"
                            style={{ fontSize: 20, height: 45 }}
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput 
                            value={this.props.senha} 
                            placeholder="Senha"
                            placeholderTextColor="#fff"
                            style={{ fontSize: 20, height: 45 }}
                            onChangeText={texto => this.props.modificaSenha(texto)}
                            secureTextEntry
                        />
                        <Text style={{ color: '#ff0000', fontSize: 20 }}>
                        {this.props.cadastroErro}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderBtnCadastro()}
                    </View>
                </View> 
            </Image>
        );
    }
}

//mapear estados vindo do reducer
const mapStateToProps = state => {
    console.log(state)
    return(
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha,
            cadastroErro: state.AutenticacaoReducer.cadastroErro,
            loadingCadastro: state.AutenticacaoReducer.loadingCadastro
        }
    )
}

export default connect(mapStateToProps, {
    modificaEmail, 
    modificaSenha, 
    modificaNome,
    cadastraUsuario,
    cadastraUsuarioErro
})(formCadastro);