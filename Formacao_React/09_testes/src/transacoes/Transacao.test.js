import React from "react";
import Transacao from "./Transacao";
import { render } from "@testing-library/react";

xdescribe("Componente de transação do extrato", () => {
	it("O snapshot do componente deve permanecer sempre o mesmo", () => {
		const { container } = render(
			<Transacao data="01/03/2022" tipo="deposito" valor="100" />
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});

