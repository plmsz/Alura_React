import React, { useState } from 'react';

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/ui/temas";
import { BotaoTema } from "./Components/ui";
import SwitcherTema from './Components/SwitcherTema';

function App() {
  const [tema, setTema] = useState(true)
  const toggleTema = () => {
    setTema((tema)=> !tema)
  }
  return (
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <BotaoTema onClick={toggleTema}>
          <SwitcherTema tema={tema}/>
        </BotaoTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
  );
}

export default App;
