import React, { useState } from 'react';
import style from './Formulario.module.scss';
import { Botao } from '../Botao';
import { ITarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid';
interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}
export function Formulario({ setTarefas }: Props) {
  const [state, setState] = useState({
    tarefa: '',
    tempo: '00:00',
  });
  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        ...state,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setState({
      tarefa: '',
      tempo: '00:00',
    });
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor={style.tarefa}>Adicione nova tarefa</label>
        <input
          onChange={(e) => setState({ ...state, tarefa: e.target.value })}
          value={state.tarefa}
          type='text'
          name='tarefa'
          id='tarefa'
          placeholder='O que você quer estudar'
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor='time'>Tempo</label>
        <input
          onChange={(e) => setState({ ...state, tempo: e.target.value })}
          type='time'
          step='1'
          name='time'
          value={state.tempo}
          id='time'
          min='00:00:00'
          max='01:30:00'
          required
        />
      </div>
      <Botao type='submit'>Adicionar</Botao>
    </form>
  );
}
