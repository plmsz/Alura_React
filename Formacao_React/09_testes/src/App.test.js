import React from "react";
import App, { calcularNovoSaldo } from "./App.js";
import { fireEvent, render, screen } from "@testing-library/react";

xdescribe("Componente principal", () => {
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
xdescribe("Quando eu realizo uma transação", () => {
	it("que é um saque, o valor irá diminuir", () => {
		const valores = {
			transacao: "saque",
			valor: 100,
		};
		const novoSaldo = calcularNovoSaldo(valores, 150);
		expect(novoSaldo).toBe(50);
	});

	it("que é um saque, a transação é realizada", () => {
		render(<App />);

		const saldo = screen.getByTestId("saldo-conta");
		const transacao = screen.getByLabelText("Saque");
		const valor = screen.getByTestId("valor");
		const botaoTransacao = screen.getByText("Realizar operação");

		expect(saldo.textContent).toBe("R$ 1000");

		fireEvent.click(transacao, { target: { value: "saque" } });
		fireEvent.change(valor, { target: { value: 100 } });
		fireEvent.click(botaoTransacao);

		expect(saldo.textContent).toBe("R$ 900");
	});
	
	/* it("que é um saque, a transação é realizada", () => {
		const { getByText, getByTestId, getByLabelText } = render(<App />);

		const saldo = getByTestId("saldo-conta");
		const transacao = getByLabelText("Saque");
		const valor = getByTestId("valor");
		const botaoTransacao = getByText("Realizar operação");

		expect(saldo.textContent).toBe("R$ 1000");

		fireEvent.click(transacao, { target: { value: "saque" } });
		fireEvent.change(valor, { target: { value: 100 } });
		fireEvent.click(botaoTransacao);

		expect(saldo.textContent).toBe("R$ 900");
	}); */

	//Acrescentei a lógica de ultrapassar um valor no app
	it("que é um saque com um valor maior que o saldo da conta", () => {
		const { getByText, getByTestId, getByLabelText } = render(<App />)

		const saldo = getByTestId("saldo-conta");
		const transacao = getByLabelText("Saque");
		const valor = getByTestId("valor");
		const botaoTransacao = getByText("Realizar operação");

		fireEvent.click(transacao, { target: { value: "saque" } });
		fireEvent.change(valor, { target: { value: 1500 } });
		fireEvent.click(botaoTransacao);


		expect(saldo.textContent).toBe("R$ 1000");
		// expect(
		// 	screen.getByText("Não foi possível realiza a operação")
		// ).toBeInTheDocument();
	});
});
