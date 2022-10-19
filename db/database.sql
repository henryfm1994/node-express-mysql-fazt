  -- Crear la base de datos
  CREATE DATABASE IF NOT EXISTS companydb;

-- Entrar a la base de datos
   use companydb;

-- Crear una tabla en la base de datos
    CREATE TABLE employee (
      id INT(11) NOT NULL AUTO_INCREMENT, 
      name VARCHAR(45) DEFAULT NULL, 
      salary INT(5) DEFAULT NULL, 
      PRIMARY KEY (id)
      );

-- Obtener informacion de la tabla
      DESCRIBE employee;

-- Insertar datos a la base de datos
      INSERT INTO employee VALUES
      (1, 'Joe', 1000),
      (2, 'Henry', 2000),
      (3, 'Sam', 1500),
      (4, 'Max', 1200);

-- Obtener un elemento de la tabla
SELECT * FROM employee WHERE id = 1;

-- Eliminar un elemento de la tabla
DELETE FROM employee WHERE id = 8;
