import { Form, Formik } from 'formik';
import React from 'react';

import { useItemMutation } from '@/api/hooks/item';
import {
  Button,
  Input,
  InputCalendar,
  InputFile,
  InputMatchedWords,
  InputTextArea
} from '@/module/common/component';
import { Loader } from '@/module/common/component/loading';
import { Category } from '@/module/common/constants';
import { DivCommon, TitleCommon } from '@/module/common/styles';
import { validationSchemaCreate } from '@/module/item/validation/shema';
import { COLORS, FONTS, SPACES } from '@/theme';
import { IItem } from '@/types';

import * as Styled from './create-item.styled';

const inputCalendar = [
  {
    name: 'start_data',
    label: 'Starting date'
  },
  {
    name: 'end_data',
    label: 'Ending date'
  }
];

export const CreateItem = ({socket}: {socket: any}) => {
  const { mutate, isLoading } = useItemMutation.post(socket);

  const onSubmit = (data: IItem) => {
    mutate(data);
  };

  return (
    <Styled.MainContainer>
      <Styled.Container>
        <TitleCommon fs={FONTS.SIZES.xxxxxxl_} fw={FONTS.WEIGHTS.bold}>
          Create your item
        </TitleCommon>

        <Formik
          initialValues={{
            method: 'Time Auction',
            name: '',
            start_data: '',
            end_data: '',
            min_price: '',
            category: '',
            description: '',
            file: ''
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchemaCreate}
        >
          {({ isValid }) => (
            <Form>
              <DivCommon width='100%' fd='row' gap={SPACES.xxxxxxls}>
                <DivCommon width='60%'>
                  <Input name='name' label='Item name' placeholder='Item name' height='3.5rem' />
                  <DivCommon
                    margin={`${SPACES.xxxxxxls} 0 0 0`}
                    width='100%'
                    fd='row'
                    jc='space-between'
                  >
                    {inputCalendar.map((v, i) => (
                      <InputCalendar
                        key={i}
                        {...v}
                        label='Starting date'
                        placeholder='DD-MM-YYYY'
                        width='48%'
                        height='3.5rem'
                      />
                    ))}
                  </DivCommon>
                  <Input
                    mt={SPACES.xxxxxxls}
                    name='min_price'
                    label='Minimum Bid'
                    placeholder='Minimum Bid'
                    height='3.5rem'
                  />

                  <InputMatchedWords
                    height='3.5rem'
                    mt={SPACES.xxxxxxls}
                    matchedWords={Category}
                    name='category'
                    label='Select category'
                    placeholder='Select category'
                  />

                  <InputTextArea
                    mt={SPACES.xxxxxxls}
                    name='description'
                    label='Description'
                    placeholder='eg. This  is very limited item?'
                    rows={3}
                    maxLength={1000}
                  />

                  <Button
                    mt={SPACES.xxxxxxl}
                    content={
                      !isLoading ? (
                        'Create Item'
                      ) : (
                        <Loader size='small' color={COLORS.purple} height='auto' />
                      )
                    }
                    type='submit'
                    variant='primary'
                    disabled={!isValid || isLoading}
                  />
                </DivCommon>
                <DivCommon width='40%'>
                  <InputFile name='file' />
                </DivCommon>
              </DivCommon>
            </Form>
          )}
        </Formik>
      </Styled.Container>
    </Styled.MainContainer>
  );
};
