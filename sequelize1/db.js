const Sequelize = require("sequelize")
const database = new Sequelize("almeida", "thiago", "jose", {
    dialect: "postgres",
    host: "localhost",
    port: 5432
})

module.exports = database