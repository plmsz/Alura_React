# Esconder visualmente informação que deverá ser lid pelo leitor de tela

```css
.escondeVisualmente {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

# Modal acessível
Biblioteca modal pronto: https://sweetalert2.github.io/

- display none se não tiver javascript
- role dialog
- aria-labelledby para o titulo
- foco
- aria-label em botão sem descrição
- clicar em esc ou na overlay fecha a modal

```css
.secaoDestaques-form-botao {
  max-width: 20em;
  margin-top: 1em;
  display: none;
  margin: 0 auto;
  background: transparent;
  color: #b72e2e;
  border: 1px solid #b72e2e;
}
```

```html
<div id="conteudoForaDialog">
  <section class="secaoDestaques">
    <button
      class="secaoDestaques-form-botao btnPadrao btnPadrao--pequeno"
      id="abreDialog"
    >
      Receber destaques por email
    </button>
  </section>
</div>
<div
  class="dialogNewsletter"
  id="dialogNewsletter"
  role="dialog"
  aria-labelledby="tituloDialog"
>
  <div class="dialogNewsletter-body">
    <h2 class="dialogNewsletter-titulo" id="tituloDialog">News sem spam</h2>
    <h3 class="dialogNewsletter-texto">
      Assine nossa newsletter para receber notícias técnicas sem spam!
    </h3>
    <form class="dialogNewsletter-form">
      <label class="dialogNewsletter-label" for="emailNewsletter">
        Email:
      </label>
      <input
        id="emailNewsletter"
        type="email"
        class="dialogNewsletter-campo"
        placeholder="Digite seu e-mail..."
      />
      <button class="dialogNewsletter-btn" type="submit">
        Assinar newsletter
      </button>
      <button
        class="dialogNewsletter-fechar"
        type="button"
        aria-label="Fechar janela modal"
      >
        X
      </button>
    </form>
  </div>
  <div class="dialogNewsletter-overlay"></div>
</div>
```

```js
// Variáveis
var conteudoForaDialog = document.querySelector('#conteudoForaDialog');
var video = document.querySelector('video');

var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

btnAbreDialog.style.display = 'block';

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function () {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-label').focus();
  conteudoForaDialog.inert = true;

  document.querySelector('video').removeAttribute('controls');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
  conteudoForaDialog.inert = false;
  btnAbreDialog.focus();
  document.querySelector('video').setAttribute('controls', 'true');
}

// Listeners
document
  .querySelector('.dialogNewsletter-fechar')
  .addEventListener('click', fechandoDialog);
dialogOverlay.addEventListener('click', fechandoDialog);

document.addEventListener('keyup', function (evento) {
  if (evento.keyCode == 27) {
    fechandoDialog();
  }
});
```

## Instale o inert

1.  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Map,Set,Element.prototype.matches,Node.prototype.contains"></script>
    <script src="https://unpkg.com/wicg-inert"></script>

2.  npm install inert
     <script src="node_modules/wicg-inert/dist/inert.min.js"></script>

Alternativa https://github.com/GoogleChrome/inert-polyfill

# Carrousel acessível
- Lista deve ter titulo - arialabelbyid