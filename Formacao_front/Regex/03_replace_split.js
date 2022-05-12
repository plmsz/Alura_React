var anoMesDia = '2007-12-31';
var exp = /-/g

var data = anoMesDia.replace(exp,'/')

console.log(data)

var arquivo = '100,200-150,200;20';
var exp2 = /[,;-]/

var csv = arquivo.split(exp2)
console.log(csv)

// No exemplo, o - ficou no final então acho que o browser deu um desconto e ignorou ele como range. Mas se vc fizer por exemplo /[,-;]/ não vai funcionar.