-- TABELA DE CLIENTES
-- CPF do cliente
-- O nome completo do cliente
-- Endereço com Rua, bairro, cidade, estado e CEP
-- Data de nascimento
-- A idade
-- Gênero
-- O limite do crédito do cliente para ele comprar produtos na empresa
-- O volume mínimo de produtos que ele pode comprar
-- Se ele já realizou a primeira compra

CREATE TABLE [TABELA DE CLIENTES] 
([CPF] [CHAR] (11),
[NOME] [VARCHAR] (100),
[ENDERECO1] [VARCHAR] (150),
[ENDERECO2] [VARCHAR] (150),
[BAIRRO] [VARCHAR] (50),
[CIDADE] [VARCHAR] (50),
[ESTADO] [CHAR] (2),
[CEP] [CHAR] (8),
[DATA DE NASCIMENTO] [DATE],
[IDADE] [SMALLINT],
[SEXO] [CHAR] (1),
[LIMITE DE CREDITO] [MONEY],
[VOLUME DE COMPRA] [FLOAT],
[PRIMEIRA COMPRA] [BIT])

--Nome da tabela deve ser TABELA DE VENDEDORES.
--Vendedor tem como chave o número interno da matrícula (Nome do campo MATRICULA) que deve ser um texto de 5 posições.

--O nome do vendedor (Nome do campo NOME) deve ser um texto de 100 posições.

--% de comissão. Este campo (Nome do campo PERCENTUAL COMISSÃO) representa quantos % de comissão o vendedor ganha sobre cada venda.
CREATE TABLE [TABELA DE VENDEDORES]
([MATRICULA] [CHAR] (5),
[NOME] [VARCHAR] (100),
[PERCENTUAL COMISSÃO][FLOAT]
)

-- Excluir tabela

DROP TABLE [TABELA DE CLIENTES_2]

-- Usando o script
USE [SUCOS_VENDAS]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TABELA DE CLIENTES_3]') AND type in (N'U'))
DROP TABLE [dbo].[TABELA DE CLIENTES_3]
GO