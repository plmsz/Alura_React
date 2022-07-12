import React from "react";
import { Botao } from "./Botão";

export class Formulario extends React.Component {

	render(): React.ReactNode {
		return (
			<form>
				<label htmlFor="tarefa">
					<input
						type="text"
						name="tarefa"
						id="tarefa"
						placeholder="O que você quer estudar"
						required
					/>
				</label>
				<label htmlFor="time">
					<input
						type="time"
						step="1"
						name="time"
						id="time"
						min="00:00:00"
						max="01:30:00"
						required
					/>
				</label>
				<Botao />
			</form>
		);
	}
}
