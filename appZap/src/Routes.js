import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import TelaInicial from './components/TelaInicial';
import Principal from './components/Principal';
import AdicionarContatos from './components/AdicionarContatos'

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff'}}>
        <Scene key='telaInicial' component={TelaInicial} title="Tela Inicial" hideNavBar={true}/>
        <Scene key='formLogin' component={FormLogin} hideNavBar={true}/>
        <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false}/>
        <Scene key='principal' component={Principal} title="Tela principal" hideNavBar={true}/>
        <Scene key='adicionarContatos' component={AdicionarContatos} title="Adicionar Contatos" hideNavBar={false}/>
    </Router>
);