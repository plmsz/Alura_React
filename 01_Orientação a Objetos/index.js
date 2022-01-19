//Criando uma classe cliente para o Banco 
//classe é um molde
class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg
}

const cliente1 = new Cliente(); //este é um objeto, instancia da Classe Cliente
cliente1.nome = "Ricardo"
cliente1.cpf = "11122233309"
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = "123456789"

const cliente2 = new Cliente();
cliente2.nome = "Joana"
cliente2.cpf = "88822233309"
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2)