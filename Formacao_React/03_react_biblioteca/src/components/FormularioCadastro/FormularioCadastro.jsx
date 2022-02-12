import React, { Component } from "react";
import "./estilo.css";
// Usa o super pois estende o Componente do react
class FormularioCadastro extends Component {
  constructor(props){
  super(props);
  this.titulo="";
  this.texto=""
  }
  
  _handlerMudancaTitulo(evento){
    //this é dinâmico, dentro do contexto do evento ele é indefinido, o evento executa o método precisa ser associado ao this com o a própria instancia criada
    evento.stopPropagation();
    this.titulo = evento.target.value
  }
 
  _handlerMudancaTexto(evento){
    evento.stopPropagation()
    this.texto= evento.target.value
  }

  criarNota(evento){
    evento.stopPropagation();
    evento.preventDefault();
    this.props.criarNota(this.titulo, this.texto)
  }
  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handlerMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handlerMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
