<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejectar en desarrollo

1. clonar el repositorio
2. ejectar

```
yarn install
```

3. Tener Nest Cli instalado

```
npm i -g @nest/cli
```

4. levantar la base de datos

```
docker-compose up -d
```

5. Clonar el aerchivo `.env.template` y renombrar la copia a `env`

6. Llenar las variables requeridas en `env`

7. ejecutar la aplicacion en dev

```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- Mongo db
- Nest
