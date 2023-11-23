import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '@/api/hooks/auth';
import { PageLayout } from '@/module/auth/common';
import { ContainerPage } from '@/module/auth/common/page-layout/page-layout.styled';
import { validationSchemaLogin } from '@/module/auth/validation/shema';
import { Button, Input } from '@/module/common/component';
import { Loader } from '@/module/common/component/loading';
import { APP_KEYS, InputsConst } from '@/module/common/constants';
import { TitleCommon } from '@/module/common/styles';
import { COLORS, FONTS, SPACES } from '@/theme';
import { ILogin } from '@/types';

import * as Styled from './login.styled';

export const Login = () => {
  const navigate = useNavigate();

  const { isLoading, mutate } = useLogin();

  const onSubmit = (data: ILogin) => {
    mutate(data);
  };

  const onSignIn = () => {
    navigate(APP_KEYS.ROUTER_KEYS.SING_UP);
  };

  return (
    <PageLayout padding={`${SPACES.xxxxxxls} 0`}>
      <ContainerPage maxWidth='38.75rem'>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={async (values: ILogin, { setValues, setTouched }) => {
            await onSubmit(values);
            setValues((v: any) => ({ ...v, password: '' }));
            setTouched({ password: false });
          }}
          validationSchema={validationSchemaLogin}
        >
          {({ isValid }) => (
            <Form>
              <TitleCommon ff={FONTS.WEIGHTS.bold} ta='center'>
                Sign In
              </TitleCommon>
              <Styled._SubTitleCommon mt={SPACES.l} color={COLORS.black100} ta='center'>
                Connect with one of your avalible wallet providers
              </Styled._SubTitleCommon>

              {(['email', 'password'] as (keyof typeof InputsConst)[]).map((v, index) => (
                <Input key={index} mt={SPACES.xxxxl} {...InputsConst[v]} type={v} height='3rem' />
              ))}

              <Button
                mt={SPACES.xxxxxxl}
                content={
                  !isLoading ? (
                    'Log in'
                  ) : (
                    <Loader size='small' color={COLORS.purple} height='auto' />
                  )
                }
                type='submit'
                variant='primary'
                disabled={!isValid || isLoading}
              />

              <Styled._SubTitleCommon2 mt={SPACES.l} color={COLORS.black100} ta='center'>
                Don’t have an account?
                <span onClick={onSignIn}>Sign Up</span>
              </Styled._SubTitleCommon2>
            </Form>
          )}
        </Formik>
      </ContainerPage>
    </PageLayout>
  );
};
