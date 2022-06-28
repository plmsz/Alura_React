INSERT INTO [TABELA DE PRODUTOS]
    (
    [CODIGO PRODUTO],
    [NOME DO PRODUTO],
    EMBALAGEM,
    TAMANHO,
    SABOR,
    [PRECO DE LISTA]
    )
    VALUES
    ('1040107','Light - 350 ml - Melância','Lata','350 ml','Melância',4.56),
    ('1037797','Clean - 2 Litros - Laranja','PET','2 Litros','Clean',16.00),
    ('1000889','Sabor da Montanha - 700 ml - Uva','700 ml',' Uva','Garrafa',6.31),
    ('544931', 'Frescor do Verão - 350 ml - Limão', 'PET', '350 ml','Limão',3.20),
    ('1078680', 'Frescor do Verão - 470 ml - Manga', 'Lata', '470 ml','Manga',5.18);

UPDATE [TABELA DE PRODUTOS] 
SET [EMBALAGEM] = 'Lata',
[PRECO DE LISTA] = 2.46
WHERE [CODIGO PRODUTO] = '544931'

UPDATE [TABELA DE PRODUTOS]
SET [EMBALAGEM] = 'Garrafa'
WHERE [CODIGO PRODUTO] = '1078680'



INSERT INTO [TABELA DE VENDEDORES]
(
    [MATRICULA], 
    [NOME], 
    [PERCENTUAL COMISSÃO]
)
VALUES
('00235','Márcio Almeida Silva',0.08),
('00236','Cláudia Morais',0.08);

UPDATE [TABELA DE VENDEDORES]
SET [PERCENTUAL COMISSÃO] = 0.11
WHERE [MATRICULA] = '00235';

UPDATE [TABELA DE VENDEDORES]
SET [NOME] = 'Cláudia Morais Sousa'
WHERE [MATRICULA] ='00236'

-- Márcio Almeida Silva (00235) recebeu aumento e sua comissão passou a ser de 11%

-- Cláudia Morais (00236) reclamou que seu nome real é Cláudia Morais Sousa.

DELETE FROM [TABELA DE PRODUTOS]
WHERE [CODIGO PRODUTO] = '1078680'

DELETE FROM [TABELA DE VENDEDORES] WHERE [MATRICULA] = '00235';