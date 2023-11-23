import Joi from 'joi';

import {validateSchema} from "../../app/validation/shema";

const schemas = {
    router: {
        item: {
            all: Joi.object()
                .keys({
                    category: validateSchema.textOptions,
                    page: validateSchema.number
                })
                .optional(),
            post: Joi.object()
                .keys({
                    method: validateSchema.text,
                    name: validateSchema.text,
                    start_data: validateSchema.text,
                    end_data: validateSchema.text,
                    min_price: validateSchema.text,
                    category: validateSchema.text,
                    description: validateSchema.text,
                    file: Joi.string().required(),
                })
                .optional(),
            put: Joi.object()
                .keys({
                    price: validateSchema.id,
                    item_id: validateSchema.id
                })
                .optional()
        }
    }
};

export {
    schemas
}


