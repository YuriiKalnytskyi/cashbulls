import * as Yup from 'yup';

import { validateSchema } from '../../common/validation/validate-shema';

export const validationSchemaLogin = Yup.object().shape({
  email: validateSchema.email,
  password: validateSchema.password
});

export const validationSchemaSingUp = Yup.object().shape({
  first_name: validateSchema.name,
  email: validateSchema.email,
  password: validateSchema.password,
  confirm_password: validateSchema.password.oneOf(
    [Yup.ref('password')],
    'The password confirmation does not match'
  ),
  is_agree: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and conditions')
    .required('You must agree to the terms and conditions')
});
