export default (Type) => ({
    user_id: {
        allowNull: false,
        type: Type.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: 'Users',
        },
    },


    name: Type.STRING,
    method: Type.STRING,
    start_data: Type.DATE,
    end_data: Type.DATE,
    min_price: Type.STRING,
    category: Type.STRING,
    description: Type.TEXT,
    file: Type.TEXT,
});
