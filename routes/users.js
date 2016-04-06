'use strict';
const valid = require('../util/valid');
const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const dt = require('../db/tables');

router.get('/', function(req, res, next) {
  dt.Users().then(function(users){
    res.json(users);
  });
});

router.post('/signup', valid.Signup, (req, res, next) =>{
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);
  dt.Users()
    .insert({
      name: req.body.name,
      email: req.body.email,
      password: hash
    })
    .then(() => {})
    .catch(err =>{ next(new Error(err)) });
});

module.exports = router;
