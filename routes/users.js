'use strict';
const valid = require('../util/valid');
const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const Users = function() { return knex('users') };

router.get('/', function(req, res, next) {
  Users().then(function(users){
    res.json(users);
  });
});


module.exports = router;
