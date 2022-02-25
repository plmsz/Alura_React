import React from "react";
import '@fontsource/roboto';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core";
import { CPFvalido, validarSenha, validarNome } from "./models/cadastro";
import ValidacoesCadastro from './context/ValidacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm" align="left" >
      <Typography component="h1" variant="h3">Formulário de Cadastro</Typography>
      <ValidacoesCadastro.Provider value={{ cpf: CPFvalido, senha: validarSenha, nome: validarNome }}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
      {/* Poderia usar um segundo componente, que não usa o provider */}
        {/* <FormularioCadastro aoEnviar={aoEnviarForm} /> */}
    </Container>

  );
}

function aoEnviarForm(dados) {
  alert(Object.values(dados));
}

export default App;
