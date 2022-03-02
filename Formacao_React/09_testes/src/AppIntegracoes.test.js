import api from "./api";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./api");

describe("Requisições para api", () => {
	it("Exibir a lista de transações através da API", () => {
		api.listaTransacoes.mockResolvedValie([
			{
				transacao: "saque",
				valor: "100",
				data: "02/03/2022",
				id: 1,
			},
			{
				transacao: "saque",
				valor: "100",
				data: "02/03/2022",
				id: 2,
			},
		]);

		render(<App />);

		expect(screen.getByTestId("transacoes").children.length).toBe(2);
	});
});
