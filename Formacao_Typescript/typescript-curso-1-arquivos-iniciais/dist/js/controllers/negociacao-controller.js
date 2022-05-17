export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputData = document.querySelector('#quantidade');
        this.inputData = document.querySelector('#valor');
    }
    adciona() {
        console.log(this.inputData, this.inputQuantidade, this.inputValor);
    }
}
