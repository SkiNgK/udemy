import React, {Component} from 'react';
import { View } from 'react-native';
import { Topo, Resultado, Painel } from './components';

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {num1: '10', num2: '12', operacao: 'soma', resultado: ''};

		//mater a função calcular dentro do contexto Painel
		this.calcular = this.calcular.bind(this); 
		this.atualizaValor = this.atualizaValor.bind(this);
		this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  //o estado so se preserva na função caso tenha amarrado ela com bind no contexto desse componente
	calcular(){
		let resultado = 0;
		switch (this.state.operacao) {
			case 'soma':
				resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
			break;
			case 'subtracao':
				resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
			break;
			default:
				resultado = 0;
    }
    this.setState({ resultado: resultado.toString() })
	}

	atualizaValor(nomeCampo, numero){
		const obj = {};
		obj[nomeCampo] = numero
		this.setState(obj)
		console.log(obj)
	}

	atualizaOperacao(operacao){
		this.setState({operacao})
		console.log(operacao)
  }
  
  render(){
    return(
      <View>
        <Topo></Topo>
        <Resultado 
          resultado={this.state.resultado}></Resultado>
        <Painel 
          num1={this.state.num1} 
          num2={this.state.num2} 
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaOperacao={this.atualizaOperacao}
          atualizaValor={this.atualizaValor}
        ></Painel>
      </View>
    );
  }
};