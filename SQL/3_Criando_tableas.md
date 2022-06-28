# CREATE TABLE

- Ao usar colchetes no campo ou no nome da tabela você poderá usar espaços e e acentos

## [Criando tabelas por uma nova consulta](./03_create_table.sql)

## Usando o assistente

No SQL Server Management Studio (SSMS) e clique na palavra Tabelas e com o botão direito do mouse escolha Novo e Tabela.

1. No SSMS crie a tabela com os seguintes parâmetros:

Nome da tabela: TABELA DE PRODUTOS

Colunas (Campos):

CODIGO DO PRODUTO - varchar(20)

NOME DO PRODUTO - varchar(150)

EMBALAGEM - varchar(50)

TAMANHO - varchar(50)

SABOR - varchar(50)

PRECO DE LISTA - smallmoney

2. Acompanhe os passos no vídeo e complete os parâmetros da tabela.

3. No SSMS abra uma nova consulta e confirme se está na base de dados SUCOS_VENDAS.

-- Excluir tabela

```sql
DROP TABLE [TABELA DE CLIENTES_2]
```

Qual o comando para apagar uma tabela chamada FABRICA no banco de dados Suco_de_Frutas? Lembre-se que queremos, através de comando, ter certeza que estamos apagando a tabela no banco de dados correto.

```sql
USE Suco_de_Frutas
DROP TABLE [FABRICA];
```
