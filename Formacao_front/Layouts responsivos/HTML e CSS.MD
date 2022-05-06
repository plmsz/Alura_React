<fieldset>
O elemento HTML <fieldset> é usado para agrupar elementos, assim como labels (<label>), dentro de um formulário web.

Example #1: Formulário com fieldset, legend, e label
<form action="test.php" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" id="radio"> <label for="radio">Click me</label>
  </fieldset>
</form>



________

# vertical-align
A propriedade  vertical-align do CSS especifica o alinhamento vertical de um inline ou caixa table-cell.


# ::before (:before)
Sumário
::before cria um pseudo-elemento que é o primeiro filho do elemento atingido. É frequentemente utilizado para adicionar conteúdo decorativo à um element utilizando a propriedade content. 


Conteúdo HTML
<q>Algumas citações</q>, ele disse, <q>são melhor do que nenhuma.</q>
Copy to Clipboard

Conteúdo CSS
q::before {
  content: "«";
  color: blue;
}
q::after {
  content: "»";
  color: red;
}

Saída
