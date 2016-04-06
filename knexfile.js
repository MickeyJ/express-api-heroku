require('dotenv').load();
// process.env.DATABASE_URL ;

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
