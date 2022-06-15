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

~~~ts
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
~~~

## Object.defineProperty