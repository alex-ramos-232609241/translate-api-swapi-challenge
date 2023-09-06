'use strict';

const {conectionSwapi} = require('.././src/repositorio/conectionswapi');
const payloadPeople = require('./data/people.untranslated .json');

global.axios = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(payloadPeople),
  })
)

test('success GET axios people', async () => {

  const response = await conectionSwapi("people/");
  console.log(response)
  expect(response).toEqual(payloadPeople);

})
