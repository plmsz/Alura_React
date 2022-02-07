import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia); 
    ContaCorrente.numeroDeContas += 1;
  }
//sobrescrevendo o método sacar da classe mãe
  sacar(valor) {
    let taxa = 1.1;
    //protegido: tornar sua propriedade / método visível em todas as classes que estendem a classe atual, incluindo a classe pai
    return this._sacar(valor, taxa);
  }
}
