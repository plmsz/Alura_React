import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Conta.css';

const Conta = ({ saldo, realizarTransacao }) => {
    const [valores, atualizarValores] = useState({ transacao: '', valor: 0 });
    const [erro, setErro] = useState(true);

    useEffect(() => {
        setErro(false);
    }, [valores.valor, valores.transacao]);


    function handleChange(e) {
        const { name, value } = e.target;
        const valoresAtualizados = { ...valores, [name]: value };
        atualizarValores(valoresAtualizados);
    }

    function handleCheck(e) {
        e.preventDefault();
        if (valores.valor <= 0 || valores.transacao === '') {
            setErro(true);
            return;
        }
        setErro(false);
        handleSubmit(e);

    }
    function handleSubmit(e) {
        const dataTransacao = new Date().toLocaleDateString('pt-br');
        realizarTransacao({ ...valores, data: dataTransacao });
        atualizarValores({ transacao: '', valor: 0 });
    }

    return <div className="Conta-header">
        <h2>Conta</h2>
        <p>Saldo: <span data-testid="saldo-conta" className="Saldo-valor">{`R$ ${saldo}`}</span></p>
        <form onSubmit={handleCheck}>
            <div>
                <label>
                    Depósito
                    <input
                        type="radio"
                        name="transacao"
                        value="deposito"
                        onChange={handleChange}
                        data-testid="transacao"
                        checked={valores.transacao === 'deposito'}
                    />
                </label>
            </div>

            <div>
                <label>
                    Saque
                    <input
                        type="radio"
                        name="transacao"
                        value="saque"
                        data-testid="transacao"
                        onChange={handleChange}
                        checked={valores.transacao === 'saque'}
                    />
                </label>
            </div>

            <label>Valor:</label>
            <input
                type="number"
                name="valor"
                value={valores.valor}
                data-testid="valor"
                onChange={handleChange}
            ></input>

            <div>
                <button type="submit"
                    disabled={erro}>
                    Realizar operação
                </button>
            </div>
        </form>
    </div>;
};

Conta.defaultProps = {
    saldo: 0,
};

Conta.propTypes = {
    saldo: PropTypes.number,
};

export default Conta;
