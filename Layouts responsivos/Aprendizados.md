# Revisar

- display: inline-block
  => Um bloco inline é colocado inline (ou seja, na mesma linha do conteúdo adjacente), mas comporta-se como se fosse um bloco.

- Cores por nome de variável:

<code>
:root {
  --branco: #fff;
}

.botao {
border: 1px solid var(--branco);
}
</code>

- Uma imagem que ocupa toda a tela em um dipositivo móvel fica estranha em desktop, solução:

<code>
.img{
  width: 100vw;
  max-width: 600px;
}
</code>

- Semântica no html

  - Figure e figurecaption tags
  - Fieldset tag
  - Article
  - Tag video e iframe:

  <video src="" controls>
  <iframe width="100%" height="315" src="https://www.youtube.com/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- Atrivuito title na tag anchor:

---

# Interessante

- Arquivo de reset.css antes dos arquivos "normais" de css

- Se uma imagem não tem importância de conteúdo, essa imagem pode ser removida completamente do HTML, ela vai para o CSS. Ex:

<code>
.item {
    max-width: 350px;
    padding: 2rem 0 2rem 5rem;
}

.item--tempo{
background-image: url(../img/icone-relogio.png);
}
</code>

- title: Este atributo apresentará uma descrição alternativa para o link, no instante em que este receber o foco do cursor.

<code>
  <a href="url" accesskey="l" title="Descrição usando o atributo title"> Descrição escrita no corpo do documento </a>
</code>

Note que no exemplo acima, usamos o atributo (accesskey="l"), onde fará com que este link receba o foco quando o usuário ao navegar por esta página, pressionar simultaneamente as teclas (alt+l).
