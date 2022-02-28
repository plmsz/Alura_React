import React from "react";
import { Route, useParams, useMatch, Routes } from "react-router-dom";
import "../assets/css/blog.css";
import ListaCategorias from "./ListaCategorias";
import ListaPost from "./ListaPost";

const Categoria = () => {
	const { id } = useParams();
	const { path } = useMatch();


	return (
		<>
			<div className="container">
				<h2 className="titulo-pagina">Pet Notícias</h2>
			</div>
			<ListaCategorias />
			{/* <Routes>
				<Route
					path={`categoria/bem-estar`}
					element={<ListaPost url={`/posts?categoria=${id}`} />}
				/>
			</Routes> */}
		</>
	);
};

export default Categoria;
