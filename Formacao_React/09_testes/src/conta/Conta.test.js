import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Conta from './Conta';

describe('Componente de conta', () => {
	it('Exibir o saldo da conta com formatação monetária', () => {
		render(<Conta saldo={2000} />);

		const saldo = screen.getByTestId('saldo-conta');

		expect(saldo.textContent).toBe('R$ 2000');
	});

	it('Chamar a função de realizar transação, quando o botão é clicado', () => {
		const funcaoRealizarTransação = jest.fn();

		render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransação} />);

		const valor = screen.getByTestId("valor");

		const transacao = screen.getByLabelText("Depósito");

		fireEvent.click(transacao, { target: { value: "deposito" } });

		fireEvent.change(valor, { target: { value: 100 } });
		fireEvent.click(screen.getByText('Realizar operação'));

		expect(funcaoRealizarTransação).toHaveBeenCalled();
	});

	it('Não chamar a função de realizar transação, quando o botão está desabilitado ', () => {
		const funcaoRealizarTransação = jest.fn();

		render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransação} />);

		const valor = screen.getByTestId("valor");

		const transacao = screen.getByLabelText("Saque");

		fireEvent.click(transacao, { target: { value: "" } });
		fireEvent.change(valor, { target: { value: 0 } });

		fireEvent.click(screen.getByText('Realizar operação'));

		expect(funcaoRealizarTransação).toHaveBeenCalledTimes(0);
	});
});
