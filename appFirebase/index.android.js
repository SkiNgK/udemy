import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class appFirebase extends Component {
  // constructor(props){
  //   super(props);

  //   this.state = {pontuacao: 0}
  // }

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyDBQ-fuJdsrBPe9BoZhx6iJeBOQ0DD7Rlw",
      authDomain: "configuracaofirebasereac-759a0.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-759a0.firebaseio.com",
      projectId: "configuracaofirebasereac-759a0",
      storageBucket: "configuracaofirebasereac-759a0.appspot.com",
      messagingSenderId: "145473292609"
    };
    firebase.initializeApp(config);
  }

  // salvarDados(){
  //   var funcionarios = firebase.database().ref("funcionarios");
  //   funcionarios.push().set(
  //     {
  //       nome: "Flávio",
  //       altura: "1.85",
  //       peso: "79KG"
  //     }
  //   )
  // }

  // listarDados(){
  //   var pontuacao = firebase.database().ref("pontuacao");
  //   pontuacao.on('value', snapshot => {
  //     var pontos = snapshot.val();
  //     this.setState({pontuacao: pontos});
  //   });
  // }

  cadastrarUsuario(){
    var email = "flavio@gmail.com"
    var senha = "flavio123"

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email, senha
    ).catch(
      erro => {
        alert(erro.message);
      }
    );
  }

  verificarUsuarioLogado(){
    const usuario = firebase.auth();
    usuario.onAuthStateChanged(usuarioAtual => {
        if (usuarioAtual) {
          alert("usuário logado")
        } else {
          alert("usuário não está logado")
        }
      }
    );
    // const usuarioAtual = usuario.currentUser;
  }

  deslogarUsuario(){
    const usuario = firebase.auth()
    usuario.signOut();
  }

  logarUsuario(){
    const usuario = firebase.auth()

    var email = "flavio@gmail.com"
    var senha = "flavio124"

    usuario.signInWithEmailAndPassword(email, senha)
    .catch(
      erro => {
        alert(erro.message);
      }
    )
  }

  render() {
    // let {pontuacao} = this.state;
    return (
      <View>
        <Text>Firebase Teste</Text>
        <View style={styles.button}>
          <Button
            onPress={() => this.cadastrarUsuario()}
            title="Cadastrar usuário"
            accessibilityLabel="Cadastrar usuário"
            color="#841584"
            style={styles.button}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.verificarUsuarioLogado()}
            title="Veridicar usuário logado"
            accessibilityLabel="Veridicar usuário logado"
            color="#841584"
            style={styles.button}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.deslogarUsuario()}
            title="Deslogar usuário"
            accessibilityLabel="Deslogar usuário"
            color="#841584"
            style={styles.button}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.logarUsuario()}
            title="Logar usuário"
            accessibilityLabel="Logar usuário"
            color="#841584"
            style={styles.button}
          />
        </View>
        {/* <Text>{pontuacao}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    
  }
})

AppRegistry.registerComponent('appFirebase', () => appFirebase);
