import React, { useState, useEffect } from "react";
import { Route, useParams, Routes, Link } from "react-router-dom";
import "../assets/css/blog.css";
import ListaCategorias from "./ListaCategorias";
import ListaPost from "./ListaPost";
import { busca } from "../api/api";
import SubCategoria from "../paginas/SubCategoria";

const Categoria = () => {
	const { id } = useParams();

	const [subcategorias, setSubCategorias] = useState([]);

	useEffect(() => {
		busca(`/categorias/${id}`, (categoria) => {
			setSubCategorias(categoria.subcategorias);
		});
	}, [id]);

	return (
		<>
			<div className="container">
				<h2 className="titulo-pagina">Pet Notícias</h2>
			</div>

			<ListaCategorias />
			<ul className="lista-categorias container flex">
				{subcategorias.map((subcategoria) => (
					<li
						className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
						key={subcategoria}
					>
						<Link to={`${subcategoria}`}>{subcategoria}</Link>
					</li>
				))}
			</ul>
			<Routes>
				<Route index element={<ListaPost url={`/posts?categoria=${id}`} />} />
				<Route path={":subcategoria"} element={<SubCategoria />} />
			</Routes>
		</>
	);
};

export default Categoria;
