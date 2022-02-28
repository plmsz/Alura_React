import React from "react";
import "./assets/css/base/base.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./components/Cabecalho";
import Post from "./paginas/Post";
import Categorias from "./components/Categoria";

function App() {
	return (
		<Router>
			<Cabecalho />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/posts/:id" element={<Post />} />
				<Route path="/categoria/:id/*" element={<Categorias />} />
				<Route path="*" element={<Pagina404 />} />
			</Routes>
		</Router>
	);
}

export default App;
