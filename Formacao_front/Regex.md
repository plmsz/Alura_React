## Exemplo de regex
- Encontrar todas as divs com qualquer contéudo
<div .*>

#Regex library
https://regex101.com/library?orderBy=MOST_RECENT&search=

# meta caracteres

Existem alguns caracteres que possuem um significado especial para o regex engine. Especial significa que o regex engine não interpreta o valor literal e sim diferente

. "ponto" que significa qualquer char
* "asterisco" que serve para definir uma quantidade de chars, zero ou mais vezes
{ e }  "chaves" que servem para definir uma quantidade de caracteres específicas que é desejado encontrar
Por exemplo:

a{2} letra a 2 vezes. ex: s**aa**raha
\d* a partir de um digito zero ou mais vezes
^ negação
\w  a-z, A-Z, 0-9, incluindo _

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

## Quantifiers
?       ( zero ou uma vez )
*       ( zero ou mais vez )
+       ( uma ou mais vezes )

{n}     ( exatamente n vezes)
{n,}    ( no mínimo n vezes )
{n,m}   (no mínimo n vezes, no máximo m vezes)

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

\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b

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

## Classes de char
[0-9] ( mesma coisa de \d )
\d (todos os dígitos)
[A-Z] letras de A a Z
\s whitespace
\w   wordhchar [a-zA-Z0-9_]


\d{3}\.?\d{3}\.?\d{3}[-.]?\d{2}    (tanto o ponto como o traço, ambos opcionais)

987.654.321.00
123.456.789-00
98765432100


No <code>for</code>, o valor de <code>i</code> começa de zero e é incrementado a cada volta enquanto <code>i < 10</code>, portando o bloco de código do for é executado 10 vezes.

### Procurando o range de 1 a 3 E 6 a 9
[1-36-9]

0123456789

## white space
\s   é um atalho para [ \t\r\n\f].
\s+ um ou mais whitespace


## Procurando data em um formato específico
[1-3]?\d\s+de\s+[A-Z][a-zç]{3,8}\s+de\s+[1-2]\d{3}

[1-3]?\d "Pode existir ou não um número entre 0 e 3 (ou seja 0, 1, 2, 3) e na sequência virá qualquer outro dígito."
[a-zç] letras minusculas incluindo o ç
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

7\.[2-9]\s+-\s+[A-Z][a-zã]+  ( apenas o til )

7\.[2-9]\s+-\s+[A-Z][a-zÀ-ú]+ (todos os acentos)

7\.[2-9]\s+-\s+[^,]+ 
( [^,]+  que pega qualquer dígito que não seja uma vírgula, seja ele letra ou número )  


## Procurando nomes e as notas dos alunos que tiraram mais de 7.5
10 - Bruce, 9.5 - Miranda, 7.9    - Bob, 10 - Zimbabue, 7.5 - Bety 

7\.[5-9]\s+-\s+[A-Z][a-zà-ú]+
[7]\.[5-9]\s+- \w+  

## Encontre apenas com as palavras específicas
Encontre GARROTE, SERROTE e ROTEIRO: 

BALEIRO GARROTE SERROTE GOLEIRO ROTEIRO 
\w*ROT\w+  ( incorreto pois seleciona maiusculas e minusculas)
[A-Z]*ROT[A-Z]+ (selciona maiusculas)

### Caracteres "especiais" dentro de classes
A grande maioria de meta-chars são valores literais na definição da classe (dentro de []).
Apenas os caracteres \ (barra invertida), - (hífen) e ^ (circunflexo) realmente são meta-chars dentro de uma classe.

a+a+
[a+]  (encontra 4 matchs)
[a+]+  (encontra 1 match)

?classes+poderosas*
[a-z?*+]+ 

## Encontrando um username
O username precisa ser da seguinte forma:

O limite é de 10 caracteres;
O primeiro caractere deve ser uma letra do alfabeto, não pode ser um número;
A partir do segundo caractere podemos ter letras maiúsculas, minúsculas e números;

Au12345678
bOYGhI9PjV

8Pjuygvyu&
bPjuygvyu_
9U34567890
0aaaaaaaaa9
bPjuygvyuzz
*yguygyujg
 
^[A-Za-z][A-Za-z0-9]{0,9}$ (ínicio e fim da string)
^([a-zA-Z][a-zA-Z0-9]{0,9})$
   (várias vezes em  uma string)

