import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core";
import '@fontsource/roboto';
import { validarCPF } from './components/helpers/validarCPF';

function App() {
  return (
    <Container component="article" maxWidth="sm" align="left" >
      <Typography component="h1" variant="h3">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={CPFvalido}/>
    </Container>

  );
}

function aoEnviarForm(dados) {
  alert(Object.values(dados))
}

function CPFvalido(cpf) {
  if (cpf.length !== 11) {
    return { cpf: { valido: false, texto: "CPF deve ter 11 dígitos" } }
  }else if(!validarCPF(cpf)){
    return { cpf: { valido: false, texto: "CPF inválido" } }
  }else{
    return { cpf: { valido: true, texto: "" } }
  }

}

export default App;
