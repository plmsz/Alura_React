export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.senha == senha;
    }
}

//Um método static pode ser executado sem a necessidade de instanciar um objeto. Basicamente, não precisa usar a palavra reservada new.