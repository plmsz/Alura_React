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
