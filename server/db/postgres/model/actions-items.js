import {Model, DataTypes} from 'sequelize';
import schema from '../schema/auction-items';

export default class ActionsItems extends Model {
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
        this.belongsTo(models.Items, {
            foreignKey: 'item_id',
            as: 'item'
        });
        this.belongsTo(models.Users, {
            foreignKey: 'buyer_id'
        });

    }
}
