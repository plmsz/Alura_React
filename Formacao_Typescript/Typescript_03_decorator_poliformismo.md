# Tempo de execução

```ts
const t1 = performance.now();
//    executa algo
const t2 = performance.now();
console.log(`Tempo de execução - método do update ${(t2 - t1) / 1000}`);
```

# tsconfig.json

```ts
{
    {
    "compilerOptions": {
        "outDir": "app/dist/js",
        "target": "ES6",
        "noEmitOnError": true,
        "noImplicitAny": true,
        "removeComments": true,
        "strictNullChecks": true,
        "experimentalDecorators": true
    },
    "include": ["app/src/**/*"]
}
```

# Decorator de método e requisitos não funcionais

- target pode ser se o meu decorator está em cima de um método estático de uma classe, pode ser uma função conjuntora e se estiver no método que não é estático, ele vai ser o prototype. em outras palavras: coloca esse cara em uma propriedade estática de uma classe, esse cara vai te retornar uma função construtora dessa classe. Se eu coloco esse meu decorator em uma propriedade que não é estática, como uma de negociacao-controller, ele vai me retornar o prototype dessa classe.
- propertyKey - me dá o nome do método como string que foi decorado.- - - - - descriptor -, ele sabe tudo sobre o método que queremos executar, que queremos modificar, ele tem uma referência para o método original.

No método:

```ts
 @logarTempoDeExecucao()
  public adiciona(): void {
//    ...
  }

```

## Template para decorator

```ts
export function inspect() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const retorno = metodoOriginal.apply(this, args);
      return retorno;
    };
    return descriptor;
  };
}
```

Na pasta/arquivo de decorator:

```ts
export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      let divisor = 1;
      let unidade = 'milissegundos';
      if (emSegundos) {
        divisor = 1000;
        unidade = 'segundos';
      }
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();

      console.log(
        `${propertyKey} - Tempo de execução  ${(t2 - t1) / divisor} ${unidade};`
      );
      retorno;
    };
    return descriptor;
  };
}
```

O metodoOriginal é o espaço de memória onde será armazenada as linhas de código por trás do método que você aplicar esse decorator\*.

Precisa armazenar essa informação, porque no momento seguinte é digitado o comando:

