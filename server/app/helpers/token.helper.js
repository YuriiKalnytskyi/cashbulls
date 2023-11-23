import JWT from 'jsonwebtoken';

const user = {
    accessToken: (user, options) => {
        return JWT.sign(
            {
                iss: 'config.JWT.iss',
                sub: user.id,
                type: user.role
            },
            process.env.ACCESS_TOKEN,
            {
                expiresIn: process.env.LIFETIME_ACCESS_TOKEN
            }
        );
    }
};

export const token = {
    user
};
