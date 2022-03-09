import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Home</h1>
    <Link to="/contato">Ir para contato</Link>
  </div>
);
const ContatoPage = () => (
  <div>
    <h1>Contato</h1>
    <Link to="/">Ir para home</Link>
  </div>
);

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/contato" element={<ContatoPage/>} />
    </Routes>
  </BrowserRouter>
);

export default Router;