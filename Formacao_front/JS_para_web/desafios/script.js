/* Um script que percorra a lista de teclas do AluraFone, e ao clicar em qualquer tecla do teclado, imprima o valor no campo Digite seu telefone. */
const botoesLista = document.querySelectorAll("input[type=button]");
const visor = document.querySelector("input[type=tel]");

// for (let i = 0; i < botoesLista.length; i++) {
//     botoesLista[i].onclick = function () {
//         visor.value += botoesLista[i].value
//     }
// }

botoesLista.forEach((tecla) => {
	tecla.addEventListener("click", (e) => {
		visor.value += e.target.value;
	});
    tecla.addEventListener('keydown',({code,target})=>{
        console.log(code)
        if(code === 'Enter' || code === 'Space'){
            target.classList.add('ativa')
        }
    })
    tecla.addEventListener('keyup',({target})=>{
        target.classList.remove('ativa')
    })
});
