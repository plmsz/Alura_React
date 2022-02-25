import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useState, useContext } from "react";
import ValidacoesCadastro from "./../../context/ValidacoesCadastro";
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        id="email"
        type="email"
        name="email"
        variant="outlined"
        label="Email"
        fullWidth
        margin="normal"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        id="password"
        type="password"
        name="senha"
        variant="outlined"
        label="Senha"
        fullWidth
        margin="normal"
        required
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
