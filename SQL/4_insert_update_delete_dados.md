# Inserir dados

-Usa ponto para casa decimais

# Atualziar dados
~~~sql
UPDATE [TABELA DE PRODUTOS] 
SET [EMBALAGEM] = 'Lata',
[PRECO DE LISTA] = 2.46
WHERE [CODIGO PRODUTO] = '544931'

UPDATE [TABELA DE PRODUTOS]
SET [EMBALAGEM] = 'Garrafa'
WHERE [CODIGO PRODUTO] = '1078680'
~~~

## Para inserir dados na tabela usando o SSMS 

- clique com o botão direito do mouse e escolha a opção Editar 200 linhas superiores.
- Nesta opção é possível incluir os registros diretos na tabela.
- Siga os passos mostrados no vídeo para incluir os registros.

- Podemos alterar os registros de uma tabela existente. Para isso utilize o comando update como no exemplo abaixo:

~~~sql
UPDATE [TABELA DE PRODUTOS]
SET [EMBALAGEM] = 'Lata',
[PRECO DE LISTA] = 2.46
WHERE [CODIGO DO PRODUTO] = '544931'
~~~

- Da mesma maneira que podemos alterar podemos apagar dados de uma tabela. Usando o comando delete. Veja um exemplo abaixo:

# Excluir tablea

~~~sql
DELETE FROM [TABELA DE PRODUTOS]
WHERE [CODIGO DO PRODUTO] = '1078680'
~~~

# Excluir uma linha
~~~sql
DELETE FROM [TABELA DE PRODUTOS]
WHERE [CODIGO DO  PRODUTO] = '1078680'
~~~

# Ordem dos campos
- É possível não citar as colunas. Porém pode ocasionar erro, caso insira um campo em uma ordem diferente com tipo de dados diferentes

~~~sql
INSERT INTO [TABELA DE PRODUTOS]
    VALUES
    ('1040107','Light - 350 ml - Melância','Lata','350 ml','Melância',4.56)
~~~

-É possível mudar a orde dos campos, se citar as colunas

~~~sql
INSERT INTO [TABELA DE PRODUTOS]
    (
    [CODIGO PRODUTO],
    [NOME DO PRODUTO],
    EMBALAGEM,
    TAMANHO,
    [PRECO DE LISTA]
    SABOR,
    )
    VALUES
    ('1040107','Light - 350 ml - Melância','Lata','350 ml',4.56, 'Melância')
~~~

O campo de data deve ser sempre representado como yyyy-mm-dd (Ano, mês e dia separados por - e o mês e dia representados com dois dígitos).

Já o campo lógico é representado pelo tipo bit e seus valores são 1 para verdadeiro e 0 para falso.