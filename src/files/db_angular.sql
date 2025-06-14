create database angular_crud;
use angular_crud;

CREATE TABLE usuarios (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100),
email VARCHAR(100)
);

CREATE TABLE personas (
id_persona INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100),
apellido VARCHAR(100),
tipo_identificacion VARCHAR(50),
nuip VARCHAR(30),
email VARCHAR(100),
clave VARCHAR(500),
salario DECIMAL(10,2),
activo BOOLEAN DEFAULT TRUE,
fecha_registro DATE DEFAULT (CURRENT_DATE),
imagen LONGBLOB
);