## Âncoras
Âncoras marcam uma posição específica no alvo, por isso não é possível combiná-las com um quantifier.

\b  ( word boundary encontra o termo desde que não esteja junto a um wordchar [a-zA-Z0-9_] )
\B  ( Non-word-boundary )
^   ( inicio do alvo)
$   ( fim do alvo )

denise teste, 987.654.321.00,28 de Dezembro de 1991,(31)45562712,SCS Qd. 8 Bl. B-50,11,70333-900,Rio Grande
\bde\b  ( encontra a palavra 'de')

a aa aaa aaaa aa aaa_ aaa-
\baaa\b      (encontra uma sequencia de 'aaa' e em'aaa-' )


http://127.0.0.1:3003/Formacao_front/Regex/index.html

^http.+\.html  ( inicia com http, pode ter quarlquer caractere 1 ou mais vezes e termina com .html)


## Encontrando apenas o número do cpf
111.111.111-11
111.111.111-11 é o número do meu CPF
CPF: 111.111.111-11

^\d{3}.\d{3}.\d{3}-\d{2}$  (dá match apenas com a primeira linha)

## Sabendo que o erro sempre começa com a expressão Caused by:, faça uma regex que capture-o.
Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure

^Caused by:.+

## Encontrando datas
Data: 02/09/1964
Data:02/09/1964

^Data:[\s]?[0-9]{2}/[0-9]{2}/[0-9]{4}

português proporcional compor
\Bpor\B (dá match com proporcional a silaba por deve aparecer dentro de uma palavra, nunca no inicio ou fim )

## URLs epsecíficas  

Não queremos que tenha nada depois do número da resposta, e então colocamos a âncora $. A URL abaixo é aceita:

https://cursos.alura.com.br/courses/expressoes-regulares2/sections/3/exercises/15179/answer/4766568

Porém essa não:

https://cursos.alura.com.br/courses/expressoes-regulares2/sections/3/exercises/15179/answer/4766568/aluno

(.*/exercises/\d+/answer/\d+)$

# Grupos
João Fulano,123.456.789-00,21 de Maio de 1993,(21) 3079-9987,Rua do Ouvidor,50,20040-030,Rio de Janeiro

( )  
## Encotrar partes da data
([1-3]?\d)\s+de\s+([A-Z][a-zç]{3,8})\s+de\s+([1-2]\d{3})

Encontra 3 grupos : 21 ||| Maio ||| 1993

### Encontrar partes de uma data com exceção de grupos

João Fulano,123.456.789-00,21 Maio 1993, 14 Abril 2017, (21) 3079-9987,Rua do Ouvidor,50,20040-030,Rio de Janeiro

Non-capturing group (?:)
(?:de\s+)?  (  não deve devolver o grupo formado pela preposição de e por um \s  )

([1-3]?\d)\s+(?:de\s+)?([A-Z][a-zç]{3,8})\s+(?:de\s)?([1-2]\d{3})

Encontra 6 grupos  21  Maio  1993 ||| 14  Abril  2017

### Encontra os dígitos verificadores do cpf

123.456.789-00 12345678989 123-456-789-21

\d{3}[-.]?\d{3}[-.]?\d{3}[-.]?(\d{2})

http://www.goulart.pro.br/cbasico/Calculo_dv.htm

## Encontrar mensagem encriptografada

 - Cada letra da palavra recebe o prefixo Z, mas não apenas isso. A letra Z é seguida de um número com um ou mais dígitos.

Z171PZ7AZ23PZ7819AZ78GZ1AZ99IZ34O

Z\d+(\w)   nossa expressão irá selecionar todos os Z seguidos de um número que é seguido de qualquer letra ou número, inclusive _. Contudo, o \w esta entre parênteses e define um grupo.

Z171P ||| P | Z7A ||| A | Z23P ||| P | Z7819A ||| A | Z78G ||| G | Z1A ||| A | Z99I ||| I | Z34O ||| O

## Verificar os arquivos de log para descobrir possíveis problemas no sistema.
- Queremos usar uma Regex que possa encontrar essa linha e separar em dois grupos, Causa e Descrição para simplificar a leitura:

Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure

(Caused[\s\w:.]+):([\w\s]+)

Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure

Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException ||| Communications link failure

