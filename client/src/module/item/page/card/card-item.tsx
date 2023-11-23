import { Form, Formik } from 'formik';
import React from 'react';

import { useItemMutation } from '@/api/hooks/item';
import default_avatar from '@/assets/image/png/default-avatar.png';
import default_product from '@/assets/image/png/default-product.png';
import { Button, Input } from '@/module/common/component';
import { Loader } from '@/module/common/component/loading';
import { DivCommon, SubTitleCommon } from '@/module/common/styles';
import { validationSchemaPrice } from '@/module/item/validation/shema';
import { COLORS, FONTS, SPACES } from '@/theme';
import { IItemResponse } from '@/types';

import * as Styled from './card-item.styled';

export interface IItem {
  item: IItemResponse;
    socket: any
}

export const CardItem = ({ item, socket }: IItem) => {
  const { isLoading, mutate } = useItemMutation.put(socket);

  const onSubmit = (data: { price: string }) => {
    mutate({ price: data.price, item_id: item.id });
  };

  const convertDate = (inputDate: any) => {
    const date = new Date(inputDate);

    const month = date.getMonth().toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${year}:${month}:${hours}:${minutes}`;
  };
  const price = item.actions.length ? item.actions[item.actions.length - 1].price : item.min_price;

  return (
    <Styled.Container>
      <img src={item.file ?? default_product} alt='item-image' />

      <SubTitleCommon mt={SPACES.l} fw={FONTS.WEIGHTS.medium} fs={FONTS.SIZES.xl}>
        {item.name}
      </SubTitleCommon>
      <Styled.UserInfoContainer>
        <img src={item.user.avatar ?? default_avatar} alt='avatar-user' />
        <div>
          <SubTitleCommon className='create' fs={FONTS.SIZES.m}>
            Created by
          </SubTitleCommon>
          <SubTitleCommon fw={FONTS.WEIGHTS.semi_bold} fs={FONTS.SIZES.l}>
            {item.user.first_name}
          </SubTitleCommon>
        </div>
      </Styled.UserInfoContainer>

      <Styled.PriceContainer>
        <SubTitleCommon className='current' fs={FONTS.SIZES.m}>
          Current Bid:
        </SubTitleCommon>

        <SubTitleCommon className='price' fw={FONTS.WEIGHTS.medium} fs={FONTS.SIZES.l}>
          {price} ETH
          <SubTitleCommon className='price_info' fs={FONTS.SIZES.m}>
            (Count Down: {convertDate(item.createdAt)})
          </SubTitleCommon>
        </SubTitleCommon>
      </Styled.PriceContainer>

      <Formik
        initialValues={{
          price: ''
        }}
        onSubmit={async (values: any, { setValues }) => {
          await onSubmit(values);
          setValues((v: any) => ({ ...v, price: '' }));
        }}
        validationSchema={validationSchemaPrice(price)}
      >
        {({ isValid }) => (
          <Form>
            <DivCommon gap={SPACES.l} margin={`${SPACES.xxxxl} 0 0 0`} fd='row' ai='center'>
              <Input type='number' height='3.5rem' name='price' placeholder='Bid' />
              <Button
                width='50%'
                height='3.5rem'
                content={
                  !isLoading ? (
                    'Place a bid'
                  ) : (
                    <Loader size='small' color={COLORS.purple} height='auto' />
                  )
                }
                type='submit'
                variant='primary'
                disabled={!isValid || isLoading}
              />
            </DivCommon>
          </Form>
        )}
      </Formik>
    </Styled.Container>
  );
};
