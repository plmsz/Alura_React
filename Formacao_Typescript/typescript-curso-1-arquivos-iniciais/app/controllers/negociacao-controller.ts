import { Negocicacao } from "../models/negociacao.js";
import { Negociacoes } from '../models/negociacoes.js';

export class NegociacaoController {
	private inputData: HTMLInputElement;
	private inputQuantidade: HTMLInputElement;
	private inputValor: HTMLInputElement;
	private negociacoes = new Negociacoes();

	constructor() {
		this.inputData = document.querySelector("#data");
		this.inputQuantidade = document.querySelector("#quantidade");
		this.inputValor = document.querySelector("#valor");
	}

	adciona(): void {
		const negociacao = this.criaNegociacao();
		// negociacao.data.setDate(23) //não irá funcionar pois a data é apenas uma cópia
		this.negociacoes.adciona(negociacao)
		console.log(this.negociacoes.lista())
		this.limparFormulario();
	}

	criaNegociacao(): Negocicacao {
		const exp = /-/g;
		const date = new Date(this.inputData.value.replace(exp, ","));
		const quantidade = parseInt(this.inputQuantidade.value);
		const valor = parseFloat(this.inputValor.value);

		return new Negocicacao(date, quantidade, valor);
	}

	limparFormulario(): void {
		this.inputData.value = "";
		this.inputQuantidade.value = "";
		this.inputValor.value = "";
		
		this.inputData.focus()
	}
}
