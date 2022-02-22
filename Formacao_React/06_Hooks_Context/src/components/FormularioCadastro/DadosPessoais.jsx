import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validacoes }) {
  //Regra para hooks: não posso ter, dentro de uma lógica condicional, e ele tem que estar sempre dentro de um componente do react.
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  function validarCampos(event) {
    const { name, value } = event.target;
    const ehValido = validacoes[name](value);
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="Nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="Sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        required
      />
      {/* Quando se retira o foco do elemento => onBlur */}
      <TextField
        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onChange={(event) => {
          setCpf(event.target.value.replace(/[^\d]+/g, ""));
        }}
        onBlur={validarCampos}
        required
      />
      <FormControlLabel
        control={
          <Switch
            name="Promocoes"
            color="primary"
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            name="Novidades"
            color="primary"
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
