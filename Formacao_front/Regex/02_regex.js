
var alvo = '11a22b33c';

// var exp = new RegExp('(\\d\\d)(\\w)', 'g');

var exp = /(\d\d)(\w)/g;
var resultado = null;

console.log(exp.test(alvo)) // true

while (resultado = exp.exec(alvo)) {
    console.log(resultado);  
    console.log(exp.lastIndex); 
}

/* Retorna
[ '11a', '11', 'a', index: 0, input: '11a22b33c', groups: undefined ]
3
[ '22b', '22', 'b', index: 3, input: '11a22b33c', groups: undefined ]
6
[ '33c', '33', 'c', index: 6, input: '11a22b33c', groups: undefined ]
9 
O primeiro já sabemos, que é a parte do target que atendeu nossa expressão regular. Os demais parâmetros equivalem ao padrão que colocamos para cada () da nossa expressão.
*/



/* 
Usa o objeto RegExp quando o regex é dinâmico, para regex fixas como no exemplo utiliza-se regular expression literal. 

Flags
g global
i case insensitive
*/