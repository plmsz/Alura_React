import { Negocicacao } from './negociacao.js';

export class Negociacoes {
  private negociacoes: Negocicacao[] = [];

  adciona(negociacao: Negocicacao) {
    this.negociacoes.push(negociacao);
  }
  lista(): readonly Negocicacao[] {
    return this.negociacoes;
  }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach((n) => {});
