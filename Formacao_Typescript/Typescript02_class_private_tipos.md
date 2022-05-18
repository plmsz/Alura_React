import { Negocicacao } from './models/negociacao.js';

```ts
const negociacao = new Negocicacao(new Date(1, 1, 2022), 1, 100);
console.log(negociacao.volume);

export class Negocicacao {
	private _data;
	private _quantidade;
	private _valor;

	constructor(data, quantidade, valor) {
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;
	}

	get data() {
		return this._data;
	}
	get quantidade() {
		return this._quantidade;
	}
	get valor() {
		return this._valor;
	}

	get volume() {
		return this._quantidade * this._valor;
	}
}
```

# Modificador de acesso

```ts
class Pessoa {
	nome: string = "TreinaWeb";
	idade: number = 12;
	estaVivo: boolean = true;
}

let pessoa = new Pessoa();
pessoa.nome = "Paulo"; //com o modificador public podemos acessar e alterar o valor da
//propriedade nome fora da classe
```

Perceba que não há nenhuma palavra antes das propriedades, isso significa que elas irão receber o modificador “public” por padrão, ou seja, elas são públicas e podem ser acessadas e alteradas tanto dentro da classe ou fora dela, não tendo um escopo de “segurança”.

```ts
class Pessoa {
	private nome: string = "TreinaWeb";
	idade: number = 12;
	estaVivo: boolean = true;
}
```

let pessoa = new Pessoa();
pessoa.nome = "Paulo"; //Utilizando private não podemos mais acessar desta forma

https://www.treinaweb.com.br/blog/modificadores-de-acesso-no-typescript

---

# Conversão Data

```ts
const date = new Date(this.inputData.value.replace(exp, ","));
```

# Tipagem

Deve-se colocar o tipo em:
- Parâmetro de método 
- parâmetro de constructor 
- retorno de método 
- propriedades de classe

