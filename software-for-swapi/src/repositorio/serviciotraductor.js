'use strict';

const translate = require('@vitalets/google-translate-api');

async function traductorDeTexto(objetoSinTraducir){
    let listaHeadersIniciales = [];
    
    let objetoConTextoTraducidoTotal = [];
    let textTraducido;
    let acumulador = '' ;

    let claves = Object.keys(objetoSinTraducir[0]); 
    let values = Object.values(objetoSinTraducir);
   console.log(claves)
    for(let i=0; i < claves.length; i++){
        let clave = claves[i];
        listaHeadersIniciales.push(clave);
        acumulador = clave +','+acumulador;
    }
   //translate --> servicio para traducir 
    let v = await translate(acumulador, {from: 'en', to: 'es'}).then(res => {
        let objetoCreado = [];
        textTraducido = res.text;
        console.log(res.text);
        objetoCreado = textTraducido.split(',');

        return objetoCreado;
     }).catch(err => {
         console.error(err);
     });
    v.length = v.length-1;
    v.reverse(); 

    for(let k = 0; k < objetoSinTraducir.length; k++){
        let valuesUnitario = []
        let objetoConTextoTraducidoUnitario = {};
        valuesUnitario = Object.values(objetoSinTraducir[k]);
        for(let i=0; i < claves.length; i++){
            
            objetoConTextoTraducidoUnitario[v[i]] = valuesUnitario[i]
            
         }
         objetoConTextoTraducidoTotal.push(objetoConTextoTraducidoUnitario);
    } 
    
     console.log(objetoConTextoTraducidoTotal)

return objetoConTextoTraducidoTotal; 
}

module.exports = {
    traductorDeTexto
}  