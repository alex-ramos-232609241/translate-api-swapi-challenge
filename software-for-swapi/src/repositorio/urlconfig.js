'use strict';

const API_ROOT = {
    URL: 'swapi.py4e.com',
    PATH: 'api/',
};

const API_ROOT_MAIN = {
    endpoint: 'https://'+API_ROOT.URL+'/'+API_ROOT.PATH
}

module.exports = {
    API_ROOT_MAIN
}
// {
//     "people": "https://swapi.py4e.com/api/people/", 
//     "planets": "https://swapi.py4e.com/api/planets/", 
//     "films": "https://swapi.py4e.com/api/films/", 
//     "species": "https://swapi.py4e.com/api/species/", 
//     "vehicles": "https://swapi.py4e.com/api/vehicles/", 
//     "starships": "https://swapi.py4e.com/api/starships/"
// }