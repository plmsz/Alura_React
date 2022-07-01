var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');
var noticias = document.querySelectorAll('.listaDeArtigos-item')
console.log(noticias)
new0.style.display = 'block';

var btns = document.querySelectorAll('.listaDeArtigos-slider-item');

//Criando indicado de slide atual
let indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.textContent = '(Slide atual)';
indicadorSlideAtual.id = 'escondeVisualmente';

// Percorre todos os botoes controladores
btns.forEach(function (btn) {
  btn.addEventListener('click', function () {

    // btns.href = 'javascript:void(0); //remove o pulo porém o leitor de tela não reconhece o link

    noticias.forEach(function (noticia) {
      noticia.style.display = 'none';

      if (this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia')) {
        noticia.style.display = 'block';
      }
    }.bind(this));

    // document.querySelector('.listaDeArtigos-slider-item .escondeVisualmente').remove();
    this.append(indicadorSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function (btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    });

    this.classList.add('listaDeArtigos-slider-item--ativo');
  });
});