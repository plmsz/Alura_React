import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = null;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

console.log(contaCorrenteRicardo); //cpf: null


const conta2 = new ContaCorrente();
conta2.agencia = 1001;
conta2.cliente = new Cliente();
conta2.cliente.nome = "Alice";
conta2.cliente.cpf = 88822233309;

console.log(conta2);  //undefined can not set property nome
