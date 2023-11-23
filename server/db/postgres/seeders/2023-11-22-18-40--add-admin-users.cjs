const bcrypt = require('bcryptjs');

module.exports = {
    up: async (queryInterface) => {
        const users = [
            {
                email: 'admin@gmail.com',
                first_name: 'admin',
                password: bcrypt.hashSync('Qwerty@123', 10),
            },
            {
                email: 'admin2@gmail.com',
                first_name: 'admin',
                password: bcrypt.hashSync('Qwerty@123', 10),
            },

        ];

        await queryInterface.bulkInsert('Users', users,);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Users', null);
    }
};

