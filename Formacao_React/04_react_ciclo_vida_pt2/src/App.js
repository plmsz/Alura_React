import "./assets/App.css"
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import React, { Component } from 'react';
import ListaDeCategorias from './components/ListaDeCategorias';
import Categorias from "./data/Categorias";
import ArrayDeNotas from "./data/Notas";

class App extends Component {

	constructor() {
		super()
		this.categorias = new Categorias();
		this.notas = new ArrayDeNotas()
	}
	
	render() {
		return (
			<section className="conteudo">
				<FormularioCadastro 
				categorias={this.categorias.categorias}
				criarNota={this.notas.adicionarNota} />
				<main className='conteudo-principal'>
					 <ListaDeCategorias 
					categorias={this.categorias.categorias} adicionarCategoria={this.categorias.adicionarCategoria} /> 
					<ListaDeNotas
						notas={this.notas.notas}
						apagarNota={this.notas.apagarNota}
						/>
				</main>
			</section>
		);
	}
}

export default App;

