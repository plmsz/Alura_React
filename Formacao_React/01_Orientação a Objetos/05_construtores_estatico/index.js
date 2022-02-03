import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",11122233309);
// cliente1.cpf = -1; // cannot set proprierty cdp, has only one getter

const cliente2 = new Cliente("Alice", 88822233309);
// console.log(cliente2.cpf);

const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);

const conta2 = new ContaCorrente(1001,cliente2);


console.log(contaCorrenteRicardo);
console.log(conta2);
