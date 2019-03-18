# NodeApi

Para inicializar el proyecto:

```shell
npm install
```

Verifica la cadena de conexión a la base de datos en lib/connectMongoose.js

Puedes utilizar el script de inicialización de la base de datos con:

```shell
npm run install_db
```

## Arranque

Para arrancar el proyecto usar:

* En producción:

```shell
npm start
```

* En desarrollo:

```shell
npm run dev
```

## Rutas del API

* http://localhost:3000/apiv1/agentes

Retorna una lista de agentes

## Otra información

### Para arrancar un servidor de mongodb desde consola:

```shel
./bin/mongod --dbpath ./data/db --directoryperdb
```