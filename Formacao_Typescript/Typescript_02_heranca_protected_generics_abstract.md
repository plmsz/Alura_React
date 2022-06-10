Utilizando a API do DOM, podemos criar elementos dinamicamente através de document.createElement através da propriedade innerHTML que recebe uma string que é convertida para elementos do DOM.

# Criando elementos no dom

```ts
import { Negociacoes } from '../models/negociacoes.js';

export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    console.log(seletor);
    this.elemento = document.querySelector(seletor);
  }

  template(model: Negociacoes): string {
    return `
        <table class="table table-hover table bordered">
            <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
            </tr>
            </thead>
            <tbody>
             ${model
               .lista()
               .map((negociacao) => {
                 return `
                <tr>
                  <td>
                  ${new Intl.DateTimeFormat().format(negociacao.data)}
                  </td>
                  <td>${negociacao.quantidade}</td>
                  <td>${negociacao.valor}</td>
                </tr>
                `;
               })
               .join('')}
            </tbody>
      </table>
        `;
  }

  update(model: Negociacoes): void {
    this.elemento.innerHTML = this.template(model);
  }
}
```

```ts
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  private negociacoesView = new NegociacoesView('#negociacoesView');

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  adiciona(): void {
    this.negociacoesView.update(this.negociacoes);
  }
}
```

# Herança e modificador de acesso protected

Pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes.

```ts
export class View {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }
}
```

```ts
import { View } from './view.js';

export class MensagemView extends View<string> {
  template(model: string): string {
    return `
        <p class="alert alert-info">${model}</p>
      `;
  }
}
```

# Generics

Uma forma de flexibilizar o tipo de parâmetro recebido pelo método da classe mãe (View) e obrigar as filhas, NegociacoesView e MensagemView a tiparem de forma específica os parâmetros indicados com o generics na classe mãe.

```ts
export class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(model: T): string {
    throw Error('Classe filha precisa implementar o método template');
  }

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
```

```ts
import { View } from './view.js';

export class MensagemView extends View<string> {
  template(model: string): string {
    return `
        <p class="alert alert-info">${model}</p>
      `;
  }
}
```

```ts
import { Negociacoes } from '../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {
  template(model: Negociacoes): string {
    return `
        <table class="table table-hover table bordered">
        [...]
`;
  }
}
```

# Classes abstrata

- uma classe abstrata, você não pode criar uma instância diretamente dela.
- você só pode se o filho herda essa classe e você cria uma instância do filho.
- ela pode ter nenhum, ter zero ou mais métodos abstratos.
  - um método abstrato aquele que a classe pai não sabe como vai ser implementado. Vai ser responsabilidade da classe filha.

```ts
export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  abstract template(model: T): string;

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
```

# Visbilidade

na classe filha, quando herdamos e sobrescrevemos um método, ampliamos a visibilidade do metódo
um elemento que é protected, eu posso tornar public; ou um que é protected, eu posso continuar a ser protected colocando protected

```ts
export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
```

# Enums

```ts
export enum DiasDaSemana {
  DOMINGO = 0,
  SEGUNDA = 1,
  TERÇA = 2,
  QUARTA = 3,
  QUINTA = 4,
  SEXTA = 5,
  SABADO = 6,
}
```
