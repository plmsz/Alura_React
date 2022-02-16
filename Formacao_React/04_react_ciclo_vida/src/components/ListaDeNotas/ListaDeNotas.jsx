import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  //para apenas passar propriedades não precisa de construtor
  /*  constructor(props){
    super(props)
  } */
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                index={index}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
                apagarNota={this.props.apagarNota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
