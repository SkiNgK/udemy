import React from 'react';
import {
  Router,
  Scene
} from 'react-native-router-flux';
import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';

const Routes = () => (
	<Router sceneStyle={{ paddingTop: 50 }}>
		<Scene key='principal' component={Principal} initial title='Cara ou Coroa'/>
		<Scene key='sobrejogo'component={SobreJogo} title='Sobre o jogo'/>
		<Scene key='outrosjogos' component={OutrosJogos} title='Outros jogos'/>
		<Scene key='resultado' component={Resultado} title='Resultado'/>
	</Router>
);

export default Routes;