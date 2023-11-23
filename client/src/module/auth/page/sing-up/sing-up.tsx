import {Form, Formik} from 'formik';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import {PageLayout} from '@/module/auth/common';
import {ContainerPage} from '@/module/auth/common/page-layout/page-layout.styled';
import * as Styled from '@/module/auth/page/login/login.styled';
import {validationSchemaSingUp} from '@/module/auth/validation/shema';
import {Button, CheckBoxFormik, Input} from '@/module/common/component';
import {Loader} from '@/module/common/component/loading';
import {APP_KEYS, InputsConst} from '@/module/common/constants';
import {TitleCommon} from '@/module/common/styles';
import {COLORS, FONTS, SPACES} from '@/theme';
import {ISingUp} from '@/types';
import {useSingUp} from "@/api/hooks/auth";

type ISingUpBase = ISingUp & { is_agree?: boolean; confirm_password: string };

export const SingUp = () => {
    const navigate = useNavigate();

    const {isLoading, mutate} = useSingUp();

    const onSubmit = (data: ISingUpBase) => {
        delete data?.is_agree;
        delete data?.confirm_password;

        mutate(data);
    };

    const onNavigateLogin = () => {
        navigate(APP_KEYS.ROUTER_KEYS.LOGIN);
    };

    const onBlur = () => {
        window.scrollTo(0, 0);
    };

    return (
        <PageLayout padding={`${SPACES.xxxxxxls} 0`}>
            <ContainerPage maxWidth='38.75rem'>
                <Formik
                    initialValues={{
                        first_name: '',
                        email: '',
                        password: '',
                        confirm_password: '',
                        is_agree: false
                    }}
                    onSubmit={onSubmit}
                    validationSchema={validationSchemaSingUp}
                >
                    {({isValid}) => (
                        <Form onBlur={onBlur}>
                            <TitleCommon ff={FONTS.WEIGHTS.bold} ta='center'>
                                Sign Up
                            </TitleCommon>
                            <Styled._SubTitleCommon mt={SPACES.l} color={COLORS.black100} ta='center'>
                                Connect with one of your avalible wallet providers
                            </Styled._SubTitleCommon>

                            <Input mt={SPACES.xxxxl} {...InputsConst.first_name} />

                            {(['email', 'password', 'confirm_password'] as (keyof typeof InputsConst)[]).map(
                                (v, index) => (
                                    <Input key={index} mt={SPACES.xxxxl} {...InputsConst[v]} type={v}/>
                                )
                            )}

                            <CheckBoxFormik
                                mt={SPACES.l}
                                name='is_agree'
                                label={
                                    <>
                                        I agree to all <Styled.Span>Terms</Styled.Span> and{' '}
                                        <Styled.Span>conditions</Styled.Span> and Privacy Policy
                                    </>
                                }
                            />

                            <Button
                                mt={SPACES.xxxxl}
                                content={
                                    !isLoading ? (
                                        'Create Account'
                                    ) : (
                                        <Loader size='small' color={COLORS.purple} height='auto'/>
                                    )
                                }
                                type='submit'
                                variant='primary'
                                disabled={!isValid || isLoading}
                            />

                            <Styled._SubTitleCommon2 mt={SPACES.l} color={COLORS.black100} ta='center'>
                                Already have an account?
                                <span onClick={onNavigateLogin}>Log In</span>
                            </Styled._SubTitleCommon2>
                        </Form>
                    )}
                </Formik>
            </ContainerPage>
        </PageLayout>
    );
};