## Extraindo o email
O email deve ter um @ e terminar com caelum.com.br ou alura.com.br. O nome do usuário (tudo antes do @) tem apenas letras minúsculas, pode ter um número no final e tem de 5 a 15 caracteres.

Por exemplo:

super.mario@caelum.com.br extrai super.mario
donkey.kong@alura.com.br extrai donkey.kong
bowser1@alura.com.br extrai bowser1

([a-z.]{4,14}[a-z0-9]{1})@(?:alura.com.br|caelum.com.br)

Solução:
([a-z.]{4,14}[a-z\d])@(?:caelum.com.br|alura.com.br)

## Validar email

use os âncoras ^ e $;
analise parte por parte:
primeiro focando na parte local (tudo antes do @);
depois no domínio (tudo depois do @);
você pode repetir um grupo:
por exemplo, (([a-z]+)\.)+ significa vários caracteres minúsculos seguido por ponto, uma ou mais vezes.

donkey.kong@kart.com.br
bowser1@games.info 
super-mario@nintendo.JP
TEAM.donkey-kong@MARIO.kart1.nintendo.com

toad@kart...com
wario@kart@nintendo.com
yoshi@nintendo
daisy@nintendo.b
..@email.com

Solução : 
^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$

a regex usa âncoras no início ^ e fim $ para garantir o match inteiro;
antes do @, temos: ^([\w-]\.?)+
definimos uma classe com word-chars e hífen, seguido por um ponto opcional: [\w-]\.?
essa classe pode se repetir uma ou mais vezes, então criamos um grupo e + ao final: ([\w-]\.?)+
depois do @, temos:
([\w-]+\.)+, que é bastante parecido com o anterior ao @, porém com o . obrigatório,
([A-Za-z]{2,4})+$, que é o final da nossa regex, seleciona o domínio do email, como br, com, us. O mínimo de letras dessa parte final devem ser 2 e no máximo 4.

# Diferença entre o ^, $ e o \b:

Suponha que temos um arquivo com várias linhas, e temos a seguinte regex ^a.*, ela só irá dar match se a linha iniciar com "a".

Assim como .*a$ só irá dar match se a linha terminar com a letra "a".

Agora se tivermos a regex \ba irá dar match com todas as palavras que iniciarem com a letra "a" indiferente de estar no inicio ou no final de uma linha. Assim como a\b irá casar somente palavras que terminem com "a".

# Endereço
um arquivo com diversas linhas, nas quais são necessárias as informações: Nome, Rua, Número e CEP.
As outras informações também devem ser separadas para futuros serviços dos correios, porém não precisamos capturá-las neste momento.

Nico Steppat|14/05/1977|Rua Buarque de Macedo|50|22222-222|Rio de Janeiro
Romulo Henrique|14/06/1993|Rua do Lins|120|12345-322|Rio de Janeiro
Leonardo Cordeiro|01/01/1995|Rua de Campo Grande|01|00001-234|Rio de Janeiro

//TODO: Revisar

ERRADO:
^([A-Z][a-zà-ú]+\s[A-Z][a-zà-ú]+)|(?:[0-9]{2}\/[0-9]{2}\/[0-9]{4})|([A-Za-zÀ-ú+\s]+)|([0-9]+)|([0-9]{4}-?[0-9]{3}|)([A-Za-zÀ-ú+\s]+)

CORRETO:
^([\w\s]+)\|(?:\d\d\/\d\d\/\d\d\d\d)\|([\w\s]+)\|(\d{1,4})\|(\d{5}-\d{3})\|(?:[\w\s]{10,})$

Nome era necessário capturar, então iremos criar um grupo ([\w\s]+)\|

Data de nascimento não era necessário, por isso, deixaremos esse grupo como non-capturing group (?:\d\d\/\d\d\/\d\d\d\d)\|

Rua Onde Mora é necessário capturar, e por isso, criamos um grupo normal: ([\w\s]+)\|

Número é necessário capturar, portanto: (\d{1,4})\|

CEP é necessário capturar, e podemos criar um grupo dessa maneira: (\d{5}-\d{3})\|

Cidade é a nossa última análise, e não é necessária. Portanto, basta adicionarmos ?: para deixar o seu grupo não-capturável: (?:[\w\s]{10,})