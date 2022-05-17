`npm install typescript --save-dev`

Em JS:

app.js

```js
import { Negocicacao } from './models/negociacao.js';

const negociacao = new Negocicacao(new Date(), 10, 100);

console.log(negociacao.data, negociacao.volume);

negociacao.quantidade = 1000; //adc. a propriedade dinamicamente não altera a propriedade privada
console.log(negociacao);

//se vc esquesce de passar os dois ultimos parametros, o código falha apenas em runtime
const business = new Negocicacao(new Date(1, 1, 2022));
console.log(business.volume); //NaN
```

negociacao.js

```js
export class Negocicacao {
  #data;
  #quantidade;
  #valor;

  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
  }

  get data() {
    return this.#data;
  }
  get quantidade() {
    return this.#quantidade;
  }
  get valor() {
    return this.#valor;
  }

  get volume() {
    return this.#quantidade * this.#valor;
  }
}

//ao colocar getters é possível acessar as propriedades, se modificar ou criar uma nova propriedade dará erro de runtime
```

O arquivo tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "dist/js",
    "target": "ES6",
    "noEmitOnError": true
  },
  "include": ["app/**/*"]
}
```

- "target": indica para o compilator tsc (TypeScript Compiler) para qual versão do Javascript o código escrito em TypeScript deve ser compilado
- "outDir": indica para onde os arquivos compilados indicados pela propriedade "include" serão salvos.
- "include": indica para o compilador onde estão os arquivos ".ts" que ele deve compilar.

.package.josn

```json
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "lite-server --baseDir=dist",
    "start": "concurrently \"npm run watch\" \"npm run server\"",
    "compile": "tsc",
    "watch": "tsc -w"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^6.0.0",
    "lite-server": "^2.6.1",
    "typescript": "^4.2.2"
  }
}
```
