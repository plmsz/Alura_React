//Criando objeto, acessando, adicionando e alterando
const cliente = {
	nome: "MJ",
	idade: 38,
	cpf: "112123237",
	email: "jones@mail.com",
	fones: ["7532195687,75986548756"],
	dependentes: [
		{
			nome: "Mia Jones-Parker",
			parentesco: "filha",
			dataNascimento: "2030/06/27",
		},
		{
			nome: "May Parker-Jones",
			parentesco: "filha",
			dataNascimento: "2027/06/12",
		},
		{
			nome: "Benjamin Jones-Parker",
			parentesco: "filho",
			dataNascimento: "2025/06/27",
		},
	],
	saldo: 100,
	depositar: function (valor) {
		this.saldo += valor;
	},
};

// console.log(cliente)
console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

let relatorio = "";

for (let info in cliente) {
	if (
		typeof cliente[info] === "object" ||
		typeof cliente[info] === "function"
	) {
		continue;
	} else {
		relatorio += `${info} - ${cliente[info]} 
`;
	}
}
console.log(relatorio);

/* nome - MJ
idade - 38
cpf - 112123237
email - jones@mail.com
saldo - 100 */


function oferecerSeguro(obj) {
	const propsClientes = Object.keys(obj);
	if (propsClientes.includes("dependentes")) {
		console.log(`Oferta de seguro de vida para ${obj.nome}`);
	}
}

oferecerSeguro(cliente)

console.log(Object.values(cliente));
console.log(Object.entries(cliente)); //array com o par de chave-valor

/* [
  [ 'nome', 'MJ' ],
  [ 'idade', 38 ],
  [ 'cpf', '112123237' ],       
  [ 'email', 'jones@mail.com' ],  [ 'fones', [ '7532195687,75986548756' ] ],
  [ 'dependentes', [ [Object], [Object], [Object] ] ],
  [ 'saldo', 130 ],
  [ 'depositar', [Function: depositar] ]
] */
