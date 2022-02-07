import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309, "5432");

// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// contaCorrenteRicardo.depositar(500);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
// contaPoupanca.sacar(10)
// const conta = new ContaSalario(cliente1)
// conta.depositar(100)
// conta.sacar(50)

const diretor = new Diretor("Rita", 10000, 12345678900);
diretor.cadastrarSenha("4532");

const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("1234")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "4532");
const geretenEstaLogado = SistemaAutenticacao.login(gerente, "1234")
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "5432")

console.log(diretorEstaLogado, geretenEstaLogado)
console.log(clienteEstaLogado);