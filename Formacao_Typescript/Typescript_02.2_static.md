# static

Um método que é independente da instância (sem new), mas um método que eu posso chamar na própria classe.

```ts
export class NegociacaoController {
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputData.value
    );
  }
}
```

```ts
export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
}
```

Outro exemplo:

```ts
class Score {
  static score: number = 0;

  static updateScore(): void {
    this.score++;
  }
  displayScore(): number {
    // return this.score : // The class methods cannot access static properties
    // Alternative is direct calling of Score.methodName
    return Score.score;
  }
}

const score = Score.score; // 0;
Score.updateScore(); // WIll update the score by 1
console.log(Score.score); // 1

// TO create instance for Score class
const s = new Score();
console.log(s.displayScore()); // WIll give same result as Score.score so don't need to call instance // 1
```
# strictNull e removeComments
removeComents - todo código de comentário que você escrever no seu arquivo TypeScript, ele não vai aparecer no arquivo compilado.
{
  "compilerOptions": {
    "outDir": "dist/js",
    "target": "ES6",
    "noEmitOnError": true,
    "noImplicitAny": true,
    "removeComments": true,
    "strictNullChecks": true
  },
  "include": ["app/**/*"]
}


# as

o retorno dessa função, eu vou converter para um tipo que eu garanto, que eu assumo que não vai dar problema.
Eu estou forçando a mudança do tipo. Antes era HTMLInput/ ou nulo. E agora estou fazendo o que chamamos de casting explícito.

```ts
this.inputData = document.querySelector('#data') as HTMLInputElement;
// ou
this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
```
