//Criando uma classe cliente para o Banco 
//classe é um molde
class Cliente {
    nome;
    cpf;
    rg
}
//quando estamos dentro da classe as variaveis se tornam atributos

const cliente1 = new Cliente(); //este é um objeto, instancia da Classe Cliente
cliente1.nome = "Ricardo"
cliente1.cpf = "11122233309"
cliente1.agencia = 1001;


const cliente2 = new Cliente()
cliente2.nome = "Joana"
cliente2.cpf = "88822233309"

// console.log(cliente1)
// console.log(cliente2)

//peração de saque encapsulada dentro de um método/função, ao qual atribuímos o nome sacar()
// # para colocar como privado, ainda em implementação
class ContaCorrente {
    agencia
    #saldo = 0
    // _saldo = 0  //uma convenção é usar underline, mas não é realmente privado
    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor
            console.log(this.#saldo) //aperece apenas dentro da classe
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
            console.log(this.#saldo) //aperece apenas dentro da classe
        }
    }
}

const contaCorrenteRicardo = new ContaCorrente()
// contaCorrenteRicardo.#saldo = 150 //Private field '#saldo' must be declared in an enclosing class 

contaCorrenteRicardo.sacar(50)
contaCorrenteRicardo.sacar(500) //não permite
contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(-300) //não permite

// console.log(contaCorrenteRicardo.#saldo)  

