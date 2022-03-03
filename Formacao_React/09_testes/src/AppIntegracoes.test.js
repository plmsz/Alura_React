import React from "react";
import api from "./api";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./api");

xdescribe("Requisições para api", () => {
	it("Exibir a lista de transações através da API", async () => {
		api.listaTransacoes.mockResolvedValue([
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
//erro: Found multiple elements with the text: saque
//Here are the matching elements:
//  <p>
    //   saque
    // </p>

    // Ignored nodes: comments, <script />, <style />
    // <p>
    //   saque
    // </p>
		expect(await screen.findByText("saque")).toBeInTheDocument();
		expect(screen.getByTestId("transacoes").children.length).toBe(2);
	});
});

