import React, { Component } from "react";
import "./estilo.css";
// Usa o super pois estende o Componente do react
class FormularioCadastro extends Component {
  constructor(){
  super();
  this.titulo="";
  }
  
  handlerMudancaTitulo(evento){
    //this é dinâmico, dentro do contexto do evento ele é indefinido, o evento executa o método precisa ser associado ao this com o a própria instancia criada
    this.titulo = evento.target.value
    console.log(this.titulo)
  }
 
  render() {
    return (
      <form className="form-cadastro ">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handlerMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
