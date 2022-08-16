# Para usar obrigatoriamente

npx create-react-app alura-studies --template typescript --use-npm

# Estilização in-line

- O nome da variável igual a propriedade ou passar todos os estilos

```tsx
const backgroundColor = 'red';
const estaAtivo = false;
const styles = {
    backgroundColor: estaAtivo ? 'green' : 'yellow',
}

<button style={{backgroundColor}}>Botão</button>
<button style={styles}>Botão</button>


```

# SASS

npm i sass --save -dev

# CSSMODULES

npm install -D typescript-plugin-css-modules

```json
"compilerOptions": {
  "plugins": [{ "name": "typescript-plugin-css-modules" }]
}

```

- Como agora sabemos que podemos nomear o objeto de formas diferentes, podemos também importar vários CSS Modules em um só componente!

```tsx
import BotaoStyle from './Botao.module.scss';
import ItemStyle from './Item.module.scss';
```

```tsx
import style from './Lista.module.scss';

  <div className={style.AppStyle}>
```

## Usando caracteres especias no CSS MODULES

```tsx
<button className={style['novaTarefa--container']} type='submit'>
  Botão
</button>
```

# Props em componentes de classe

```tsx
import * as React from 'react';
import style from './Botao.module.scss';

export class Botao extends React.Component<{
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
}> {
  render() {
    const { type = 'button' } = this.props;
    return (
      <button className={style.botao} type={type}>
        {this.props.children}
      </button>
    );
  }
}
```

# Children no React 18

If your project uses TypeScript, you will need to update your @types/react and @types/react-dom dependencies to the latest versions. The new types are safer and catch issues that used to be ignored by the type checker. The most notable change is that the children prop now needs to be listed explicitly when defining props, for example:

```tsx
interface MyButtonProps {
  color: string;
  children?: React.ReactNode;
}
```

# Outra forma de componentizar sem criar interface

```tsx
import Item from './Item';

function Lista() {
  const tarefas = [
    { tarefa: 'React', tempo: '02:00:00' },
    { tarefa: 'Javascript', tempo: '01:00:00' },
    ,
  ];
  return (
    <aside>
      {tarefas.map((item, index) => (
        <ul>
          <Item {...item} key={index} />
        </ul>
      ))}
    </aside>
  );
}
```

```tsx
export default Lista;

function Item({ tarefa, tempo }: { tarefa: string; tempo: string }) {
  return (
    <li>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}

export default Item;
```

# uuid

npm i --save-dev @types/uuid
npm i uuid
id: uuidv4(),

# botão efeito pressionado

background-color: #4D4D4D;
border-radius: 8px;
box-shadow: 2px 4px 4px #0000009F;
padding: 12px;
margin-bottom: 8px;
position: relative;
cursor: pointer;

# ciclo de vida

Em geral um componente tem um ciclo de vida assim:

componentWillMount (antes de ser montado)
componentDidMount (acabou de ser montado)
componentWillUpdate (componente acabou de atualizar)
componentWillUnmount (componente vai ser desmontado)
Esses palavrões que eu coloquei acima e não foram à toa, são métodos que podem ser utilizados em class components assim como o método render que utilizamos para renderizar o JSX.

Claro que esses não são os únicos métodos, mas são os mais importantes para que consigamos entender o ciclo de vida de forma didática, caso queira saber mais, acesse a documentação sobre React.Component.

Tá, beleza Luiz, você está me falando sobre class components, mas não estamos trabalhando com hooks??? cadê o ciclo de vida com function components???

Vamos ver então essas funções acima escritos com function components:

componentWillMount
useLayoutEffect(() => {
…
},[])
Começamos com um bem pouco utilizado, o hook useLayoutEffect, ele com o array vazio atua como o componentWillMount. É usado quando você precisa mudar algo visualmente antes do componente aparecer, para que não haja aquele problema da tela piscar assim que a tela carrega, um bom exemplo disso atualmente é a mudança de temas para light/dark.

componentDidMount
useEffect(() => {
…
}, [])
O useEffect com o array de dependências vazio atua como ocomponentDidMount, diferente do useLayoutEffect, ele executa assim que o componente é renderizado, normalmente é utilizado para fazer chamadas para o servidor ou fazer algum cálculo com props passados.

componentWillUpdate
useEffect(() => {
…
}, [variavel])
O componentWillUpdate pode ser feito tanto pelo useLayoutEffect quanto pelo useEffect, desde que tenha uma variável no array de dependências e, à partir da primeira execução, os 2 atuarão como componentWillUpdate, sempre executando quando essa variável mudar.

componentWillUnmount
useEffect(() => {
return () => {
…
}
},[])
Diferente do que muitas pessoas pensam, também existe a representação do componentWillUnmount em hooks, que é retornar uma função dentro do useEffect! dessa forma essa função dentro do return só será executada quando o componente estiver desmontando. É bastante usado para clearTimeout, clearInterval ou para enviar informações de acesso daquele componente para outro lugar.

# Iterando sobre string

Type 'string' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher

const [minutoDezena, minutoUnidade] = String(minutos);

# Recursiva

```tsx
function regressiva(contador = 0) {
  setTimeout(() => {
    if (contador > 0) {
      setTempo(contador - 1);
      return regressiva(contador - 1);
    }
  }, 1000);
}
```

# testar em functional component useID

# svg no css

````scss
.concluido {
      display: block;
      background-image: url('../../../assets/img/check-mark.svg');
      background-repeat: no-repeat;
      background-size: 38px 38px;
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      width: 42px;
      height: 43px;
    }
    ```
    ```tsx
 {completado && <span className='concluido' aria-label='tarefa completa' /> }
 ```tsx
````

## && em funções

````tsx
 onClick={() =>
       !completado &&
       selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
     }
      ```
````