descriptor.value = function(...args: Array<any>) {

que altera a informação original do método passado.

Uma vez que, nessa aula, não se pretente perder essas informações, mas sim acrescentar os códigos que calculam a perfomance nos métodos que vão ser aplicados.

Quanto ao function(...args: Array<any>), é a criação de uma função, da forma padrão permitida pelo Javascript, fazendo a propriedade value do objeto descriptor receber essa função inteira, mas como dito antes, não se quer perder nenhuma informação de qualquer que seja o método que foi aplicado esse decorator , nem mesmo os parâmetros que esse método possuí, por isso é usada outra sintace do Javascript, chamada "Spread Operator", que é os três pontinho atrás de um vetor "...args", usada para despejar todo o conteúdo que tem por trás desse vetor, nesse caso foi muito útil usar essa sintace, porque não é fixo a quantidade de parâmetros usados nas funções que que será aplicado o decorator.

Em seguida é adicionado um ": Array<any>", como convenção do Typescript, com a finalidade de "tipar" os parâmetros despejados anteriormente, já que não se sabe quantos são e não se pode assegurar, qual é o tipo de cada um, então é declarado o tipo any para eles.

This é o contexto da minha nova função que foi adicionada no value, por isso eu não posso usar arrow function, porque o this não vai variar, ele vai ser léxico e eu não quero isso.

## apply

```ts
const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

person.fullName.apply(person1, ['Oslo', 'Norway']); // John Doe,Oslo,Norway
```

Os decorator são executados em ordem e podem ser combinados

## Decorator sem parâmetros

```ts
export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`--- Método:${propertyKey}`);
    console.log(`--- parâmetors:${JSON.stringify(args)}`);
    const retorno = metodoOriginal.apply(this, args);
    console.log(`--- retorno:${JSON.stringify(retorno)}`);

    return retorno;
  };
  return descriptor;
}
```

```ts
@inspect
public adiciona(): void {
// ...
}
```

# escapar e constructor.name

```ts
export function escapar(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let retorno = metodoOriginal.apply(this, args);
    if (typeof retorno === 'string') {
      console.log(
        `@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`
      );
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    return retorno;
  };
  return descriptor;
}
```

## Object.defineProperty, closure e elemento em cache

```ts
export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `modificando prototype: ${target.constructor.name} e adicionando getter a propriedade: ${propertyKey}`
    );
    let elemento: HTMLElement;

    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
        console.log(
          `buscando elemento do do seletor ${seletor} para injetar em ${propertyKey}`
        );
      }
      return elemento;
    };

    Object.defineProperty(target, propertyKey, { get: getter });
  };
}
```

# JSON.stringify

```ts
// JSON.stringify(value, replacer, space)

JSON.stringify({ uno: 1, dos: 2 }, null, '\t');
// returns the string:
// '{
//     "uno": 1,
//     "dos": 2
// }'

console.log(JSON.stringify(this.negociacoes, null, 2));
[
  {
    _data: '2022-06-20T17:32:24.568Z',
    quantidade: 2,
    valor: 200.5,
  },
];
```

# Poliformismo

O polimorfismo é a capacidade que um objeto tem de ser referenciado de múltiplas formas.

- Então estou garantindo através do polimorfismo que eu posso ter trinta mil objetos no meu sistema, se todos herdarem, estenderem imprimível, implementarem o método abstrato imprimível, o meu método imprimir vai aceitar e vai rodar.

```ts
// Uma classe abstrata significa que eu não posso fazer new ..., porque eu não posso criar instâncias dessa classe.
// Toda classe abstrata pode te dar um método que você é obrigado a implementar, que se você não implementar, o teu código não vai funcionar.
export abstract class Imprimivel {
  public abstract paraTexto(): string;
}
```

```ts
import { Imprimivel } from '../utils/imprimivel.js';

export class Negociacao extends Imprimivel {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {
    super(); //Então como eu herdei a minha filha está sobrescrevendo o construtor, eu tenho que garantir a chamada do construtor pai chamando super();
  }

  //...
  public paraTexto(): string {
    return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}`;
  }
}
```

```ts
import { Imprimivel } from '../utils/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes extends Imprimivel {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }
}
```

# Implements interface

- em herança em Java Script, você não pode ter herança múltipla
- por padrão toda interface é pública e todo método de uma interface é abstrato, com uma interface uma classe pode implementar quantas interfaces quisermos, não há limite.

```ts
export interface Imprimivel {
  paraTexto(): string;
}
```

```ts
export class Negociacao implements Imprimivel {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  // ...
  public paraTexto(): string {
    return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}`;
  }
}
```

# Interface e Generics

```ts
export interface Comparavel<T> {
  ehIgual(objeto: T): boolean;
}
```

```ts
export class Negociacao implements Imprimivel, Comparavel<Negociacao> {
  //  ...
  public ehIgual(negociacao: Negociacao) {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }
}
```

```ts
export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
  // ...
  ehIgual(negociacoes: Negociacoes): boolean {
    return (
      JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    );
  }
}
```
# Estendendo interface
```ts
import { Comparavel } from './comparavel.js';
import { Imprimivel } from '../utils/imprimivel.js';

export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}
```
```ts
export class Negociacao implements Modelo<Negociacao> {
  //  ...
}
```

# Debugar
~~~ts
{
  "compilerOptions": {
    "outDir": "app/dist/js",
    "target": "ES6",
    "noEmitOnError": true,
    "noImplicitAny": true,
    "removeComments": true,
    "strictNullChecks": true,
    "experimentalDecorators": true,
    "sourceMap": true
  },
  "include": ["app/src/**/*"]
}
~~~

Primeiro pré requisito é ter o sourceMap. Segundo é ter um ambiente na sua infraestrutura, seja PHP, Java etc., 
que dê acesso para o Chrome onde estão os arquivos ts e na hora de você abrir o seu console.
você vai dar “Ctrl + P” para abrir a tela de procura de qualquer classe.