# Get started

1- Instalar o Live sass compiler - ctrl + shift + p => live sass + watch sass

2 - Criar o arquivo style.css

3 - Adicionar o arquivo css criado pelo sass

# Aninhamento

```scss
.container {
  height: 100vh;
  display: flex;
  .esquerdo {
    height: 50%;
    width: 50%;
    background-color: blueviolet;
    .texto {
      margin-top: 40%;
      text-align: center;
      font-size: 150px;
      color: aquamarine;
    }
  }
}
```

# Variaveis

```scss
$cor-principal: rgb(228, 81, 189);
$cor-secundaria: rgb(90, 64, 242);

body {
  background-color: $cor-principal;
}
```

# mixin

```scss
$cor-principal: rgb(24, 143, 38);
$cor-secundaria: rgb(232, 176, 71);

@mixin reset {
  margin: 0;
  padding: 0;
}

@mixin cor-e-texto($cor-de-fundo, $cor-do-texto) {
  width: 50%;
  background-color: $cor-de-fundo;
  .texto {
    font-size: 150px;
    color: $cor-do-texto;
  }
}

.container {
  .esquerdo {
    @include cor-e-texto($cor-principal, $cor-secundaria);
  }
  .direito {
    @include cor-e-texto($cor-secundaria, $cor-principal);
  }
}
```

# Comentários

```scss
// This comment won't be included in the CSS.

/* But this comment will, except in compressed mode. */

/* It can also contain interpolation:
 * 1 + 1 = #{1 + 1} */

/*! This comment will be included even in compressed mode. */

p /* Multi-line comments can be written anywhere
   * whitespace is allowed. */ .sans {
  font: Helvetica,
    // So can single-line commments.
    sans-serif;
}
```

# Partials

Partials começam com \_

styles/components/\_navbar.css

<!-- estilização do componente -->

No “abstract” vamos manter o código referente à construção dos nossos estilos.
styles/abstract/\_base.scss

```scss
@import './variaveis';

html,
body {
  font-family: $fonte;
}
```

styles/styles.scss

```scss
@import './abstract/base';
@import './components/navbar';
```

# Seletor &

@import '../abstract/variaveis';

```scss
a {
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid $cor-secundaria;
  }
}
```

# Caminhos

Porém, quando usamos o CSS, a URL pode ser absoluta ou relativa. Você deve observar que, ao colocar um caminho relativo, ele é relativo à definição de sua folha de estilo, não ao seu documento HTML.

/imagens/banner.jpeg
/styles/components/\_navbar.scss
/styles/style.css <==

Solução
Como o caminho relativo ao arquivo CSS, podemos remover o ../, como ilustra o exemplo abaixo:

background: url(../imagens/banner.jpeg) 27% center / cover no-repeat;

# Cálculo matématicos

```scss
@import '../abstract/variaveis';
h1 {
  font-size: $tamanho-do-texto;
}
h2 {
  font-size: $tamanho-do-texto/2;
}
```

No abstract/variaveis

```scss
//Tamanho das fontes
$tamanho-do-texto: 3rem;
```

# Escopo

```scss
h1 {
  font-size: $tamanho-do-texto;
  $cor-primaria: tomato; /* cor muda para tomato apenas no h1 */
  color: $cor-primaria;
}
```

| Palavra reservada  |                                                                 O que ela faz                                                                  |
| :----------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: |
|        @use        |          carrega mixins, functions e variáveis de outras folhas de estilos Sass e combina o CSS de diversas folhas de estilo juntos.           |
|      @forward      | carrega uma folha de estilo Sass e torna os mixins, functions e variáveis disponíveis quando a folha de estilo é carregada pela regra do @use. |
|      @import       |                    estende as regras de CSS para carregar styles, mixins, functions e variáveis de outras folhas de estilo.                    |
| @mixins e @include |                                                 facilitam a reutilização de trechos de código.                                                 |
|     @function      |                                      define funções customizadas que podem ser utilizadas em expressões.                                       |
|      @extend       |                                            permite que os seletores herdem estilos uns dos outros.                                             |
|      @at-root      |                                              coloca estilos dentro dele na raiz do documento CSS.                                              |
|       @error       |                                            faz com que a compilação falhe com uma mensagem de erro.                                            |
|       @warn        |                                              imprime um aviso sem parar totalmente a compilação.                                               |

# Arquivo sass

```
@import '../abstract/_variaveis.scss'

@mixin bg-cores($cores...)
    background: linear-gradient(to left,$cores)
footer
    text-align: center
    font-size: $tamanho-do-texto/2
    border-top: 1px solid $cor-primaria
    margin-top: 1rem
    padding: 1.2rem
    @include bg-cores($cor-primaria,$cor-terciaria,$cor-secundaria,$cor-secundaria,$cor-terciaria,$cor-primaria)
    i
        color: red
```

# @if @else

@if
O padrão de escrita do if é @if <expression> { ... }, que controla se seu bloco é avaliado ou não (incluindo a emissão de qualquer estilo como CSS). A expressão geralmente retorna true ou false —se a expressão retornar true, o bloco será executado e, se a expressão retornar false, não será executado.

@else
Já no caso do else, escrita é @else { ... }. O bloco desta regra é avaliado se a @if retornar falso.

Exemplo prático
Na partial \_footer,sass, vamos incluir um parâmetro para indicar o lado do gradiente, como ilustra o código abaixo:

```
@mixin bg-cores($lado, $cores...)
    @if $lado == left
        background: linear-gradient(to left, $cores)
    @else
        background: linear-gradient(to right, $cores)
```

Se o parâmetro $lado tiver o conteúdo left, então vamos aplicar o gradiente para o lado esquerdo. Senão, vamos aplicar o gradiente para o lado direito.

Vamos testar?
~~~
    @include bg-cores("", $cor-primaria, $cor-secundaria, $cor-terciaria, $cor-terciaria
~~~

## scss

```scss
$light-background: #f2ece4;
$light-text: #036;
$dark-background: #6b717f;
$dark-text: #d2e1dd;

@mixin theme-colors($light-theme: true) {
  @if $light-theme {
    background-color: $light-background;
    color: $light-text;
  } @else {
    background-color: $dark-background;
    color: $dark-text;
  }
}

.banner {
  @include theme-colors($light-theme: true);
  body.dark & {
    @include theme-colors($light-theme: false);
  }
}
```
