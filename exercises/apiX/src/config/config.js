const dotEnv = require('dotenv')
dotEnv.config()

const config = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": true,
    "define": {
      "timestamps": true,
    }
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": Number(process.env.DB_PORT),
    "dialect": process.env.DB_DIALECT,
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": Number(process.env.DB_PORT),
    "dialect": process.env.DB_DIALECT,
  }
}

module.exports = config