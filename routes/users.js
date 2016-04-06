const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const Users = function() { return knex('users') };

router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res, next) {
  Users().then(function(users){
    res.json(users);
  });
});

module.exports = router;
