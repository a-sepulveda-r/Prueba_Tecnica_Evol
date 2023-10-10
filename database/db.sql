CREATE DATABASE db_evol;

CREATE TABLE Medidor (
  codigo VARCHAR(255) PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  fechaCreacion DATE NOT NULL,
  descripcion TEXT
);


CREATE TABLE Cliente (
  RUT VARCHAR(255) PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  direccion TEXT NOT NULL
);
ALTER TABLE Medidor
ADD COLUMN cliente_id VARCHAR(255) REFERENCES Cliente(RUT);
' 'ALTER TABLE Medidor
ADD CONSTRAINT max_medidores_por_cliente
CHECK (
  (SELECT COUNT(*) FROM Medidor WHERE cliente_id = NEW.cliente_id) <= 3
);