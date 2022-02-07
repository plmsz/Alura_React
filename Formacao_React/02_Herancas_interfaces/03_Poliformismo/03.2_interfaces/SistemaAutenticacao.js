export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha)
    }
}
/* Ser autenticavel significa ter o método autenticar */

