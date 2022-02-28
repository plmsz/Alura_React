import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { busca, buscaFoto } from "../api/api";
import "../assets/css/post.css";

const Post = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	let navigate = useNavigate();
	const [src, setSrc] = useState();

	useEffect(() => {
		buscaFoto(setSrc);
		busca(`/posts/${id}`, setPost).catch(() => {
			navigate("/404");
		});
	}, [id]);

	return (
		<main className="container flex flex--centro">
			<article className="cartao post">
				<h2 className="cartao__titulo">{post.title}</h2>
				{Object.values(post).length !== 0 && (
					<img src={src} alt="Foto de cachorro" />
				)}
				<br />
				<p className="carta__texto">{post.body}</p>
			</article>
		</main>
	);
};

export default Post;
