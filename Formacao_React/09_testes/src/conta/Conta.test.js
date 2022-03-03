import React from "react";
import { render, screen, fireEvent} from "@testing-library/react"
import Conta from "./Conta";

xdescribe("Componente de conta", () => {
	xit("Exibir o saldo da conta com formatação monetária", () => {
		render(<Conta saldo={2000} />);

		const saldo = screen.getByTestId("saldo-conta");

		expect(saldo.textContent).toBe("R$ 2000");
	});
	//Modificar para que o botão fica desabilitado, not.toHaveBeenCalled()
	it("Chamar a função de realizar transação, quando o botão é clicado", () => {
		const funcaoRealizarTransacao = jest.fn();

		render(<Conta saldo={1000} realizaraTransacao={funcaoRealizarTransacao} />);

		fireEvent.click(screen.getByText("Realizar operação"));

		expect(funcaoRealizarTransacao).toHaveBeenCalled();
	});
});

