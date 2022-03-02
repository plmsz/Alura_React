import React from "react";
import App, { calcularNovoSaldo } from "./App.js";
import { render, screen } from "@testing-library/react";

describe("Componente principal", () => {
	describe("Quando abro o app do banco,", () => {
		test("o nome é exibido", () => {
			render(<App />);
			expect(screen.getByText("ByteBank")).toBeInTheDocument();
		});
		it("o saldo é exibido", () => {
			render(<App />);
			expect(screen.getByText("Saldo:")).toBeInTheDocument();
		});
		it("o botão de é exibido de realizar transação é exibido", () => {
			render(<App />);
			expect(screen.getByText("Realizar operação")).toBeInTheDocument();
		});
	});
});
describe("Quando eu realizo uma transação", () => {
	it("que é um saque, o valor irá diminuir", () => {
		const valores = {
			transacao: "saque",
			valor: 100,
		};
		const novoSaldo = calcularNovoSaldo(valores, 150);
		expect(novoSaldo).toBe(50);
	});
});
