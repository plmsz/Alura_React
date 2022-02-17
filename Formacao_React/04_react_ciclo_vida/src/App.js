import "./assets/App.css"
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import React, { Component } from 'react';
import ListaDeCategorias from './components/ListaDeCategorias';

class App extends Component {
	//app é um statefull componente, componentes que recebem informações e lidam com a gestão dessas informações 
	constructor() {
		super()
		this.state = {
			notas: [],
			categorias: ["trabalho", "casa"]
		}
	}
	criarNota(titulo, texto, categoria) {
		const novaNota = { titulo, texto, categoria }
		const novoArrayNotas = [...this.state.notas, novaNota]
		const novoEstado = {
			notas: novoArrayNotas
		}
		this.setState(novoEstado)
	}
	deletarNota(index) {
		let arrayNotas = this.state.notas;
		arrayNotas.splice(index, 1)
		this.setState({ notas: arrayNotas })
	}
	adicionarCategoria(nomeCategoria){
		const novoArrayCategoria = [...this.state.categorias, nomeCategoria]
		const novoEstado = {...this.state, categorias: novoArrayCategoria}
		this.setState(novoEstado)
	}
	render() {
		return (
			<section className="conteudo">
				<FormularioCadastro 
				categorias={this.state.categorias}
				criarNota={this.criarNota.bind(this)} />
				<main className='conteudo-principal'>
					<ListaDeCategorias categorias={this.state.categorias} adicionarCategoria={this.adicionarCategoria.bind(this)} />
					<ListaDeNotas
						notas={this.state.notas}
						apagarNota={this.deletarNota.bind(this)}
						/>
				</main>
			</section>
		);
	}
}

export default App;

