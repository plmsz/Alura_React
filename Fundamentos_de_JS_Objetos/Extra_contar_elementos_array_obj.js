function words(input) {
	let counts = {};
	input
		.toLowerCase()
		.match(/\w+/g)
		.forEach(function (word) {
			let count = counts.hasOwnProperty(word) ? counts[word] : 0;
			counts[word] = count + 1;
		});
	console.log(counts);
}

let WordCounter = function (text) {
	const result = Object.create(null);
	text.split(/\s+/).forEach(function (word) {
		if (word in result) result[word] += 1;
		else result[word] = 1;
	});
	console.log(result);
};
const countWords = (sentenca) => {
	const minuscula = sentenca.toLowerCase();
	const palavras = minuscula.match(/(\w+)('\w+)?/g);
	// \w (any word alphanumeric) + (one more preceding) '\w(caractere) ? (optional) g (global)
	const resultado = {};
	for (const item of palavras) {
		resultado[item] === undefined ? resultado[item] = 0 :
		resultado[item] += 1;
	}
	console.log(resultado);
};

words("testing 1 2 testing");
WordCounter("testing 1 2 testing");
countWords("testing 1 2 testing");