'use strict';
//Imports
const axios = require('axios')
const callswapiConfig = require('./urlconfig');
const urlbase = callswapiConfig.API_ROOT_MAIN;


async function conectionSwapi(route){

        console.log("***urlbase")
        console.log(urlbase.endpoint+route)
        console.log("***/urlbase")
    
        const res = await axios.get(urlbase.endpoint+route);
        return res.data;
    }

module.exports = {
    conectionSwapi
}  
