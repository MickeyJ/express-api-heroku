'use strict';
const valid = require('../util/valid');
const express = require('express');
const router = express.Router();
const dt = require('../db/tables');
const bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
  dt.Users().then(function(users){
    res.json(users);
  });
});

router.post('/signup', valid.Signup, (req, res, next) =>{
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync('123', salt);
  dt.Users()
    .insert({
      name: 'bob',
      email: 'bob@gmail.com',
      password: hash
    })
    .then(() => {})
    .catch(err =>{ next(new Error(err)) });
});

module.exports = router;
