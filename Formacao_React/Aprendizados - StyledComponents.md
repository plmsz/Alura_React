# Passar todas as props

<code>

    export default (props)=> {
        return(
            <Items>
                <Item {...props}/>
            </Items>
        )
    }

</code>

# Estizando um componente

<code>

    const Botao = styled.button`
        background-color: #3f51b5;
        color: white;
        padding: 10px;
        border: none;
    `;

</code>

# Reset do css

- Criamos um arquivo global:

  <code>

import { createGlobalStyle } from "styled-components";

    export const GlobalStyle = createGlobalStyle`
        * {
          box-sizing: border-box;
          font-family: "Montserrat", sans-serif;
          margin: 0;
          padding: 0;
          text-decoration: none;
          color: grey;
        }
    `;

</code>

- Importamos o componente no app

# Fontes

Importa como link no index.thml

# Props

Quando uma propriedade de um componente muda de acordo com alguma coisa
<code>

    const BtnCabecalho = styled.button`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;

    background: ${(props)=>props.primary ? "white" : corPrimaria };
    color: ${(props)=> props.primary ? "corPrimaria" : "white"};

`;
</code>

# Herança

Quando componentes tem pequenos detalhes de diferença
<code>

    import styled from "styled-components";

    export const Icone = styled.img`
    height: 25px;
    width: 25px;
    `;

    const IconeMargin = styled(Icone)`
    margin-top: 2px;
    `;

</code>

# media queries

<code>

    export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
    padding: 20px;
    width: 48%;

    @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
    }
    ;

</code>

## Evitar colocarmos a declaração de componentes dentro do método render

<code>

    const Wrapper = ({ message }) => {
    // WARNING: THIS IS VERY VERY BAD AND SLOW, DO NOT DO THIS!!!
    const StyledWrapper = styled.div`
        /* ... */
    `;

    return <StyledWrapper>{message}</StyledWrapper>;
    }

</code>

<code>

    const StyledWrapper = styled.div`
    /* ... */
    `;

    const Wrapper = ({ message }) => {
    return <StyledWrapper>{message}</StyledWrapper>;
    };

</code>

# Classes

<code>
    
    const Item = styled.div`
    display: flex;

    .text{
        font-weight: bold;
    }
    `;

    export default ({ type }) => {
    return (
        <Item>
        <span className="text">{type}</span>
        </Item>
    );

</code>

### Herança css

background-color: inherit;

### invert

filter: "invert(100%)"

invert() - O efeito obtido com aplicação desta função de filtragem é o de inverter as cores da imagem. Os valores CSS possíveis para o parâmetro desta função são a porcentagem ou um número expressando uma porcentagem. Valores negativos são inválidos. O valor igual a 100% ou 1 resulta em imagem com cores totalmente invertidas e o valor igual a 0% ou 0 é o valor padrão, isto é, a imagem original. Valores maiores que 100% são permitidos mas causam o mesmo efeito que o valor 100% ou 1.

### Temas

temas.js

```javascript

import { conteudoClaro,
  fundoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro
} from "./variaveis";

export const temaClaro = {
    body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: ""
};

export const temaEscuro = {
    body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)"
};
```

```javascript
export const Icone = styled.img`
  height: 25px;
  width: 25px;
`;

export const IconeTema = styled(Icone)`
  filter: ${({ theme }) => theme.filter};
`;
```

```javascript
<ThemeProvider theme={tema ? temaClaro : temaEscuro}>
  <BotaoTema onClick={toggleTema}>
    <SwitcherTema tema={tema} />
  </BotaoTema>
  <Container />
</ThemeProvider>
```

- Criar um arquivo com temas que importam variaveis
- Na propriedades passa uma função que tem theme como parametro
  - background-color: ${({theme})=> theme.inside};

```

```
