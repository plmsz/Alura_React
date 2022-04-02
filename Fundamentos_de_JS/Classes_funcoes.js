//Objeto 
const Libro = {
    nome: "React Native",
    editora: "Casa do Código",
    paginas: 185,
    anunciar: function () {
        console.log(`A alura indica o livro ${this.nome}!`);
    }
};

Libro.anunciar();

//Função

const Book = function (nome, editora, paginas) {
    gNome = nome,
        gEditora = editora,
        gPaginas = paginas;

    this.getNome = function () {
        return gNome;
    };
    this.getEditora = function () {
        return gEditora;
    };
    this.getPaginas = function () {
        return gPaginas;
    };
};

const GraphQL = new Book("GraphQL", "Casa do Código", 143);

console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());

//Como o javscript cria uma string por debaixo dos panos? 
/* const nome = "Alura";

const temp = new String(nome)
// console.log(temp); [String: 'Alura']
console.log(temp.toString()); */

//Classe

class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome;
        this.paginas = paginas;
        this.editora = editora;
    }

    anunciarTitulo() {
        console.log(`Título: ${this.nome}`);
    }
    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`);
    }

};

const nodeJS = new Livro("Primeiros passo com NodeJS", "Casa do Código", 195);
nodeJS.anunciarTitulo();
nodeJS.descreverTitulo();

//classes não içadas (hoisting), não dar par chamar a classe antes de declarar diferente de função

class LivroColecao extends Livro {
    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }
    descreverColecao(){
        console.log(`${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const lp = new LivroColecao("Lógica de Progrmação", "Primeiros Passos")

lp.anunciarTitulo()
lp.descreverColecao()