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

# Instalação
1) No navegador procure por SQL SERVER download. Vá para a página www.microsoft.com/pt-BR/sql-server/sql-server-downloads e escolha a opção de desenvolvedor.

2) Baixe e execute o arquivo de instalação.

3) Escolha opção Personalizado.

4) Escolha o idioma e a localização da instalação. Clique em instalar.

5) Clique no botão Instalação. Escolha a primeira opção Nova instalação do SQL Server e na próxima tela clique em Avançar.

6) Aceite os termos da Microsoft e clique em Avançar nas próximas telas.

7) Na janela Seleção de Recursos escolha asomente a opção Serviços de Mecanismos de Banco de Dados e clique em Avançar.

8) Mantenha o nome padrão da Instância e clique em Avançar nas próximas telas.

9) Na janela Configuração de Mecanismos de Banco de Dados escolha a opção Modo Misto entre com senha pedida para o usuário sa.

10 ) No quadro Especificar administradores do SQL Server e clique em Adicionar usuário atual e depois em Avançar. Na próxima tela clique em Instalar.

11) Se necessário reiniciem a máquina.

12) No navegador vá na página SQL Server Management Studio (SSMS).

13) Clique no link Baixar o SQL Server Management Studio (SSMS) para iniciar o download do arquivo. Na próxima tela clique em Instalar.

14) Feche o navegador depois da instalação completa.

15) No Windows procure por Management Studio e clique no ícone do SSMS.

16) Na tela de Login escolha a opção Autenticação do SQL Server e coloque o usuário sa com sua senha e marque Lembrar senha. Clique em Conectar.

# Definições
- bancos de dados podem se comunicar entre si
- banco de dados => schemas => Tabelas (table), visões (views), restrições (constraints) e programações
- schemas :  posso agrupar os componentes em esquemas. Os esquemas também podem ser sub-assuntos do assunto que o banco de dados está representando. O uso de esquemas no SQL Server é pouco difundido. Quase sempre as pessoas já criam o banco de dados utilizando o tema que eles querem trabalhar.
 -  Se você não falar nada de esquema, o SQL Server cria um esquema padrão cujo nome é "DBO"

- Tabelas => linhas (ou registros) e campos (colunas)
    - colunas possuem nomes
    - número de colunas é fixo
    - todos os valores que vão estar em uma coluna têm que ser do mesmo tipo
- Restrições, ou do inglês constraints 
    - por exemplo, uma restrição é se o campo pode ou não receber valores vazios (not null)
    - Chave primária (primary key)
    - Chave estrangeira (foreign key)
- Views : dentro do core do SQL Server, ele vai fazer a consulta. Ele vai trazer o resultado e exibir como se eu estivesse olhando uma tabela. Então a visão é uma tabela lógica, não é física. 
- Programação: do SQL Server são esses programas usando uma linguagem própria do SQL Server que se chama TSQL ou seria Transact SQL, onde eu posso fazer programas usando ifs, whiles e mesclando com a linguagem SQL para obter resultados mais complexos

# Criando o banco de dados
Caminho padrão:
C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA 

[Criando um banco de dados em um local específico](./01_create_database.sql) 

## Usando o assistente para determinar o comando SQL

Clicar na árvore com o botão direito do mouse de novo e vou criar um banco de dados através do assistente e vou criar o banco de dados ‘SUCOS_VENDAS_05’ e não vou mudar padrão nenhum.

Só que ao invés de eu clicar no botão “OK”, eu vou clicar em “Script”. Quando eu abro essa seta, eu vou selecionar “Ação do Script para a Nova Janela de Consulta”. Ao fazer isso, note que ele escreveu alguma coisa, que se eu fechar, olha o que ele escreveu.

# [Excluindo um banco de dados](./02_drop-database.sql) 

## Apagando o banco com o assitente 
1) No SSMS podemos apagar o banco de dados. Ao clicar com o botão direito do mouse e escolher Excluir abre a janela para confirmar a ação.

2) Gerando o Script vemos que o comando DROP DATABASE é usado para excluir o banco de dados.

3) Ao apagar um banco use a opção Fechar conexões existentes para fechar todas as conexões do banco.

4) Na janela de consulta digite o comandoDROP DATABASE [SUCOS_VENDAS_02];