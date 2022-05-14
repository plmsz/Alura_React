import { valida } from "./validacao.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    console.log(input);
	if (input.dataset.tipo === "preco") {
		const args = {
			prefix: "R$",
			fixed: true,
			fractionDigits: 2,
			decimalSeparator: ",",
			thousandsSeparator: ".",
			cursor: "end",
		};
		SimpleMaskMoney.setMask(input, args);
	}
	input.addEventListener("blur", (evento) => {
		valida(evento.target);
	});
});
