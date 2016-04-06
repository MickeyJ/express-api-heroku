
const MOCK_DATA = require('../db/mock-data');
const knex = require('knex')(require('../knexfile')['production']);


exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert(MOCK_DATA)

  );
};
