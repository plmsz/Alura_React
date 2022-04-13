display: inline-block

O display: inline-block permite os elementos se posicionarem um do lado do outro porém, diferentemente do display: 
inline ele permite que os elementos tenham sua width e height modificadas. 
Por esse motivo o display: inline-block é muito mais interessante na maioria dos casos do que o display: inline.

O problema de usar display: inline-block é espaçar os elementos entre si. 
Para fazer isso teríamos que colocar margins e fazer contas.

float: left | right

O float é mais complicado, ele empurra o elemento para um dos lados (left | right) e os elementos que estão embaixo sobem. Isso nem sempre é o que a gente quer. 
Além do mais o float não permite que usemos a propriedade vertical-align: middle para alinhar os elementos verticalmente.
Ou seja, para contornar isso uma possibilidade seria ter que colocar margin-top ou bottom nos elementos e usar os temidos números mágicos!

# display: flex

O display: flex veio com o intuito de facilitar nossa vida nesses aspectos de posicionamento. 
Ele permite os elementos ficarem um do lado do outro, permite espaçar os elementos de forma mais intuitiva e sem ter que fazer cálculos. 
Além disso ele também permite alinhar os elementos verticalmente de forma fácil.

## Properties for the Children
(flex items)

By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.
-1 goes to first position

(flex-grow)
two rows of items, the first has all equally-sized items with equal flex-grow numbers, the second with the center item at twice the width because its value is 2 instead of 1.

This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others (or it will try, at least).
_________
A propriedade flex-grow:

Por exemplo, se temos:

Elemento 1: 200 px.

Elemento 2: 200 px.

Espaço vazio que sobrou do flex container: 600 px.

Total: 1000 px.

Se colocamos flex-grow: 1 no primeiro elemento, ele passa a ter 800 px de largura, ou seja:

Espaço vazio + Elemento 1: 800 px.

E o segundo elemento continua tendo 200 px de largura.

Agora, se colocarmos flex-grow: 1 nos dois elementos, o que aconteceria? Qual tamanho ficaria o elemento 1? E o elemento 2?
Considere o espaço vazio inicial: 600 px.

Como os dois elementos tem flex-grow: 1, a soma de flex-grow que temos vai dar 1 + 1 = 2.

O navegador pega esse espaço vazio e divide pelo número de flex-grow que temos: 600 px : 2 = 300 px.

Agora ele distribui esse espaço para cada um dos elementos que colocamos flex-grow.

Elemento 1: 300 px + 200 px = 500 px.

Elemento 2: 300 px + 200 px = 500 px.

flex-shrink
This defines the ability for a flex item to shrink if necessary.
flex-shrink: 0 (means don't shrink at all)
----
<main class="flexContainer">        
  <div class="flexItem firstRow"></div>
  <div class="flexItem firstRow"></div>
  <div class="flexItem firstRow"></div>
  <div class="flexItem firstRow"></div>
</main>
Considere agora que estejamos em um contexto flex. E que cada flexItem tem 200 px de width.

CSS

.flexContainer {
  display: flex;
}
.flexItem {
  width: 200px;
}
1) Quando a largura da tela chega a 800 px, os elementos mantém 200 px de largura cada um preenchendo todo o espaço da tela, porém, o que acontece com a largura dos flexItem quando diminuímos a tela para por exemplo 600 px.

2) O que acontece com a largura deles também quando aplicamos o seguinte CSS no nosso código?
.flexItem:first-child {
  flex-shrink: 2;
}

1) Quando diminuimos a tela para 600 px os flex-item diminuem seu tamanho igualmente entre si, ou seja, como a tela diminuiu 200 px e temos 4 flex items, cada um diminuiu 50 px. Sendo assim cada flex-item ficou com 150 px no fim.

2) Quando colocamos flex-shrink: 2 no primeiro, ele diminui de forma diferente do que os outros elementos. As contas que ocorrem são semelhantes as que ocorrem no flex-grow.

Primeiro de tudo o navegador pega o total de flex-shrink que nossos flex items tem, como temos por padrão flex-shrink: 1 nos flex items, a conta fica assim:

2 + 1 + 1 + 1 = 5. Isso pois o primeiro colocamos flex-shrink:2.

Como diminuímos 200 px do tamanho total, o navegador pega esse valor e divide pelo total de flex-shrink. Fica: 200 px : 5 = 40 px.

Dessa forma o navegador tira 2 partes do primeiro elemento 200px - 80px = 120px e tira 1 parte dos demais, ou seja: 200 px - 40 px = 160 px.



----
.flexItem:first-child {
  flex-shrink: 2;
}
flex
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. The default is 0 1 auto, but if you set it with a single number value, like flex: 5;, that changes the flex-basis to 0%, so it’s like setting flex-grow: 5; flex-shrink: 1; flex-basis: 0%;.


flex-basis
This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.

.item {
  flex-basis:  | auto; /* default auto */
}
