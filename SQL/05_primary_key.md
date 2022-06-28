- Pode ter um ou mais campos como primary key

# CLUSTERED 

é um tipo de índice existentes no SQL Server, neste caso da aula, o instrutor está indicando que juntamente com a chave primária, será criado um índice.

Existem dois tipos de índice CLUSTERED e o NONCLUSTERED:

- Os índices do tipo CLUSTERED definem a ordem em que os dados são fisicamente armazenados em uma tabela
- Os índices NONCLUSTERED são armazenados em um local e os dados da tabela são armazenados em outro local
Assim, os índices do tipo CLUSTERED tem uma melhor performance para realizar buscas e os índices NONCLUSTERED tem uma melhor performance para inserções e atualizações, assim, podemos dizer que índices NONCLUSTERED podem ser utilizados quando a prioridade for inserções e atualizações mais eficientes (inserções e atualizações mais rápidas) das informações. Então, quando não informamos qual tipo índice queremos criar, por padrão, o SQL Server utiliza o tipo CLUSTERED.


# Excluindo valores não nulos

Na TABELA DE VENDEDORES dos exercícios anteriores há um registro com o campo PERCENTUAL COMISSÃO com valor NULL . Qual o comando para apagar esta linha?


O comando delete apaga linhas e usando a cláusula where identificamos a linha a ser apagada.
~~~sql
DELETE FROM [TABELA DE VENDEDORES] 
WHERE [PERCENTUAL COMISSÃO] IS NULL
~~~

# Alterando um coluna
ALTER TABLE [TABELA DE PRODUTOS]
ALTER COLUMN [CODIGO PRODUTO]
VARCHAR(20) NOT NULL


# Criar uma chave primária em uma tabela existente
O exemplo a seguir cria uma chave primária na coluna TransactionID do banco de dados do AdventureWorks.

~~~SQL

ALTER TABLE Production.TransactionHistoryArchive
   ADD CONSTRAINT PK_TransactionHistoryArchive_TransactionID PRIMARY KEY CLUSTERED (TransactionID);
~~~

# Criar uma chave primária em uma nova tabela
O exemplo a seguir cria uma tabela e define uma chave primária na coluna TransactionID do banco de dados do AdventureWorks.
~~~SQL

CREATE TABLE [dbo].[TABELA DE CLIENTES](
	[CPF] [char](11) NOT NULL,
	[NOME] [varchar](100) NULL,
	[ENDERECO1] [varchar](150) NULL,
 CONSTRAINT [PK_TABELA_DE_CLIENTES] PRIMARY KEY CLUSTERED 
)


~~~~