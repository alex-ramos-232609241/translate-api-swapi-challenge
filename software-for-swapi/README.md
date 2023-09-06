# SOFTWARE FOR API

_ proyecto desarrollado en serveless framework, desplegado en el servicio lamda de AWS._

## Comenzando 🚀

_Para despliegue del proyecto a nivel local._
_primero unitizar :_
    ```
    clonar el repositorio
    cd <name-repositorio>
    npm install
    serverless offline start
```
### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
 cliente http axios,
 npm i axios
 uso de una libreria para traducir de EN a ES llamada @vitalets/google-translate-api
 npm i @vitalets/google-translate-api
```

### Ejecucion del proyecto 🔧

_probando una de las rutas_

_http://localhost:3000/dev/vehicles/_

```
{
  "datos": [
    {
      " nombre": "Sand Crawler",
      " modelo": "Digger Crawler",
      " fabricante": "Corellia Mining Corporation",
      " cost_in_credits": "150000",
      " longitud": "36.8 ",
      " max_atmosfering_speed": "30",
      " tripulación": "46",
      " pasajeros": "30",
      " carga_capacidad": "50000",
      " consumibles": "2 months",
      " vehículos_class": "wheeled",
      " pilotos": [
        
      ],
      " películas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/5/"
      ],
      " creado": "2014-12-10T15:36:25.724000Z",
      " editado": "2014-12-20T21:30:21.661000Z",
      "URL": "https://swapi.py4e.com/api/vehicles/4/"
    },
    {
      " nombre": "T-16 skyhopper",
      " modelo": "T-16 skyhopper",
      " fabricante": "Incom Corporation",
      " cost_in_credits": "14500",
      " longitud": "10.4 ",
      " max_atmosfering_speed": "1200",
      " tripulación": "1",
      " pasajeros": "1",
      " carga_capacidad": "50",
      " consumibles": "0",
      " vehículos_class": "repulsorcraft",
      " pilotos": [
        
      ],
      " películas": [
        "https://swapi.py4e.com/api/films/1/"
      ],
      " creado": "2014-12-10T16:01:52.434000Z",
      " editado": "2014-12-20T21:30:21.665000Z",
      "URL": "https://swapi.py4e.com/api/vehicles/6/"
    },
    {
      " nombre": "X-34 landspeeder",
      " modelo": "X-34 landspeeder",
      " fabricante": "SoroSuub Corporation",
      " cost_in_credits": "10550",
      " longitud": "3.4 ",
      " max_atmosfering_speed": "250",
      " tripulación": "1",
      " pasajeros": "1",
      " carga_capacidad": "5",
      " consumibles": "unknown",
      " vehículos_class": "repulsorcraft",
      " pilotos": [
        
      ],
      " películas": [
        "https://swapi.py4e.com/api/films/1/"
      ],
      " creado": "2014-12-10T16:13:52.586000Z",
      " editado": "2014-12-20T21:30:21.668000Z",
      "URL": "https://swapi.py4e.com/api/vehicles/7/"
    },
    {
      " nombre": "TIE/LN starfighter",
      " modelo": "Twin Ion Engine/Ln Starfighter",
      " fabricante": "Sienar Fleet Systems",
      " cost_in_credits": "unknown",
      " longitud": "6.4",
      " max_atmosfering_speed": "1200",
      " tripulación": "1",
      " pasajeros": "0",
      " carga_capacidad": "65",
      " consumibles": "2 days",
      " vehículos_class": "starfighter",
      " pilotos": [
        
      ],
      " películas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/"
      ],
      " creado": "2014-12-10T16:33:52.860000Z",
      " editado": "2014-12-20T21:30:21.670000Z",
      "URL": "https://swapi.py4e.com/api/vehicles/8/"
    },
    {
      " nombre": "Snowspeeder",
      " modelo": "t-47 airspeeder",
      " fabricante": "Incom corporation",
      " cost_in_credits": "unknown",
      " longitud": "4.5",
      " max_atmosfering_speed": "650",
      " tripulación": "2",
      " pasajeros": "0",
      " carga_capacidad": "10",
      " consumibles": "none",
      " vehículos_class": "airspeeder",
      " pilotos": [
        "https://swapi.py4e.com/api/people/1/",
        "https://swapi.py4e.com/api/people/18/"
      ],
      " películas": [
        "https://swapi.py4e.com/api/films/2/"
      ],
      " creado": "2014-12-15T12:22:12Z",
      " editado": "2014-12-20T21:30:21.672000Z",
      "URL": "https://swapi.py4e.com/api/vehicles/14/"
    },
    {
      " nombre": "TIE bomber",
      " modelo": "TIE/sa bomber",
      " fabricante": "Sienar Fleet Systems",
      " cost_in_credits": "unknown",
      " longitud": "7.8",
      " max_atmosfering_speed": "850",
      " tripulación": "1",
      " pasajeros": "0",
      " carga_capacidad": "none",
      " consumibles": "2 days",
      " vehículos_class": "space/planetary bomber",
      " pilotos": [
        
      ],
      " películas": [
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/"
      ],
      " creado": "2014-12-15T12:33:15.838000Z",
      " editado": "2014-12-20T21:30:21.675000Z",
      "URL": "https://swapi.py4e.com/api/vehicles/16/"
    },
    {
      " nombre": "AT-AT",
      " modelo": "All Terrain Armored Transport",
      " fabricante": "Kuat Drive Yards, Imperial Department of Military Research",
      " cost_in_credits": "unknown",
      " longitud": "20",
      " max_atmosfering_speed": "60",
      " tripulación": "5",
      " pasajeros": "40",
      " carga_capacidad": "1000",
      " consumibles": "unknown",
      " vehículos_class": "assault walker",
      " pilotos": [
        
      ],
      " películas": [
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/"
      ],
      " creado": "2014-12-15T12:38:25.937000Z",
      " editado": "2014-12-20T21:30:21.677000Z",
      "URL": "https://swapi.py4e.com/api/vehicles/18/"
    },
    {
      " nombre": "AT-ST",
      " modelo": "All Terrain Scout Transport",
      " fabricante": "Kuat Drive Yards, Imperial Department of Military Research",
      " cost_in_credits": "unknown",
      " longitud": "2",
      " max_atmosfering_speed": "90",
      " tripulación": "2",
      " pasajeros": "0",
      " carga_capacidad": "200",
      " consumibles": "none",
      " vehículos_class": "walker",
      " pilotos": [
        "https://swapi.py4e.com/api/people/13/"
      ],
      " películas": [
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/"
      ],
      " creado": "2014-12-15T12:46:42.384000Z",
      " editado": "2014-12-20T21:30:21.679000Z",
      "URL": "https://swapi.py4e.com/api/vehicles/19/"
    },
    {
      " nombre": "Storm IV Twin-Pod cloud car",
      " modelo": "Storm IV Twin-Pod",
      " fabricante": "Bespin Motors",
      " cost_in_credits": "75000",
      " longitud": "7",
      " max_atmosfering_speed": "1500",
      " tripulación": "2",
      " pasajeros": "0",
      " carga_capacidad": "10",
      " consumibles": "1 day",
      " vehículos_class": "repulsorcraft",
      " pilotos": [
        
      ],
      " películas": [
        "https://swapi.py4e.com/api/films/2/"
      ],
      " creado": "2014-12-15T12:58:50.530000Z",
      " editado": "2014-12-20T21:30:21.681000Z",
      "URL": "https://swapi.py4e.com/api/vehicles/20/"
    },
    {
      " nombre": "Sail barge",
      " modelo": "Modified Luxury Sail Barge",
      " fabricante": "Ubrikkian Industries Custom Vehicle Division",
      " cost_in_credits": "285000",
      " longitud": "30",
      " max_atmosfering_speed": "100",
      " tripulación": "26",
      " pasajeros": "500",
      " carga_capacidad": "2000000",
      " consumibles": "Live food tanks",
      " vehículos_class": "sail barge",
      " pilotos": [
        
      ],
      " películas": [
        "https://swapi.py4e.com/api/films/3/"
      ],
      " creado": "2014-12-18T10:44:14.217000Z",
      " editado": "2014-12-20T21:30:21.684000Z",
      "URL": "https://swapi.py4e.com/api/vehicles/24/"
    }
  ]
}


_Rutas habilitadas_
```

GET /api/people/
GET /api/planets/
GET /api/films/
GET /api/species/
GET /api/vehicles/
GET /api/starships/
GET /tasks
POST /tasks
GET /tasks/{id}
PUT /tasks/{id}
DELETE /tasks/{id}
```

## Ejecutando las pruebas ⚙️
_ Se crearon algunas pruebas de ejemplo, un mock para axios y comprobrar que el paquete de salida este traducida _
_Ejecutando las pruebas en Jestjs_
```
npm run test
```

## Despliegue 📦

_si se desea delplegar a AWS_
```
sls deploy
```

##puesta es produccion en lamda AWS
GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/people
GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/planets
GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/films
GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/species
GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/vehicles
GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/starships

## Construido con 🛠️

_Herramientas utilizadas para su construccion_

* [Serverless Framework](https://www.serverless.com/) - El framework web usado
* [npm](https://www.npmjs.com/) - Manejador de dependencias



---
⌨️ Creado por [Alex Ramos Ipanaque](https://gist.github.com/alex-ramos-232609241) 😊
