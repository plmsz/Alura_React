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

# Quantifier ? opcional
123.456.789-00
98765432100
\d{3}\.?\d{3}\.?\d{3}-?\d{2}

Pode usar {0,1} também

## Classe
\d (classe de carecteres)
[0-9] ( mesma coisa de \d )

\d{3}\.?\d{3}\.?\d{3}[-.]?\d{2}    (tanto o ponto como o traço, ambos opcionais)

987.654.321.00
123.456.789-00
98765432100


No <code>for</code>, o valor de <code>i</code> começa de zero e é incrementado a cada volta enquanto <code>i < 10</code>, portando o bloco de código do for é executado 10 vezes.

### Procurando o range de 1 a 3 E 6 a 9
[1-36-9]

0123456789

## white space
\s+

## Quantifiers
?       ( zero ou uma vez )
*       ( zero ou mais vez )
+       ( uma ou mais vezes )

{n}     ( exatamente n vezes)
{n,}    ( no mínimo n vezes )
{n,m}   (no mínimo n vezes, no máximo m vezes)

## Procurando data em um formato específico
[1-3]?\d\s+de\s+[A-Z][a-zç]{3,9}\s+de\s+[1-2]\d{3}

[1-3]?\d "Pode existir ou não um número entre 0 e 3 (ou seja 0, 1, 2, 3) e na sequência virá qualquer outro dígito."
[a-zç] letras minusculas incluindo o ce ce
21 de Maio de 1993
11 de Abril de 1995
28 de Dezembro de 1991
1 de Março de 2001

## Procurando um horário específico
19h32min16s
[0-9]{2}h[0-9]{2}min[0-9]{2}s
\d{2}h\d{2}min\d{2}s

00h00min00s

[2](?=[0-3])\dh|[0-1][0-9]h[0-5][0-9]min[0-5][0-9]s
mais específico o | é o "ou"

## Procurando placa de um carro
KMG-8089

[A-Z]{3}-\d{4}

## Procurando nomes e as notas dos alunos que tiraram de 7.2 a 7.9
9.8 - Robson, 7.1 - Teresa, 4.5 - Armênio, 6.5 - Zulu, 7.7 - Stefania, 7.8 - João, 5.0 - Romeu, 7.2 - Pompilho, 3.1 - Reinaldo, 7.3 - Bernadete, 7.7 - Cinério 

7\.[2-9]\s+-\s+[A-Z][a-zã]+

7\.[2-9]\s+-\s+[^,]+ ([^,]+ que pega qualquer dígito que não seja uma vírgula, seja ele letra ou número)