require = require('esm')(module);
const schema = require('../schema/auction-items').default;

module.exports = {
    up: async (queryInterface, Sequelize) => {
        let _schema = schema(Sequelize);
        _schema.id = {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
        };

        _schema.createdAt = {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        };
        _schema.updatedAt = {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        };

        await queryInterface.createTable('ActionsItems', _schema)

    },
    down: (queryInterface) => queryInterface.dropTable('ActionsItems'),
};
