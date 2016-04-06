require('dotenv').load();
process.env.DATABASE_URL || require('./.env');

module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: false,
    pool: {
      min: 2,
      max: 10
    }
  }
};
