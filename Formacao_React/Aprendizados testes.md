# Render, getByText, toBeInTheDocument, screen, expect

<code> 

    import {render} from '@testing-library/react'

    test('renders a message', () => {
    const {container, getByText} = render(<Greeting />)
    expect(getByText('Hello, world!')).toBeInTheDocument()
    })
</code>

O render é uma função que o React Testing Library nos fornece para renderizar o componente como um elemento do DOM. Por padrão, esse elemento é renderizado dentro de um elemento raíz, chamado container. Já para acessar um componente, a biblioteca nos fornece o objeto screen, que possui todas as possíveis queries suportadas para buscar elementos no DOM.

## container

 Se você fornecer seu próprio HTMLElement container por meio dessa opção, ele não será anexado ao arquivo document.body automaticamente.

Por exemplo: Se você estiver testando a unidade de um table body, ele não pode ser filho de um div. Nesse caso, você pode especificar a table como o render container.
<code>
    
    const table = document.createElement('table')

    const {container} = render(<TableBody {...props} />, {
    container: document.body.appendChild(table),
    })
</code>
# Snapshot
- Digite u - para atualizar o snapshot

<code>
    it('renderiza corretamente', () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
<code>

# FireEvent

<code>

    fireEvent.change(input, {target: {value: '2020-05-24'}})
</code>

- React Testing Library é que ele simula um comportamento muito próximo do que o usuário está fazendo, então o foco dele é em como o usuário interage com a aplicação. 
- Mas também causa algumas situações em que você tem que pensar um pouco mais, como por exemplo **input tipo radio**, que no código usamos um **change** para disparar o evento, mas no teste vamos usar o **click**,

# Funções async
A query findBy retorna uma promise que é completada quando o elemento é encontrado, dessa forma nosso teste espera até que o componente esteja disponível.


Cheatsheet
https://testing-library.com/docs/react-testing-library/cheatsheet

# Queries
https://testing-library.com/docs/queries/about/#queries

# Dúvida:
Warning: An update to App inside a test was not wrapped in act(...).
https://cursos.alura.com.br/forum/topico-warning-an-update-to-app-inside-a-test-was-not-wrapped-in-act-169890