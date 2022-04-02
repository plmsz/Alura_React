//Criando objeto, acessando, adicionando e alterando
const cliente = {
	nome: "Peter Park",
	idade: 37,
	cpf: "112123232",
	email: "spidey@mail.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((info) => console.log(cliente[info]));

cliente.fone = "7598765532";

console.log(cliente);

//Removendo propriedades
//o Delete remove do objeto o valor da propriedade, assim como a chave.

const objPersonagem = {
	nome: "Gandalf",
	classe: "mago",
	nivel: "20",
	aliado: {
		nome: "Saruman",
		classe: "mago",
	},
	status: "desaparecido",
};

console.log(objPersonagem);

delete objPersonagem.nivel;
delete objPersonagem["status"];

console.log(objPersonagem);

const delProp = delete objPersonagem.aliado.classe;
const delPropInexistente = delete objPersonagem["carisma"];
console.log(delProp, delPropInexistente); //true, true

//O operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, retornará false se tentarmos fazer isso. Vamos entender melhor o tema “heranças” mais adiante no curso.

const cliente2 = {
	nome: "MJ",
	idade: 38,
	cpf: "112123237",
	email: "jones@mail.com",
	fones: ["7532195687,75986548756"],
};

cliente2.fones.forEach(fone => console.log(fone));

cliente2.dependentes = [
	{
		nome: "Benjamin Parker",
		parentesco: "filho",
		dataNascimento: "2025/06/27",
	},
	{
		nome: "Mia Jones-Parker",
		parentesco: "filha",
		dataNascimento: "2030/06/27",
	},
];
console.log(cliente2);

cliente2.dependentes[0].nome = "Benjamin Jones-Parker";
console.log(cliente2);

cliente2.dependentes.push({
	nome: "May Parker-Jones",
	parentesco: "filha",
	dataNascimento: "2027/06/12",
});

console.log(cliente2);
//Ordena os objetos em ordem decrescente pela propriedade dataNascimento
const filhoMaisNovo = cliente2.dependentes.sort((b, a) => a.dataNascimento.localeCompare(b.dataNascimento))[0];
console.log("Filho mais novo: ", filhoMaisNovo.nome);