import { Model, DataTypes, Sequelize } from "sequelize"

class User extends Model {
    static initialize(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            name: DataTypes.STRING,
            role: {
                type: DataTypes.ENUM("seller", "costumer"),
                defaultValue: "costumer"
            },
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize,
            tableName: "users",
            underscored: true
        })
    }

    static associate(models: any) {
        this.hasMany(models.Delivery, { foreignKey: "user_id", as: "deliveries" })
    }
}

export default User