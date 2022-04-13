//Pesquisei por conta própria como colocar um underline no link ativo
const anchors = document.getElementsByClassName("menu__link");

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function (event) {
        const current = document.getElementsByClassName("ativo")[0];

        current.classList.remove("ativo");

        event.target.classList.add("ativo");
    }, false);
}