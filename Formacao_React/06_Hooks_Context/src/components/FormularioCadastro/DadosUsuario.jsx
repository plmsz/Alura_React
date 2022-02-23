import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

function DadosUsuario({ aoEnviar, validacoes }) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

	function validarCampos(event) {
		const { name, value } = event.target;
		const novoEstado = { ...erros };
		novoEstado[name] = validacoes[name](value);
		setErros(novoEstado);
		
	}

	function possoEnviar() {
		console.log(erros)
		for (let campo in erros) {
			if (!erros[campo].valido) {
				return false;
			}
		}
		return true;
	}

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
