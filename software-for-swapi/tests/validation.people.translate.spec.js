'use strict';

const {apiTraducida} = require('.././src/business/business');
const payloadPeopleTranslate = require('./data/people.translate.json');

test('flow of people translators', async () => {

  const response = await apiTraducida("people/");
  const {datos} = payloadPeopleTranslate;
  console.log(response)
  const nombre = datos[0]['nombre'];
  const nombreResponse = response[0]['nombre'];

  const altura = datos[0]['altura'];
  const alturaResponse = response[0]['altura'];

  const masa = datos[0]['masa'];
  const masaResponse = response[0]['masa'];

  expect(response).toEqual(datos);
  expect(nombreResponse).toEqual(nombre);
  expect(alturaResponse).toEqual(altura);
  expect(masaResponse).toEqual(masa);

})
