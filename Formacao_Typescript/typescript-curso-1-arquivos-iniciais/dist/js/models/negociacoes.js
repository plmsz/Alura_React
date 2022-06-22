export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach((n) => { });
