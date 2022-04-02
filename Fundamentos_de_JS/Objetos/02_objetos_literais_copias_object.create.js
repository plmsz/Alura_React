const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = objPersonagem

objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

//acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):
let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100

const objPersona = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersona2 = Object.create(objPersona)
objPersona2.nome = "Gandalf, o Cinzento"

console.log(objPersona.nome) //Gandalf
console.log(objPersona2.nome) //Gandalf, o Cinzento