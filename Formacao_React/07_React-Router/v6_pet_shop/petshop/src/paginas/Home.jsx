import React from "react";
import ListaPost from "../components/ListaPost";
import Categorias from "../components/Categoria";

const Home = () => {
	return (
		<main>
			<Categorias />
			<ListaPost url={"/posts"} />
		</main>
	);
};

export default Home;
