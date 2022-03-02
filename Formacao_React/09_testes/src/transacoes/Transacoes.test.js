import React from "react";
import { render } from "@testing-library/react";
import Transacoes from "./Transacoes";

xdescribe("Componente de transação do extrato", () => {
	it("O snapshot da lista de transacoes deve ser sempre o mesmo", () => {
		const listaDeTransacoes = [
			{ id: 1, tipo: "saque", valor: "10", data: "10/08/2020" },
			{ id: 2, tipo: "deposito", valor: "20", data: "26/09/2020" },
			{ id: 3, tipo: "deposito", valor: "100", data: "01/03/2022" },
		];

		const { container } = render(<Transacoes transacoes={listaDeTransacoes} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
