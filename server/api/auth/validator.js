
import Joi from 'joi';
import {validateSchema} from "../../app/validation/shema";

const schemas = {
    router: {
        auth: {
            sing_up: Joi.object()
                .keys({
                    email: validateSchema.email,
                    password: validateSchema.password,
                    first_name: validateSchema.name
                })
                .optional(),
            login: Joi.object()
                .keys({
                    email: validateSchema.email,
                    password: validateSchema.password
                })
                .optional(),
        }
    }
};

export {
 schemas
}


