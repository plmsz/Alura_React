import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia); // referencia a classe mãe
    ContaCorrente.numeroDeContas += 1;
  }
  teste() {
    super.teste(); //cgana teste na classe mãe
    console.log("teste cc");
  }

  sacar(valor) {
    let taxa = 1.1;
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
  }
}
//ContaCorrente, ela está especializando o comportamento de sacar dela.
// E a nossa ContaPoupanca, como ela não precisa especializar esse comportamento, ela só usa o que vem por padrão dela.