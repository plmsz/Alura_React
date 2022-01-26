import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; //convenções atuais, ele não deve ser alterado fora da classe, mas o JS não impede de usa-lo

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

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
    }
    
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
    //composição de classes (conta é um objeto da classe ContaCorrente)
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        valor = 20; //parametro valor é uma cópia, logo valor no index não será alterado
        // conta.cidade = "Salvador" CUIDADO, irá alterá, pois conta é um tipo de referência
    }
}
