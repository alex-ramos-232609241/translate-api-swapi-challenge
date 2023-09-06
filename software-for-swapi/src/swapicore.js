'use strict';
const business = require('./business/business');

module.exports.createCallswapi = async (event, context) =>{
  let conn= await business.apiTraducida(event['path']);
  
  console.log("======")
  console.log(conn)
  console.log("======")

  return {
    statusCode: 200,
    body: JSON.stringify({
      datos: conn,
      
    }),
  }
};
