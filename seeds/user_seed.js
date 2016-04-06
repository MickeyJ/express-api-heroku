const knex = require('knex')(require('../knexfile')['production']);

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('users').insert({})
  );
};
