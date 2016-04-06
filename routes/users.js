var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const Users = function() { return knex('users') };

router.get('/', function(req, res, next) {
  Users().then(function(users){
    res.json(users);
  });
});

module.exports = router;
