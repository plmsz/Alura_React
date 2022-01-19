//Criando uma classe cliente para o Banco 
//classe é um molde
class Cliente {
    nome;
    cpf;
    rg
}

const cliente1 = new Cliente(); //este é um objeto, instancia da Classe Cliente
cliente1.nome = "Ricardo"
cliente1.cpf = "11122233309"
cliente1.agencia = 1001;


const cliente2 = new Cliente()
cliente2.nome = "Joana"
cliente2.cpf = "88822233309"

// console.log(cliente1)
// console.log(cliente2)

class ContaCorrente {
    agencia
    saldo = 0
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor
            return valor
        }
    }
    depositar(valor) {
        if (valor <= 0) return 

        this.saldo += valor
    }
}

const contaCorrenteRicardo = new ContaCorrente()

contaCorrenteRicardo.sacar(100)
contaCorrenteRicardo.sacar(500) //não permite
contaCorrenteRicardo.depositar(200)
contaCorrenteRicardo.depositar(-300) //não permite
 

//Método com retorno
const valorSacado = contaCorrenteRicardo.sacar(50)
console.log(valorSacado)