'use strict';

const repoconection = require('../repositorio/conectionswapi');
const traductorDeTexto = require('../repositorio/serviciotraductor');


async function apiTraducida(ruta){
    
   
    let valores = await repoconection.conectionSwapi(ruta);
    valores = valores['results'];
    
    var nuevoObjeto = {}
        try{
            nuevoObjeto = traductorDeTexto.traductorDeTexto(valores);
           
        }
        catch(err){
            console.log(err)
        }
       
    return nuevoObjeto;
}

module.exports = {
    apiTraducida
}  
