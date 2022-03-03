import React, { useEffect, useState } from "react";

import Conta from "./conta/Conta";
import Transacoes from "./transacoes/Transacoes";
import api from "./api";

import "./App.css";

export const calcularNovoSaldo = (valores, saldo) => {
	if (valores.transacao === "deposito") {
		return saldo + parseInt(valores.valor);
	} else {
		return saldo - parseInt(valores.valor);
	}
};

function App() {
	const [saldo, atualizarSaldo] = useState(1000);
	const [transacoes, atualizarTransacoes] = useState([]);
	const [erro, setErro] = useState(false);

	async function carregarTransacoes() {
		const transacoes = await api.listaTransacoes();
		atualizarTransacoes(transacoes);
	}

	async function obterSaldo() {
		atualizarSaldo(await api.buscaSaldo());
	}

	async function realizarTransacao(valores) {
		const novoSaldo = await calcularNovoSaldo(valores, saldo);
console.log(novoSaldo)
		if (novoSaldo < 0) {
			setErro(true);
			return;
		}

		api.atualizaSaldo(novoSaldo).catch((error) => console.error(error));
		api.atualizaTransacoes(valores).catch((error) => console.error(error));

		atualizarSaldo(novoSaldo);
		atualizarTransacoes([valores]);
	}

	useEffect(() => {
		obterSaldo();
		carregarTransacoes();
		setErro(false);
	}, [saldo]);

	return (
		<div className="App">
			<header className="App-header">
				<h1>ByteBank</h1>
			</header>

			<Conta saldo={saldo} realizarTransacao={realizarTransacao} />
			<Transacoes transacoes={transacoes} />
			{erro && <span>Não foi possível realiza a operação</span>}
		</div>
	);
}

export default App;
