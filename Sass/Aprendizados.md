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
@import "./variaveis";

html,
body {
	font-family: $fonte;
}
```

styles/styles.scss

```scss
@import "./abstract/base";
@import "./components/navbar";
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
