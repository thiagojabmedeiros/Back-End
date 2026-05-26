import configs from "../configs/configs"
import { Sequelize } from "sequelize"

const database = new Sequelize(configs.development)

export default database