const { Pool } = require('pg');
console.log(process.env);
// const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, PORT } = process.env;

const pool = new Pool({ DATABASE_URL });

pool
  .connect()
  .then(() => {
    console.log('Database connection established.');
  })
  .catch((err) => {
    throw new Error(err);
  });

module.exports = pool;
