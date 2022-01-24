import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//Usando assessores do tipo set podemos alterar a regra de como um atributo
// pode ou não ser modificado sem precisar alterar isso em diversos pontos do código.
//Usar assessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está sempre segura

//get sempre ira te retornar um valor e não alterá-lo

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = 0; //retorna cliente undefined, pois foi feito o setter
// contaCorrenteRicardo.cliente = cliente1;

const conta2 = new ContaCorrente();
conta2.agencia = 1001;
conta2.cliente = cliente2;

console.log(contaCorrenteRicardo);
console.log(contaCorrenteRicardo.cliente);

// conta2.saldo = 3000;
// console.log(conta2.saldo); //se só tem getter não consegue atribuir um valor

// console.log(conta2); 