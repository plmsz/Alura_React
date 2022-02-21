import { Button, TextField } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form action="">
      <TextField
        id="cep"
        type="number"
        variant="outlined"
        label="CEP"
        margin="normal"
      />
      <TextField
        id="endereco"
        type="text"
        variant="outlined"
        label="Endereço"
        fullWidth
        margin="normal"
      />
       <TextField
        id="numero"
        type="number"
        variant="outlined"
        label="Número"
        margin="normal"
      />
       <TextField
        id="cidade"
        type="text"
        variant="outlined"
        label="Cidade"
        margin="normal"
      />
       <TextField
        id="estado"
        type="text"
        variant="outlined"
        label="Estado"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
    </form>
  );
}


export default DadosEntrega;
