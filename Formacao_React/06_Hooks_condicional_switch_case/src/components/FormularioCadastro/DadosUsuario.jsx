import { Button, TextField } from "@material-ui/core";

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      aoEnviar()
    }}>
      <TextField
        id="email"
        type="email"
        variant="outlined"
        label="Email"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="password"
        type="password"
        variant="outlined"
        label="Senha"
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default DadosUsuario;
