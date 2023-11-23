import express from 'express';

const router = express.Router({});
import asyncHandler from 'express-async-handler';

import * as controller from './controller';
import {validator} from '../../app/helpers';
import {schemas} from './validator';


router.post(
    '/login',
    validator.main(schemas.router.auth.login),
    asyncHandler(controller.auth.login)
);

router.post(
    '/sing-up',
    validator.main(schemas.router.auth.sing_up),
    asyncHandler(controller.auth.sing_up)
);


export default router
