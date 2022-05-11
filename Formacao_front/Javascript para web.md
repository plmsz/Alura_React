## Tag audio
  <audio src="sounds/keyq.wav" id="som_tecla_pom" controls></audio>

## JS "inline"

<button>onclick="alert('pom')"</button> <!-- Tem que ser aspas simples dentro alert -->

## script

- Quando o código JavaScript que vamos adicionar depende de elementos que estão no body, por exemplo um querySelector que espera receber determinado seletor, o local mais apropriado para sua inserção é dentro da tag body e na linha anterior ao fechamento da tag </body>. No head podemos inserir scripts, porém eles não devem ter dependencias de elementos do body, por exemplo uma biblioteca de funcionalidades.

https://www.treinaweb.com.br/blog/diferenca-entre-os-atributos-async-e-defer
http://www.josejunior.com.br/2019/08/02/carregando-javascript-de-maneira-eficiente-com-defer-e-async/

<script async src="exemplo.js"></script>

**O download do script é feito de forma assíncrona enquanto o processo de renderização da página continua a ser feito. O script é executado depois que o download estiver completo.**

<script defer src="exemplo.js"></script>

**Assim como o exemplo acima, o download do script é feito de forma assíncrona. Mas sua execução se dá apenas quando todo o processo de renderização estiver concluído.**

## Selecionar um elemento

<code>
    
    const audio = document.querySelector('audio')
    const audio = document.querySelector('input[type=tel]')
    const teclas = document.querySelector('.tecla_pom').play()
</code>

- **A reprodução automática só é permitida quando aprovada pelo usuário, ou o site foi ativado pelo usuário, ou a mídia está com som desativado. Logo não podemos chamar o método play assim que carrega a página**

<code>
   
    function tocaSomPom() {
        document.querySelector("#som_tecla_pom").play();
    }

    teclaPom.onclick = tocaSomPom
    <!-- Lembre-se ao colacar (), a função é imediatamente invocada, logo não pode ser colocada no onclick -->

</code>

## Listas

<code>
   
    const listaDeTeclas = document.querySelectorAll(".tecla");
</code>

## Acessando uma classe de um elemento
<code>
	
    const instrumentClass = ev.target.classList[1]
</code>

## Usando função anonima no onClick
<code>
   
    function tocaSom (idElementoAudio) {
        document.querySelector(idElementoAudio).play();
    }

    const listaDeTeclas = document.querySelectorAll('.tecla');


    for (let contador = 0; contador < listaDeTeclas.length; contador++) {

        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`; //template string

        tecla.onclick = function () {
            tocaSom(idAudio);
        }

    }

</code>

## keyup, keydown, keypress
- onkeywdown detecta quando a tecla é pressionada (bem rápido)
- onkeypress é o de apertar uma teclada como ALT, CONTROl ou SHIFT. (DEPRICADO)
- onkeyup é o evento que detecta o contrário, quando você solta a tecla.

O primeiro evento a ocorrer no processo de digitar uma tecla é o onkeydown, depois imediatamente onkeypress, então o sistema captura a teclada e depois ocorre o onkeyup.

## key x code
event.key representa o valor da tecla pressionada pelo usuário, levando em consideração o estado das teclas modificadoras, por exemplo: Shift, bem como a localidade e o layout do teclado.

event.code representa uma tecla física no teclado (em oposição ao caractere gerado ao pressionar a tecla). 

## element.tagName, element.localName

var span = document.getElementById("exemplo");
console.log(span.tagName); //SAÍDA: "SPAN" 
console.log(span.localName); //SAÍDA: "span" 