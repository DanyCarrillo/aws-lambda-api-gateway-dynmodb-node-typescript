# aws-lambda-api-gateway-dynmodb-node-typescript

## Descripción

El presente proyecto tiene como finalidad crear servicios Rest usando las siguientes tecnologas de AWS:
- API Gateway
- Lambda
- Dynamodb

Además, integra el servicio (starships)[https://swapi.py4e.com/api/starships] convitiendo los modelos de ingles a español.

## Requisitos

- node v12.18.*
- serverless framework: `Debe de crear una cuenta en (serverless)[https://app.serverless.com/]`
- aws cli : `Debe de tener una cuenta en (aws)[https://aws.amazon.com/]

## Uso

### Consideraciones para despliegue

- Login con aws: Ejecutar el comando `àws login` desde su terminal para poder iniciar sesion con aws cli.
- Validar que el archivo `.aws/credencial` tenga por default las credenciales correctas (considerar roles), caso contrario debe de crear un usuario en `IAM` con los roles adecuados para usar las tencnologías de aws ya mencionados.
- El nombre de `service` y `Tabla` de dynamodb deben ser unicos (se encuentran en archivo `serverless.yml`).

### Pasos:

1. Clonar el proyecto.
2. instalar las dependencias `npm install`
3. desplegar el proyecto `npm run deploy`


## Endpoints

### [GET] Lista starShips

  **PATH:** /api/starships
  
#### Enpoint de Prueba

```
https://k15dczbh4m.execute-api.us-east-1.amazonaws.com/dev/api/starships
```
  
### [POST] save: Inserta en dynamodb

**PATH:** /api/dynamo/starships

**Body:**

```
{
    "nombre": "CR90 corvette",
    "modelo": "CR90 corvette",
    "fabricante": "Corellian Engineering Corporation",
    "costo_en_credito": "3500000",
    "longitud": "150",
    "velocidad_maxima_atmosfera": "950",
    "tripulacion": "30-165",
    "pasajeros": "600",
    "capacidad_carga": "3000000",
    "consumables": "1 year",
    "calificacion_hiperimpulsor": "2.0",
    "MGLT": "60",
    "calse_nave_estelar": "corvette",
    "pilotos": [],
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/6/"
    ]
}
```

#### Enpoint de Prueba

```
https://k15dczbh4m.execute-api.us-east-1.amazonaws.com/dev/api/dynamo/starships

```


### [GET] find: Devuelve todos los registros de la tabla (dynamodb)

**PATH:** /api/dynamo/starships

#### Enpoint de Prueba

```
https://k15dczbh4m.execute-api.us-east-1.amazonaws.com/dev/api/dynamo/starships/all

```

### [GET] findOne: Devuelve el registro del ID (dynamodb)

**PATH:** /api/dynamo/starships/{ID}

#### Enpoint de Prueba

```
https://k15dczbh4m.execute-api.us-east-1.amazonaws.com/dev/api/dynamo/starships/{ID}

```




