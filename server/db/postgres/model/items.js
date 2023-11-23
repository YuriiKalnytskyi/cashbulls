import {Model, DataTypes} from 'sequelize';
import schema from '../schema/items';
import ActionsItems from "./actions-items";

export default class Items extends Model {
    static init(sequelize) {
        return super.init(
            {
                ...schema(DataTypes),
            },
            {
                sequelize,
                timestamps: true,
                freezeTableName: true,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Users, {
            foreignKey: 'user_id',
            as : 'user'
        });

        this.hasMany(models.ActionsItems, {
            foreignKey: 'item_id',
            as: 'actions'
        });
    }
}
