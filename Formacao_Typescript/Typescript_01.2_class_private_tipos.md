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
  nome: string = 'TreinaWeb';
  idade: number = 12;
  estaVivo: boolean = true;
}

let pessoa = new Pessoa();
pessoa.nome = 'Paulo'; //com o modificador public podemos acessar e alterar o valor da
//propriedade nome fora da classe
```

Perceba que não há nenhuma palavra antes das propriedades, isso significa que elas irão receber o modificador “public” por padrão, ou seja, elas são públicas e podem ser acessadas e alteradas tanto dentro da classe ou fora dela, não tendo um escopo de “segurança”.

```ts
class Pessoa {
  private nome: string = 'TreinaWeb';
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
const date = new Date(this.inputData.value.replace(exp, ','));
```

# Tipagem

Deve-se colocar o tipo em:

- Parâmetro de método
- parâmetro de constructor
- retorno de método
- propriedades de classe

# Spread para retornar copia

```ts
lista(): Array<Negocicacao> {
    return[...this.negociacoes];
  }
```

# Array que não pode ser modificado (somente leitura)

```ts
lista(): ReadonlyArray<Negocicacao> {
    return[...this.negociacoes];
  }
```

# Delcaração no próprio construtor

```ts
export class Negocicacao {
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}

  get data(): Date {
    return this._data;
  }
  get quantidade(): number {
    return this._quantidade;
  }
  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }
}
```

# Arrays e Generics - outra forma de escrever:

```ts
 lista(): readonly Negocicacao[] {
    return this.negociacoes;
  }
```

# public readonly

Private só pode ser acessado dentro da instancia da própria classe.
Public readonly é acessível fora da classe, mas não pode receber um atribuição, não pelo menos de forma direta com =

```ts
export class Negocicacao {
  constructor(
    public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }
}
```

Data ainda pode ser mudada ex:

```ts
const negociacao = this.criaNegociacao();
negociacao.data.setDate(12);
```

Solução:

Quando tentamos acessar a propriedade _data fazemos isso com o get data() já que a propriedade é privada e não pode ser acessada diretamente. Então, como uma forma de proteger nossa propriedade criamos uma cópia idêntica dela mas com uma nova referência, sem ser uma referência para _data. Ao fazermos qualquer modificação na data, na verdade estaremos alterando a cópia dela que criamos e não a data que estamos guardando.

O uso do this._data.getTime() apenas ajuda na criação dessa nossa cópia, gerando uma data idêntica a que estamos guardando só que com uma nova referência. Então qualquer modificação feita com o set _data() não vai alterar a nossa propriedade _data, e sim a cópia dela, usando o getTime() pois, ele garante que o valor passado para o new Date() seja um valor numérico e é bem utilizado para esses casos de duplicação de datas.