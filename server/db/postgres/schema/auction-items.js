export default (Type) => ({
    item_id: {
        allowNull: false,
        type: Type.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: 'Items',
        },
    },

    buyer_id: {
        allowNull: false,
        type: Type.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: 'Users',
        },
    },

    price: Type.STRING,
});
