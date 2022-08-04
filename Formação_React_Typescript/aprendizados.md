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
import * as React from "react";
import style from './Botao.module.scss'

export class Botao extends React.Component<{ texto: string}> {
	render() {
		return <button className={style.botao} type="submit">{this.props.texto}</button>;
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
    { tarefa: 'Javascript', tempo: '01:00:00' },,
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
   

# testar em  functional component useID

