
Protótipo: https://www.figma.com/file/0gMF5BPgplPYqQA6Om1T1sk9/alura-bootstrap?node-id=0%3A1

# Atom Design
A ideia de criar um arquivo CSS para cada elemento da página tem um nome: Atomic Design, que consiste, basicamente, em um modelo de organizar os componentes, pastas e a estrutura do nosso CSS a partir do princípio de átomos, onde um átomo é toda tag HTML. No exemplo abaixo temos a estrutura de uma seção "Pesquisar".

![atomos](./atomic-design/atomos.png)

Nela temos um rótulo (label) "Pesquisar", um campo de texto (input) "Digite sua pesquisa aqui..." e um botão (button) "Procurar". Juntos esses elementos, ou átomos, formam uma "molécula" - nesse caso, a molécula de um formulário de pesquisa.

![moleculas](./atomic-design/moleculas.png)

A junção de várias moléculas, por sua vez, forma os "organismos". Por exemplo, juntando a molécula referente ao formulário de pesquisa com a molécula referente ao menu (que também tem seus átomos, como a imagem e os links), temos um organismo que representa o cabeçalho de uma página.
![organismos](./atomic-design/organismos.png)

Unindo vários organismos, chegamos aos "templates". No exemplo, temos o organismo referente ao cabeçalho, ao banner e à descrição, e que juntos formam um template.
![template](./atomic-design/template.png)

Por fim, o template dá lugar a uma página:

![paginas](./atomic-design/paginas.png)

A diferença básica entre um template e uma página é que os templates são feitos com informações não reais, como um Lorem Ipsum (texto padrão em latim utilizado para testar fontes e diagramação), imagens vazias no lugar dos logos e banners, e assim por diante. Nas páginas, utilizamos imagens e informações reais do nosso protótipo.


# BEM
bloco__elemento--modificador


# Organização da pasta e arquivos

- Ordenar as propriedades por ordem alfabética

---assets
    |- quemSomos
        |--quemSomos-descrição.css
        |--quemSomos-titulo.css
        |--quemSomos.css
    |- cabecalho.css
    |- receitas.css
    |- normalize.css
    |- reset.css
    |-img

# Imagens no css
Perceba que estamos utilizando uma <div> para essas imagens, ao invés de uma tag <img> como fizemos na seção de receitas ou no banner. Isso ocorre pois essas são imagens ilustrativas, servindo apenas para estilização, e por isso não devem constar no HTML.
