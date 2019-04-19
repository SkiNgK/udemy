import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import { 
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO,
    LISTA_CONTATO_USUARIO
 } from './types';


export const modificaAdicionaContatoEmail = texto => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    }
}

export const adicionaContato = email => {

    return dispatch => {
        //b64 no email obtido para verificar se o mesmo existe
        let emailB64 = b64.encode(email);

        //verifica se o usuário esta cadastrado
        firebase.database().ref(`/contatos/${emailB64}`)
        .once('value')
        .then(snapshot => {
            //se estiver cadastrado ele cadastra o contato
            if (snapshot.val()) {
                //_.values converte o objeto e um array para conseguir obter o nome do usuário
                const dadosUsuario = _.first(_.values(snapshot.val()));
                console.log(dadosUsuario)

                //pegando o email e convertendo para a base 64 por conta do caractere especial @
                const { currentUser } = firebase.auth();
                let emailUsuarioB64 = b64.encode(currentUser.email)

                //criando dados de contatos para um usuario valido e dando catch no erro
                firebase.database().ref(`/usuario_contato/${emailUsuarioB64}`)
                .push({ email, nome: dadosUsuario .nome})
                .then(()=>adicionaContatoSucesso(dispatch))
                .catch(erro => adicionaContatoErro(erro.message, dispatch))
            } else {
                dispatch(
                    { 
                        type: ADICIONA_CONTATO_ERRO, 
                        payload: 'E-mail informado não corresponde a um usuário válido!'
                    }
                )
            }
        })
    }
}

const adicionaContatoErro = (erro, dispatch) => (
    dispatch (
        {
            type: ADICIONA_CONTATO_ERRO, 
            payload: erro
        }
    )
)

const adicionaContatoSucesso = (dispatch) => (
    dispatch(
        {
            type: ADICIONA_CONTATO_SUCESSO,
            payload: true         
        }
    )
)

export const habilitaInclusaoContato = () => (
    {
        type: ADICIONA_CONTATO_SUCESSO,
        payload: false
    }
)

export const contatosUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        let emailUsuarioB64 = b64.encode( currentUser.email );
        firebase.database().ref(`/usuario_contato/${emailUsuarioB64}`)
        .on('value', snapshot => {
            // console.log(emailUsuarioB64)
            // console.log(snapshot.val())
            dispatch(
                {
                    type: LISTA_CONTATO_USUARIO, payload: snapshot.val() 
                }
            )
        })
    }
}