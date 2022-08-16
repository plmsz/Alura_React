import React from 'react';
import style from './Formulario.module.scss';
import { Botao } from '../Botao';
import { ITarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid';

export class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: '',
    tempo: '00:00',
  };
  adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        ...this.state,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    this.setState({
      tarefa: '',
      tempo: '00:00',
    });
  }
  render(): React.ReactNode {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor={style.tarefa}>Adicione nova tarefa</label>
          <input
            onChange={(e) =>
              this.setState({ ...this.state, tarefa: e.target.value })
            }
            value={this.state.tarefa}
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
            onChange={(e) =>
              this.setState({ ...this.state, tempo: e.target.value })
            }
            type='time'
            step='1'
            name='time'
            value={this.state.tempo}
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
}
