##Express Server - Knex/PG 
Just a server and database - thats it.
```bash
  
$ npm install

$ createdb heroku-api

$ knex init
  
```

####replace knexfile contents with this
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

__then...__
```bash
  
$ knex migrate:latest --env production
  
```

####you can either refresh users (20 by default)
####or add more users (10 by default)
```bash
  
$ npm run fresh-seed-local
  
    - or -
  
$ npm run more-seed-local
  
```

####try testing in the browser at :3000
```bash
  
$ nodemon
  
```


####if that works, setup heroku/postgres addon and push it
```bash
  
$ heroku create
$ heroku addons:create heroku-postgresql:hobby-dev

$ git add -A
$ git commit -m "pushing to heroku"
$ git push heroku master
  
```
* __This will not work yet.__ 
* __In order to run the commands below,__ 
__your code must be on heroku__

####...Migrate errthang knex to heroku.
```bash
  
$ heroku run knex migrate:latest
  
```

####Again, you can either refresh or add users
```bash
  
$ npm run fresh-seed-heroku 
  
    - or -
  
$ npm run more-seed-heroku  
  
```

####If the force is with you this will work
```bash
  
$ heroku open
  
```