import style from './Relogio.module.scss';
import { tempoParaSegundos } from './../../../common/utils/date';

export function Relogio() {

  return (
    <>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>
  );
}
