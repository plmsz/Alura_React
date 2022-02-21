import { Button, TextField } from "@material-ui/core";
import { useState } from 'react';

function DadosUsuario({aoEnviar}) {
  const [email,setEmail] = useState("")
  const [senha, setSenha] = useState("")
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      aoEnviar({email,senha})
    }}>
      <TextField
        id="email"
        type="email"
        variant="outlined"
        label="Email"
        fullWidth
        margin="normal"
        required
        value={email}
        onChange={(event)=>{setEmail(event.target.value)}}
        />
      <TextField
        id="password"
        type="password"
        variant="outlined"
        label="Senha"
        fullWidth
        margin="normal"
        required
        value={senha}
        onChange={(event)=>{setSenha(event.target.value)}}
      />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default DadosUsuario;
