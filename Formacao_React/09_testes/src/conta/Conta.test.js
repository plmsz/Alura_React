import React from "react";
import { render, screen } from "@testing-library/react"
import Conta from "./Conta";

xdescribe("Componente de conta", () => {
	it("Exibir o saldo da conta com formatação monetária", () => {
		render(<Conta saldo={2000} />);

		const saldo = screen.getByTestId("saldo-conta");

		expect(saldo.textContent).toBe("R$ 2000");
	});
});
