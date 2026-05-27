import { Model, DataTypes, Sequelize } from "sequelize"

class Delivery extends Model {
    static initialize(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            user_id: DataTypes.UUID,
            description: DataTypes.STRING,
            status: DataTypes.ENUM("in progress", "coming to you", "delivered"),
        }, {
            sequelize,
            tableName: "deliveries",
            underscored: true
        })
    }
    
    static associate(models: any) {
        this.belongsTo(models.User, { foreignKey: "user_id", as: "user" })
    }
}

export default Delivery