
```bash
$ npm install

$ createdb heroku-api

$ knex init
```

replace knexfile with this
```js
require('dotenv').load();

module.exports = {
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || require('./.env'),
    ssl: false,
    pool: {
      min: 2,
      max: 10
    }
  }
};
```

then...
```bash
$ knex migrate:latest --env production

$ node db/seedUsers.js

$ nodemon
```
is it working in the browser?

...then setup heroku and push it
```bash
$ heroku create
$ heroku addons:create heroku-postgresql:hobby-dev

$ git add -A
$ git commit -m"ready for heroku"
$ git push heroku master
```
this will not work yet.

...migrate to heroku.
```bash
$ heroku run knex migrate:latest

$ heroku run node db/seedUsers.js
    - or -
$ heroku run knex seed:run 

$ heroku open
```
you might get an error from the last command but it should work.