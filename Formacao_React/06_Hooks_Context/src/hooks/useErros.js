import { useState } from 'react';

function useErros(validacoes) {
    const estadoInicial = criarEstadoIncial(validacoes);
    const [erros, setErros] = useState(estadoInicial);

    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar() {
        for (const campo in erros) {
          if (!erros[campo].valido) {
            return false;
          }
        }
        return true;
      }
    

    return [erros, validarCampos, possoEnviar];
}
function criarEstadoIncial(validacoes) {
    const estadoInicial = {};
    for (let campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: "" };
    }
    return estadoInicial;
}

export default useErros;