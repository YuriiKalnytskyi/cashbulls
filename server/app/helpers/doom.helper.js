import {StatusCodes} from 'http-status-codes';

const errorCode = {
    // Wrong data. To send the correct data you need to use the documentation.
    validation: 100,


    // The token in the request was not found.
    tokenNotFound: 110,
    // The token in the request is not correct.
    tokenNotValid: 111,
    // Token lifetime expired.
    tokenExpired: 112,

    // This email has already been registered.
    // Therefore, we can not register it twice.
    //So, as it is already in our database.
    emailAlreadyRegistered: 121,
    authError: 123,


    // uploadImage error
    uploadImageAvatar: 211
};

const error = {
    validation: (res, error) => {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            success: false,
            message: error.message.replace(/"/g, ''),
            error: 'Bad request',
            errorCode: errorCode.validation
        });
    },
    tokenNotFound: () => {
        return {
            success: false,
            message: 'To pass the identification, we need a token.',
            error: 'Token not found',
            errorCode: errorCode.tokenNotFound
        };
    },
    tokenNotValid: (res) => {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: 'Token failed validation.',
            error: 'Unauthorized access',
            errorCode: errorCode.tokenNotValid
        });
    },
    tokenExpired: (res) => {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            message: 'Token lifetime expired.',
            error: 'Unauthorized access',
            errorCode: errorCode.tokenExpired
        });
    },


    authError: () => {
        return {
            statusCode: StatusCodes.UNAUTHORIZED,
            success: false,
            message: `Incorrect email and/or password`,
            error: 'Access Denied',
            errorCode: errorCode.authError
        };
    },

    emailAlreadyRegistered: () => {
        return {
            statusCode: StatusCodes.CONFLICT,
            success: false,
            message: 'This user ID is already in use.',
            error: 'Conflict',
            errorCode: errorCode.emailAlreadyRegistered
        };
    },

    uploadImageAvatar: () => {
        return {
            statusCode: StatusCodes.UNAUTHORIZED,
            success: false,
            message: `Sorry, your image is too big, please upload up to 10 MB.`,
            error: 'Access Denied',
            errorCode: errorCode.uploadImageAvatar
        };
    },
};

export const doom = {
    errorCode,
    error
};
