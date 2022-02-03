export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deve instanciar um objeto tipo Conta, pois essa é uma classe abstrata."
      );
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }
  // temos o método abstrato, que se alguma classe filha da classe Conta esquecer de sobrescrever esse método, na hora que for chamado ele vai receber um erro
  //Métodos Abstratos servem para que sempre que uma classe filha herde de uma classe pai, ela seja obrigada a sobrescrever o método original da classe pai.
  sacar(valor) {
    throw new Error("O método sacar da conta abstrato");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
