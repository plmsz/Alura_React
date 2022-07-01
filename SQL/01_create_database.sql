CREATE DATABASE SUCOS_VENDAS_01;
-- Criando um banco de dados em um local específico
CREATE DATABASE SUCO_VENDAS_02
ON (NAME = 'SUCOS_VENDAS.DAT',
	FILENAME = 'C:\TEMPSQL\SALES_VENDAS-02.MDF', /* nome do arquivo */
	SIZE = 10MB, /* tamamho inicial */
	MAXSIZE = 50MB,
	FILEGROWTH = 5MB) /* tamanho que o banco irá crescer */
LOG ON (NAME = 'SUCOS_VENDAS.LOG',
		FILENAME = 'C:\TEMPSQL\SALES_VENDAS-02.LDF',
		SIZE = 10MB,
		MAXSIZE = 50MB,
		FILEGROWTH = 5MB);