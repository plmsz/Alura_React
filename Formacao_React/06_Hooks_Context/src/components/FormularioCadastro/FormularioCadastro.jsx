import React from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { useEffect, useState } from "react";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validacoes }) {
	const [etapaAtual, setEtapaAtual] = useState(0);
	const [dadosColetados, setDadosColetados] = useState({});

	useEffect(() => {
		if (etapaAtual === formularios.length - 1) {
			aoEnviar(dadosColetados);
		}
	});

	const formularios = [
		<DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
		<DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
		<DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
		<Typography variant="h5" align="center">
			Obrigado por se cadastrar!
		</Typography>,
	];
	const steps = ["Login", "Pessoal", "Entrega", "Finalização"];

	function coletarDados(dados) {
		setDadosColetados({ ...dadosColetados, ...dados });
		proximo();
	}

	function proximo() {
		setEtapaAtual(etapaAtual + 1);
	}

	return (
		<>
			<Stepper activeStep={etapaAtual} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			{formularios[etapaAtual]}
		</>
	);
}

export default FormularioCadastro;
