import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionado: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Lista de estudos</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item {...item} key={item.id} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
