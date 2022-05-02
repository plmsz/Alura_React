const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(seletorAudio) {
	const elemento = document.querySelector(
		`#som_tecla_${seletorAudio.toLowerCase()}`
	);

	if (elemento && elemento.localName === "audio" ) {
		elemento.play();
	} else {
		console.log("Elemento não encontrado");
	}
}

listaDeTeclas.forEach((element) => {
	element.addEventListener("click", (ev) => {
		const teclaTextContent = ev.target.textContent;

		tocaSom(teclaTextContent);
	});
	element.addEventListener("keydown", ({ key, code, target }) => {
		if (key === "Enter" || code === "Space") {
			target.classList.add("ativa");
		}
	});
	element.addEventListener("keyup", ({ target }) => {
		target.classList.remove("ativa");
	});
});
