var DIA = "[0123]?d";
var DE = "s+des+";
var MES = "[A-Za-z][a-zç]{1,8}";
var ANO = "[12]d{3}";

var stringRegex = DIA + DE + MES + DE + ANO;
var objetoRegex = new RegExp(stringRegex, "g");

const str = "11 de Abril de 1995";
const str2 = "28 de Setezembro de 2023";

/* Não funfionou */
var target = objetoRegex.exec(str); //retorna um array com resultado
console.log(target);
var target2 = objetoRegex.test(str2); // retorna true ou false se existe o padrãp
console.log(target2);
