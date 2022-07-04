document.querySelector('#cep').oninvalid = function() {
    this.setCustomValidity('')

    if(!this.validity.valid){
        this.setCustomValidity('Ops! Tem algo errado nesse campo.')
        this.parentElement.classList.add('contatoCampo--erro')
    }
}