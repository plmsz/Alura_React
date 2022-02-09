import "./index.css";
import ListaDeNotas  from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import React, { Component } from 'react';

class App extends Component {
	state = {  } 
	render() { 
		return (
			<section>
				<FormularioCadastro />
				<ListaDeNotas />
			</section>
		);
	}
}
 
export default App;

