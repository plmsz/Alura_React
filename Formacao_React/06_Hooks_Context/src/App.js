import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core";
import '@fontsource/roboto';
import { CPFvalido, validarSenha } from "./models/cadastro"
function App() {
  return (
    <Container component="article" maxWidth="sm" align="left" >
      <Typography component="h1" variant="h3">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{ cpf: CPFvalido, senha: validarSenha }} />
    </Container>

  );
}

function aoEnviarForm(dados) {
  alert(Object.values(dados))
}

export default App;
