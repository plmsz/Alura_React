import { useState } from 'react';
import style from './App.module.scss';
import Lista from '../components/Lista';
import { Formulario } from '../components/Formulario';
import { Cronometro } from '../components/Cronometro';
import { ITarefa } from './../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionado: ITarefa) {
    setSelecionado(tarefaSelecionado);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionado.id ? true : false,
      }))
    );
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro />
    </div>
  );
}

export default App;
