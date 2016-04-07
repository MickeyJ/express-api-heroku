
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
```

you can either refresh your seeded users
or add more user
```bash
$ npm run fresh-seed-local
$ npm run more-seed-local
```

try testing in the browser at :3000
```bash
$ nodemon
```


if that works, setup heroku and push it up
```bash
$ heroku create
$ heroku addons:create heroku-postgresql:hobby-dev

$ git add -A
$ git commit -m "pushing to heroku"
$ git push heroku master
```
this will not work yet.

...migrate errthang to heroku.
```bash
$ heroku run knex migrate:latest
```

again you can either do a fresh user seed
or add more users
```bash
$ npm
    - or -
$ heroku run knex seed:run 

$ heroku open
```
you might get an error from the last command but it should work.