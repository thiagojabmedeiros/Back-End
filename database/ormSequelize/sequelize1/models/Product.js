const Sequelize = require('sequelize')
const database = require('../db')
const Enterprise = require('./Entreprise')

const Product = database.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    description: Sequelize.STRING,
})
// 1:1
Product.belongsTo(Enterprise, {
    constraint: true,
    foreignKey: 'enterpriseId'
})

// 1:n
Enterprise.hasMany(Product, {
    foreignKey: 'enterpriseId'
})

// n:m


module.exports = Product