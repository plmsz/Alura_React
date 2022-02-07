export class SistemaAutenticacao {
	static login(autenticavel, senha) {
		if (SistemaAutenticacao.eAutenticavel(autenticavel)) {
			return autenticavel.autenticar(senha);
		}
		return false;
	}

	static eAutenticavel(autenticavel) {
		return (
			"autenticar" in autenticavel &&
			autenticavel.autenticar instanceof Function
		);
	}
}

//Operador in vai verificar se essa chave autenticar existe dentro desse objeto autenticavel
//DuckType
//  Não me interessa se ele é do tipo Cliente, do tipo Funcionario, do tipo ContaCorrente, me interessa se ele tem o método e a propriedade que eu quero utilizar, se ele tem aquilo, eu vou utilizar independentemente do tipo. Por isso nós falamos que é o duck typing, ele passa o teste do pato. Se ele tem a propriedade que eu quero usar, então eu vou usá-lo dessa maneira.
