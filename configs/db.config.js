const { Pool } = require('pg');
const DATABASE_URL = processs.env.DATABASE_URL;
const SPLIT_DATABASE_URL = DATABASE_URL.split(/(postgres:\/\/)|:|@|\//)
  .splice(2)
  .filter((x) => x !== undefined);

const [DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE] =
  SPLIT_DATABASE_URL;

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});

pool
  .connect()
  .then(() => {
    console.log('Database connection established.');
  })
  .catch((err) => {
    throw new Error(err);
  });

module.exports = pool;
