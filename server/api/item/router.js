import express from 'express';

const router = express.Router({});
import asyncHandler from 'express-async-handler';


import * as controller from './controller';
import {validator} from '../../app/helpers';
import {auth} from '../../app/middlewares';
import {schemas} from './validator';

router.post(
    '/all',
    asyncHandler(auth.user),
    validator.main(schemas.router.item.all),
    asyncHandler(controller.item.all)
);

router.post(
    '/',
    asyncHandler(auth.user),
    validator.main(schemas.router.item.post),
    asyncHandler(controller.item.post)
);

router.put(
    '/',
    asyncHandler(auth.user),
    validator.main(schemas.router.item.put),
    asyncHandler(controller.item.put)
);


export default router
