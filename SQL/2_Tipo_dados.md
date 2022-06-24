Tipos de dados

# Numéricos exatos


|Tipo de dados | Intervalo      |  Armzenamento (bytes)|
|----------    |:-------------:|------:|
| bigint       |  -2^63 a 2^63-1 |  8 |
| int          |    -2^3 a 2^3-1 |  4 |
| smallint     | -2^15 a 2^15-1  |  2 |
| tinyint      | 0 a 255         |  1 |
    

## DECIMAL(p,s)
- p é a precisão que é o número total máximo de dígitos decimais que serão armazenados, tanto à esquerda quanto à direita do ponto decimal. 
A precisão varia de 1 a 38. A precisão padrão é 38.
- s é a escala que é o número de dígitos decimais que serão armazenados à direita do ponto decimal. A escala tem um intervalo de 0 a p (precisão).
 A escala pode ser especificada somente se a precisão for especificada. Por padrão, a escala é zero.

## money ou smallmoney
 O money tem uma variação grande, no valor negativo e positivo. E o smallmoney tem uma representação menor, por exemplo, ele não passa de -214748 e algumas casas decimais e de forma positiva 214748 por idades monetárias, digamos assim. Sempre terão 4 casas decimais.

 ## Números exatos o valor lógico.
  Não existe no SQL Server um tipo de dado lógico, existe um tipo de dado chamado BIT, que ele é 1 byte.
  E ele tem o valor 1 ou 0. E então nós usamos o tipo de dado BIT para representar os dados lógicos, de tal maneira que o 0 representa o falso e o 1 representa o verdadeiro.

# Numéricos aproximados
## FLOAT E REAL
Nesse caso não precisamos definir o número de casas decimais, ele tem uma precisão que é definida internamente pelo banco de dados. Esses tipos são o float e o real. A diferença é que o real é um float com tamanho 24. Esse N que definimos o float representa o número de bits que vai representar o número. Então dependendo do número de bits que o float vai representar, esse número vai ser maior ou menor.

# Data e hora

##  DATE
date, que representa uma data, simplesmente um dia. No SQL Server nós representamos o dia com o ano em 4 dígitos, um traço, o mês em 2 dígitos, mais um traço, e o dia em 2 dígitos: AAA-MM-DD. E o tipo date varia do dia 1 de janeiro do ano 1 ao dia 31 de dezembro do ano 9999.

##  DATETIME
AAAA-MM-DD HH:MM:SS.MMM. Então o ano vai variar, no datetime o limite maior e menor, o limite menor do ano não chega a ser o ano 1. O menor ano representado pelo datetime é 1753. Então ele varia de 1º de janeiro de 1753 até 31/12/9999.

## DATETIME2
0001-01-01 a 9999-12-31

## DATETIMEOFFSET
0001-01-01 a 9999-12-31
AAAA-MM-DD hh:mm:ss[.nnnnnnn] [{+|-}hh:mm]
Define uma data que é combinada a uma hora de um dia com base em um relógio de 24 horas, como datetime2, e adiciona o reconhecimento de fuso horário com base no UTC (Tempo Universal Coordenado ou Tempo Médio de Greenwich).

## SMALLDATE
900 é o menor ano, a 2079 e ele é um datetime, só que só representa hora e minuto, o segundo sempre é 00 e ele não tem milissegundos

## TIME 
nele eu só represento a hora. E como eu represento a hora, a precisão dos milissegundos no time é bem maior. Então eu represento os milissegundos entre 00000 e o número 99999

# Cadeia de caracteres
## CHAR
Char o tamanho é fixo, enquanto o varchar o tamanho é variável. O que significa ser fixo ou variável? Se eu digo que um campo tem tamanho char de 10 e gravo na tabela somente a letra A, ele vai gravar a letra A e 9 espaços, ou seja, ele sempre vai ocupar os 10 campos.
## VARCHAR
Dados de cadeia de caracteres de tamanho variável.
Para conjuntos de caracteres de codificação de byte único, como Latino, o tamanho de armazenamento é n bytes + 2 bytes e a quantidade de caracteres que pode ser armazenada também é n.

# Cadeias de caracteres unicode
## nchar e nvarchar
usa a tabela UTF-16,

# Cadeias de caracteres binárias
varbinary e binary
 Por exemplo, a instrução SELECT a seguir mostra que o valor inteiro 123456 é armazenado como um binário 0x0001e240:

SQL
SELECT CAST( 123456 AS BINARY(4) );  

# outros tipos de dados
 XML,  OGC,