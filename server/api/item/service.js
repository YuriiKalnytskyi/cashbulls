import {doom, files} from '../../app/helpers';
import {Op,} from 'sequelize';
import Items from "../../db/postgres/model/items";
import ActionsItems from "../../db/postgres/model/actions-items";

const item = {
    all: async (connection, options) => {
        const where = {}

        if (options.category.length) {
            where.category = options.category
        }

        const limit = 10

        const { count, rows } = await connection.Items.findAndCountAll({
            where: {
                ...where
            },
            include: [
                {
                    required: false,
                    model: connection.Users,
                    as: 'user',
                    attributes: {
                        exclude: ['password']
                    }
                },
                {
                    required: false,
                    model: connection.ActionsItems,
                    as: 'actions',
                    order: [ ['id', 'DESC'], ['createdAt', 'ASC']]
                },

            ],
            offset: 0,
            limit: limit * options.page ?? 1

        });

        return {
            success: true,
            result: {
                count: count,
                items: rows
            }
        };
    },
    post: async (connection, options) => {

        const file = options.file
        options.user_id = options.id

        delete options.file
        delete options.id


        if (file) {
            try {
                const { secure_url } = await files.uploadFileCloudinary(file, 'file');
                options.file = secure_url;

            } catch (e) {
                return doom.error.uploadImageAvatar();
            }
        }


        await connection.Items.create({ ...options });

        return {
            success: true,
            result: {
                message: 'Item Created'
            }
        };
    },
    put: async (connection, options) => {
        options.buyer_id = options.id;

        delete options.id


        await connection.ActionsItems.create({ ...options });


        return {
            success: true,
            result: {
                message: `Item #${options.item_id} update.`
            }
        };
    }
};

export {
    item
}


