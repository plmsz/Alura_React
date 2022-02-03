import { Conta } from './Conta.js'

export class ContaSalario extends Conta {
    constructor(cliente, agencia){
        super(0,cliente, 100)
    }

  sacar(valor) {
    let taxa = 1;
    return this._sacar(valor, taxa);
  }
}