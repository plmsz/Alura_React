import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import styled from "styled-components";
import { Box, Icone, Saldo, Botao, Detalhe, IconeTema } from "../ui/index";
import { extratoLista } from "../../info";

const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };
  // eu que calculei o saldo
  const income = extratoLista.income.reduce(
    (acc, curr) => parseInt(acc) + parseInt(curr.value),0
  );
  const expanses = extratoLista.updates.reduce(
    (acc, curr) => parseInt(acc) + parseInt(curr.value),0
  );
  const balance = (income - expanses) / 100;

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> {balance}{" "}
          </Saldo>
        ) : null}
      </div>

      <Botao className="btn" onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
