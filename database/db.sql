DROP DATABASE IF EXISTS db_evol;


CREATE DATABASE db_evol;

\c db_evol;  -- Cambia a la base de datos recién creada.

-- Crea las tablas Cliente y Medidor con las relaciones.

CREATE TABLE Cliente (
  RUT VARCHAR(255) PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  direccion TEXT NOT NULL
);


CREATE TABLE Medidor (
  codigo VARCHAR(255) PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  fechaCreacion DATE NOT NULL,
  descripcion TEXT,
  cliente_id VARCHAR(255) REFERENCES Cliente(RUT)
);


-- Insertar datos en la tabla Cliente
INSERT INTO Cliente (RUT, nombre, direccion)
VALUES 
  ('19.222.094-1', 'Ximena Ramirez', 'Francisco de Camar 87'),
  ('1935543-9', 'Manuel', 'Santiago 8786'),
  ('6.315.707-4', 'Guillermo', 'San Leon Grande 44'),
  ('19187656', 'Manolito', 'Rungue 567');

-- Insertar datos en la tabla Medidor
INSERT INTO Medidor (codigo, nombre, fechaCreacion, descripcion, cliente_id)
VALUES 
  ('8050919jk', 'Medidor luz', '2022-09-07', 'Medir luz', '19.222.094-1'),
  ('897867j', 'Medidor luz', '2022-09-07', 'Mide el agua', '1935543-9'),
  ('805gt6', 'Medidor luz', '2018-09-07', 'Medir luz', '6.315.707-4'),
  ('5655', 'Medidor agua', '2018-09-07', 'Mide el agua', '19187656');
