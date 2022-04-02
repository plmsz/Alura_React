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
