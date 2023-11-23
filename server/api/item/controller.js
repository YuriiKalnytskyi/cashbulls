

import { StatusCodes }  from 'http-status-codes';
import { controller } from '../../app/helpers';
import * as service  from './service';


const item = {
    all: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.item.all(connection, { ...req.options, ...req.user });
      },
      StatusCodes.OK
    );
  },
  post: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.item.post(connection, { ...req.options, ...req.user });
      },
      StatusCodes.CREATED
    );
  },
  put: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.item.put(connection, { ...req.options, ...req.user });
      },
      StatusCodes.CREATED
    );
  },
  delete: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.item.delete(connection, { ...req.options, ...req.user });
      },
      StatusCodes.CREATED
    );
  }
};

export {
 item
}

