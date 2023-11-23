import * as Yup from 'yup';

import { validateSchema } from '@/module/common/validation/validate-shema';

export const validationSchemaPrice = (min_price: string | number) => {
  return Yup.object().shape({
    price: Yup.number().moreThan(+min_price, `The price must be greater than ${min_price}`)
  });
};

export const validationSchemaCreate = Yup.object().shape({
  method: validateSchema.text,
  name: validateSchema.text,
  start_data: validateSchema.text,
  end_data: validateSchema.text.when('start_data', (start: any, schema) => {
    return schema.test('end_data', 'invalid date', function (value) {
      const { start_data } = this.parent;
      const startDateObj = new Date(start_data);
      const endDateObj = new Date(value ?? '');

      return endDateObj >= startDateObj;
    });
  }),

  min_price: validateSchema.text,
  category: validateSchema.text,
  description: validateSchema.text,
  file: validateSchema.text
});
