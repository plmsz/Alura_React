# Grupos de Comando SQL
## DDL - Data Definition Language
É a parte da linguagem SQL que permite a manipulação das estruturas do banco de dados. Então, por exemplo, criar um banco de dados, criar uma tabela, criar um índice, apagar uma tabela, alterar o índice, alterar a política de crescimento de uma tabela ou de um índice.

## DML - Data Manipulation Language
O DDL é um grupo de comandos que tem como objetivo realmente dar manutenção aos dados do banco de dados, ou seja, incluir dados, alterar dados, excluir dados, que estão dentro da estrutura de banco de dados, que foi criado pelos comandos DDL. Então os comandos DML não mudam a estrutura do banco, mudam o conteúdo que está armazenado dentro da estrutura do banco.

Os principais comandos DML são Select, Insert, Update e Delete.

## DCL - Data Control Language

Os DCLs são grupos de comandos que permitem administrar o ambiente do banco de dados. E quando eu falo administrar o ambiente eu não estou falando da estrutura do banco, mas administrar, por exemplo, o acesso aos usuários, gerenciar o que cada usuário pode olhar ou não.

Eu posso gerenciar um banco de dados a nível de estrutura nos DCLs, mas não em criar as estruturas, mas dizer por exemplo como é que eu vou armazenar tal tabela no disco, qual vai ser a política de crescimento daquela tabela ao longo do tempo, na medida em que dados forem sendo incluídas nas tabelas. Administro os processos que estão sendo executados, faço controle de logs, tudo isso está dentro do controle de linguagem DCL.

Os principais comandos DCL são Grant e Revoke.