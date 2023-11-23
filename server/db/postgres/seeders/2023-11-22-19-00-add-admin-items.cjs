module.exports = {
    up: async (queryInterface) => {
        const users = [
            {
                user_id: 1,
                name: 'Test',
                method: 'Time Auction',
                start_data: new Date,
                end_data: new Date,
                min_price: '1',
                category: 'Music',
                description: 'Test',
                file: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1700674247/local-file/j1fgbyfd9u43wrictmij.png',
            },
            {
                user_id: 1,
                name: 'Test 2',
                method: 'Time Auction',
                start_data: new Date,
                end_data: new Date,
                min_price: '1',
                category: 'Music',
                description: 'Test',
                file: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1700674247/local-file/j1fgbyfd9u43wrictmij.png',
            },
            {
                user_id: 1,
                name: 'Test 3',
                method: 'Time Auction',
                start_data: new Date,
                end_data: new Date,
                min_price: '1',
                category: 'Sports',
                description: 'Test 3',
                file: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1700674247/local-file/j1fgbyfd9u43wrictmij.png',
            },
            {
                user_id: 1,
                name: 'Test 4',
                method: 'Time Auction',
                start_data: new Date,
                end_data: new Date,
                min_price: '1',
                category: 'Sports',
                description: 'Test',
                file: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1700674247/local-file/j1fgbyfd9u43wrictmij.png',
            },
            {
                user_id: 1,
                name: 'Test 5',
                method: 'Time Auction',
                start_data: new Date,
                end_data: new Date,
                min_price: '1',
                category: 'Art Drawaing',
                description: 'Test',
                file: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1700674247/local-file/j1fgbyfd9u43wrictmij.png',
            },
            {
                user_id: 1,
                name: 'Test 6',
                method: 'Time Auction',
                start_data: new Date,
                end_data: new Date,
                min_price: '1',
                category: 'Art Drawaing',
                description: 'Test',
                file: 'https://res.cloudinary.com/dd16nwakh/image/upload/v1700674247/local-file/j1fgbyfd9u43wrictmij.png',
            },

        ];

        await queryInterface.bulkInsert('Items', users,);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Items', null);
    }
};

