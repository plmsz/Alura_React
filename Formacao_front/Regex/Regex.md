## Exemplo de regex
- Encontrar todas as divs com qualquer contéudo
<div .*>


# meta caracteres

Existem alguns caracteres que possuem um significado especial para o regex engine. Especial significa que o regex engine não interpreta o valor literal e sim diferente

. "ponto" que significa qualquer char
* "asterisco" que serve para definir uma quantidade de chars, zero ou mais vezes
{ e }  "chaves" que servem para definir uma quantidade de caracteres específicas que é desejado encontrar
Por exemplo:

a{2} letra a 2 vezes. ex: s**aa**raha
\d* a partir de um digito zero ou mais vezes

Lembrando também, se quisermos procurar pelo * ou . literalmente (sem significado especial), devemos utilizar o caractere \

## Exemplo 1 - CSV
João Fulano,123.456.789-00,21 de Maio de 1993,(21) 3079-9987,Rua do Ouvidor,50,20040-030,Rio de Janeiro
Maria Fulana, 98765432100,11 de Abril de 1995,(11) 933339871,Rua Vergueiro,3185,04101-300,São Paulo
denise teste, 987.654.321.00,28 de Dezembro de 1991,(31)45562712,SCS Qd. 8 Bl. B-50,11,70333-900,Rio Grande
15.123.321/8883-22

## Dígitos
Escapando um dígito
\d
Escapando um ponto
\.

### Encontrando um cpf
\d\d\d\.\d\d\d\.\d\d\d-\d\d

# Quantifier {}
\d{3}\.\d{3}\.\d{3}-\d{2}


### Encontrando um cnpj
15.123.321/8883-22
\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}

Observação: Dependendo um pouco da linguagem e regex engine que você usa, também pode ser necessário escapar o char /, ou seja, usando \/
\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}

### Encontrando IP - grupo com uma quantidade de algarismos
Cada grupo pode ter de um a três algarismos.
126.1.112.34

128.126.12.244

192.168.0.34

\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}

https://cursos.alura.com.br/forum/topico-permitir-e-_-em-regex-36543
https://cursos.alura.com.br/forum/topico-pattern-para-validar-um-ip-48552

### Encontrando um cep
\d{5}-\d{3}

### Encontrando telefones
(21) 3216-2345
(71) 99216-2345
(71) 993216285

\(\d{2}\) \d{4,5}-?\d{4}

? opcional