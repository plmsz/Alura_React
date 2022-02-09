import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";

class ListaDeNotas extends Component {
	render() {
		return (
			<ul>
				{Array.of("Trabalho", "Estudos", "Casa").map((categoria, index) => {
					return (
						<li key={index}>
							<p>{categoria}</p>
							<CardNota />
						</li>
					);
				})}
			</ul>
		);
	}
}

export default ListaDeNotas;
