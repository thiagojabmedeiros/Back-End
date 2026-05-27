import configs from "../config/config"

import User from "../models/User"

import { Sequelize } from "sequelize"

const database = new Sequelize(configs.development)

User.initialize(database)

export default database