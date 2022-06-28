DROP DATABASE SUCOS_VENDAS_01 
EXEC msdb.dbo.sp_delete_database_backuphistory @database_name = N'SUCOS_VENDAS_02' 
GO 
USE [master] 
GO 
/****** Object: Database [SUCOS_VENDAS] Script Date: 21/06/2022 21:28:29 ******/ 
DROP DATABASE [SUCOS_VENDAS] 
GO 