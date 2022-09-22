var campoEmail = document.querySelector('#email');
var sugestao = document.querySelector('#sugestao');

var domains = ['gmail.com', 'outlook.com', 'alura.com.br'];
var secondLevelDomains = ['hotmail'];
var topLevelDomains = ["com", "net", "org"];

campoEmail.addEventListener('blur', function () {
    Mailcheck.run({
        email: campoEmail.value,
        domains: domains,
        topLevelDomains: topLevelDomains,
        secondLevelDomains: secondLevelDomains,
        suggested: function (suggestion) {
            sugestao.style.display = 'inline-block';
            sugestao.textContent = 'Você quis dizer: ' + suggestion.full + '?';
            sugestao.parentElement.classList.add('contatoCampo--erro');
            campoEmail.classList.add('contatoCampo--validouErro');
            sugestao.setAttribute('tabindex','0');
            sugestao.setAttribute('role', 'alert');
        }
    });
});