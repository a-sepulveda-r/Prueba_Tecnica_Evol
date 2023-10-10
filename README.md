# Nombre del Proyecto

Este proyecto tiene como objetivo desarrollar una interfaz gráfica que permita a la empresa Evol Services gestionar eficientemente la información de sus clientes y medidores. Se integran tecnologías como Node.js, Express, React y Tailwind CSS para lograrlo.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de continuar:

- Node.js
- npm
- PostgreSQL
- Git

## Configuración del Proyecto

1. Clona este repositorio en tu máquina local usando el siguiente comando:

   ```shell
   git clone https://github.com/a-sepulveda-r/Prueba_Tecnica_Evol.git

   ```

2. Navega al directorio del proyecto:

```shell
cd Prueba_Tecnica_Evol
```

3. Instala las dependencias del servidor:

```shell
npm install

```

4. Configura la base de datos PostgreSQL:

- Crea una base de datos PostgreSQL llamada db_evol.
- Ejecuta los scripts SQL proporcionados en db.sql de la carpeta database para crear las tablas y las relaciones necesarias.

5. Configura las variables de entorno:

Crea un archivo .env en el directorio raíz del proyecto con las siguientes variables de entorno:

```shell
DB_USER = usuario_de_postgresql
DB_PASSWORD = contraseña_de_postgresql
DB_HOST = localhost
DB_PORT = 5432
DB_DATABASE = db_evol
```

6. Inicia el servidor:

```shell
npm run dev
```

Esto iniciará el servidor Express en el puerto 4000.

7. Navega a la carpeta del cliente en otra terminal:

```shell
cd client

```

8. Instala las dependencias del cliente:

```shell
npm install
```

9. Inicia la aplicación React:

```shell
npm start

```

Esto iniciará la aplicación React en el puerto 3000.

10. Abre tu navegador web y visita http://localhost:3000 para interactuar con la aplicación frontend.
