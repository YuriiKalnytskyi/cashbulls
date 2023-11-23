import {StatusCodes} from 'http-status-codes';
import {controller} from '../../app/helpers';
import * as service from './service';


const auth = {
    login: async (req, res) => {
        await controller.sendJson(
            res,
            async (connection) => {
                return await service.auth.login(connection, { ...req.options, ...req.user });
            },
            StatusCodes.OK
        );
    },
    sing_up: async (req, res) => {
        await controller.sendJson(
            res,
            async (connection) => {
                return await service.auth.sing_up(connection, { ...req.options, ...req.user });
            },
            StatusCodes.CREATED
        );
    },
};

export {
    auth
}

