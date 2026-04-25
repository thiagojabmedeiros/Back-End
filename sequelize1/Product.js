const Sequelize = require("sequelize")
const database = require("./db")
const Product = database.define("products", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    description: Sequelize.STRING
})

module.exports = Product