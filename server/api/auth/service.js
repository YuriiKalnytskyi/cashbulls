import {doom, token} from '../../app/helpers';

import {where, fn, col} from 'sequelize';

import bcrypt from 'bcryptjs';



const auth = {
    login: async (connection, options) => {
        const user = await connection.Users.findOne({
            where: where(fn('LOWER', col('email')), '=', options.email.toLowerCase())
        });

        if (!user) return doom.error.authError();

        const incorrectPassword = bcrypt.compareSync(options.password, user.password);

        if (!incorrectPassword) return doom.error.authError();

        delete user.password;
        options.token = token.user.accessToken(user);


        return {
            success: true,
            result: {
                token: options.token
            }
        };
    },
    sing_up: async (connection, options) => {

        options.password = bcrypt.hashSync(options.password, 10);

        const [_, created] = await connection.Users.findOrCreate({
            where: where(fn('LOWER', col('email')), '=', options.email.toLowerCase()),
            defaults: {
                ...options,
            }
        });

        if (!created) return doom.error.emailAlreadyRegistered();


        return {
            success: true,
            result: {
                message: 'User registered'
            }
        };
    },

};

export {
    auth
}


