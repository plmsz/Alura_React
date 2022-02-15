import "./assets/App.css"
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super()
		//State mudado ele chama o render
		this.state = {
			notas: []
		}
	}
	criarNota(titulo, texto) {
		const novaNota = { titulo, texto }
		const novoArrayNotas = [...this.state.notas, novaNota]
		const novoEstado = {
			notas: novoArrayNotas
		}
		this.setState(novoEstado)
	}
	deletarNota(index) {
		let arrayNotas = this.state.notas;
		arrayNotas.splice(index,1)
		this.setState({notas:arrayNotas})
	}
	render() {
		return (
			<section className="conteudo">
				<FormularioCadastro criarNota={this.criarNota.bind(this)} />
				<ListaDeNotas
					notas={this.state.notas}
					apagarNota={this.deletarNota.bind(this)} />
			</section>
		);
	}
}

export default App;

