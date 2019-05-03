import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import { 
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO,
    LISTA_CONTATO_USUARIO,
    MODIFICA_MENSAGEM,
    ENVIA_MENSAGEM,
    LISTA_CONVERSA_USUARIO,
    LIMPA_MENSAGEM,
    LISTA_CONVERSAS_USUARIO
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
            dispatch(
                {
                    type: LISTA_CONTATO_USUARIO, 
                    payload: snapshot.val() 
                }
            )
        })
    }
}

export const conversaUsuarioFetch = contatoEmail => {

    //precisa dos dois para encontrar as mensagens trocadas
    const { currentUser } = firebase.auth()
    let usuarioEmailB64 = b64.encode( currentUser.email );
    let contatoEmailB64 = b64.encode( contatoEmail );

    return dispatch => {
        //sempre que houver uma alteração no valor desse path no firebase uma action sera ativada
        //nesse caso sera passado atravez dessa action o valor alterado no firebase
        firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
        .on('value', snapshot => {
            dispatch(
                {
                    type: LISTA_CONVERSA_USUARIO,
                    payload: snapshot.val()
                }
            )
        })
    }
}

export const modificaMensagem = texto => (
    {
        type: MODIFICA_MENSAGEM,
        payload: texto
    }
)

export const limpaMensagem = () => (
    {
        type: LIMPA_MENSAGEM
    }
)

export const enviaMensagem = (mensagem, cantatoNome, contatoEmail) => {
    //dados do usuario
    const { currentUser } = firebase.auth() //recupera dados do ussuario no firebase
    const usuarioEmail = currentUser.email;

    return(dispatch) => {

        //conversão para base 64
        const usuarioEmailB64 = b64.encode(usuarioEmail)
        const contatoEmailB64 = b64.encode(contatoEmail)

        //logica para registro de mensagens enviadas e recebidas 
        firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
        .push({ mensagem, tipo: 'envio'})
        .then(() => {
            firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
            .push({ mensagem, tipo: 'recebido'})
            .then(() => dispatch({type: ENVIA_MENSAGEM}))
        })
        .then(() => {
            //armazenar o cabeçalho de conversa do usuário autenticado
            firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}/${contatoEmailB64}`)
            .set({ nome: cantatoNome, email: contatoEmail })
        })
        .then(() => {
            //armazenar o cabeçalho de conversa do contato
            firebase.database().ref(`/contatos/${usuarioEmailB64}`)
            .once("value")
            .then( snapshot => {
                const dadosUsuario = _.first(_.values(snapshot.val()))
                firebase.database().ref(`/usuario_conversas/${contatoEmailB64}/${usuarioEmailB64}`)
                .set({ nome: dadosUsuario.nome, email: usuarioEmail })
            })
            
        })
    }
}

export const conversasUsuarioFetch = () => {
    const { currentUser } = firebase.auth()

    return dispatch => {
        let usuarioEmailB64 = b64.encode(currentUser.email);
        
        firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}`)
        .on('value', snapshot => {
            dispatch({
                type: LISTA_CONVERSAS_USUARIO,
                payload: snapshot.val()
            })
        })
    }
}