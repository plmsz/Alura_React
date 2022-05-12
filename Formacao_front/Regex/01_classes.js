var objetoRegex = /[0123]?\d\s+de\s+[A-Za-z][a-zç]{1,8}\s+de\s+[12]\d{3}/;

const str = "11 de Abril de 1995";
const str2 = "28 de Setezembro de 2023";

var target = objetoRegex.exec(str); //retorna um array com resultado
console.log(target);

var target2 = objetoRegex.test(str2); // retorna true ou false se existe o padrão
console.log(target2); //false

/* [
    '11 de Abril de 1995',
    index: 0,
    input: '11 de Abril de 1995',
    groups: undefined
  ] */
