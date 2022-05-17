# Atributos do input

- required
- type
- minlength

https://www.regexlib.com/?AspxAutoDetectCookieSupport=1

# Pattern

^(?=._[a-z])(?=._[A-Z])(?=._[0-9])(?!._[!@#$%^&*]).{6,12}$

Os primeiros e últimos símbolos dessa expressão regular significam até onde nós queremos checar esse padrão.

Então vamos analisar o primeiro “?=”, quando nós começamos com interrogação igual nós estamos dizendo que nós permitimos a presença de certos caracteres. O ponto está dizendo que todos os caracteres são permitidos menos quebra de linha. O asterisco serve para dizer que contenha pelo menos um desses caracteres, e entre colchetes nós colocamos o intervalo de caracteres que nós queremos que sejam válidos permitidos. No caso aqui, nós temos “a-z”, ou seja, de a até z minúsculos.

A próxima regra que nós temos, de novo “?=”, ou seja, nós permitimos esses caracteres, o ponto está dizendo que todos os caracteres são permitidos, menos quebra de linha, e o asterisco para conter pelo menos 1 desses caracteres. E dentro de colchetes o intervalo de caracteres que nós queremos. Que é de A até Z, mas agora maiúsculos.

Na nossa terceira regra é a mesma coisa.

E por último, nosso último conjunto de regras, que começa agora com ?!. Então se “?=” quer dizer que é permitido, “?!” quer dizer que não é permitido. Nós não permitimos o uso desses caracteres, qualquer caractere é permitido, menos quebra de linho e agora com asterisco também que contenha pelo menos um desses caracteres.

E agora que caracteres são esses, dentro de colchetes, nós não colocamos intervalo porque intervalo de caracteres especiais pode ser diferente, dependendo da tabela de caracteres que nós estamos usando. Então nós vamos colocar na mão todos os caracteres que nós não queremos permitir, que não são permitidos dentro do campo de senha. Portanto, espaço, !, @, #, $, %, e assim por diante. Nós vamos colocar todos os caracteres que não serão permitidos dentro do campo.

Então depois de todos esses conjuntos de regras fora de parêntesis, nós temos um “.{6,12}”. Isso quer dizer que nós queremos que nosso campo tenha entre 6 a 12 caracteres.

# Title

Adiciona uma tooltip

```js
<input name="senha" id="senha" class="input" type="password" placeholder="Senha" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%^&*]).{6,12}$" title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos." data-tipo="senha">
```

# setCustomValidity()

No JavaScript, também é possível tratar erros de validação utilizando a propriedade validity do input, é preciso definir uma mensagem vazia se não há erros ou form não será submetido.

```js
input.setCustomValidity("Mensagem customizada de erro");
```

```js
const dataNascimento = document.querySelector("#nascimento");

dataNascimento.addEventListener("blur", (evento) => {
	validaDataNascimento(evento.target);
});

function validaDataNascimento(input) {
	const dataRecebida = new Date(input.value);
	let mensagem = "";

	if (!maiorQue18(dataRecebida)) {
		mensagem = "Você deve ser maior que 18 anos para se cadastrar.";
	}
	console.log(mensagem);
	input.setCustomValidity(mensagem);
}

function maiorQue18(data) {
	const dataAtual = new Date();
	const dataMais18 = new Date(
		data.getUTCFullYear() + 18,
		data.getUTCMonth(),
		data.getUTCDate()
	);
	return dataMais18 <= dataAtual;
}
```

# data-attributes - generalizando as validações

```html
<input
	name="nascimento"
	id="nascimento"
	class="input"
	type="date"
	placeholder="Data de nascimento"
	data-tipo="dataNascimento"
	required
/>
```

```js
export function valida(input) {
	const tipoDeInput = input.dataset.tipo;

	if (validadores[tipoDeInput]) {
		validadores[tipoDeInput](input);
	}
}
```

```js
const validadores = {
	dataNascimento: (input) => validaDataNascimento(input),
};

import { valida } from "./validacao";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
	input.addEventListener("blur", (evento) => {
		valida(evento.target);
	});
});
```

# Selecionar elemento pai

```js
if (input.validity.valid) {
	input.parentElement.classList.remove("input-container--invalido");
	input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
} else {
	input.parentElement.classList.add("input-container--invalido");
	input.parentElement.querySelector(".input-mensagem-erro").innerHTML =
		mostraMensagemDeErro(tipoDeInput, input);
}
```

# Substituir o valor do input

```js
const cpfFormatado = input.value.replace(/\D/g, ""); //não-digito
```

# Função recursiva

- é uma função que chama a si mesma até encontrar uma instrução de parar. Essa técnica é chamada de recursão.

Vamos criar uma função que calcula o somatório de qualquer número n.
Dizemos que o somatório de n é S(n) e se calcula assim: 1 + 2 + 3 + ... + (n-1) + n

Por exemplo:
S(5) = 5 + 4 + 3 + 2 + 1
S(6) = 6 + 5 + 4 + 3 + 2 + 1
...

Mas note uma coisa interessante aí:
S(6) = 6 + S(5)
S(5) = 5 + S(4)
...

Generalizando:
S(n) = n + S(n-1)

```js
function somatorio(x) {
	if (x <= 1) {
		return 1;
	} else {
		return x + somatorio(x - 1);
	}
}
```

Note uma coisa importante em funções recursivas: elas tem que ter um ponto de parada.
No caso do somatório, é: x<=1

Ou seja, ela vai ficar chamando ela mesma, e de novo, e de novo, e de novo...se você não der um stop nisso, vai ficar se invocando infinitamente.

No caso, quando atinge: S(1), ela retorna 1 e vai parar de se invocar!

# Máscara de cep

 <script src="https://github.com/codermarcos/simple-mask-money/releases/download/v3.0.0/simple-mask-money.js"></script>

```js
const args = {
	prefix: "R$",
	fixed: true,
	fractionDigits: 2,
	decimalSeparator: ",",
	thousandsSeparator: ".",
	cursor: "end",
};
SimpleMaskMoney.setMask(input, args);
```
