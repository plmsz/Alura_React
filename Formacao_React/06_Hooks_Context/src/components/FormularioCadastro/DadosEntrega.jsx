import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({cep, endereco, numero, estado, cidade});
      }}
    >
      <TextField
        id="cep"
        type="number"
        variant="outlined"
        label="CEP"
        margin="normal"
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
      />
      <TextField
        id="endereco"
        type="text"
        variant="outlined"
        label="Endereço"
        fullWidth
        margin="normal"
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      />
      <TextField
        id="numero"
        type="number"
        variant="outlined"
        label="Número"
        margin="normal"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      />
      <TextField
        id="cidade"
        type="text"
        variant="outlined"
        label="Cidade"
        margin="normal"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
      />
      <TextField
        id="estado"
        type="text"
        variant="outlined"
        label="Estado"
        margin="normal"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
