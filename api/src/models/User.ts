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
            role: DataTypes.ENUM("seller", "costumer"),
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize,
            tableName: "users",
            underscored: true
        })
    }
}

export default User