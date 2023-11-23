import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import logo_footer from '@/assets/icons/logo-footer-icon.svg';
import logo from '@/assets/icons/logo-icon.svg';
import { APP_KEYS } from '@/module/common/constants';
import { SubTitleCommon } from '@/module/common/styles';
import { COLORS, SPACES } from '@/theme';

import * as Styled from './page-layout.styled';

export interface IPageLayout {
  children: ReactNode;
  padding?: string;
}

export type PageType = 'Marketplace' | 'Create';

export const PageLayout = ({ children, padding }: IPageLayout) => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const page = (searchParams.get('page') as Page) ?? 'Marketplace';

  const token = localStorage.getItem(APP_KEYS.STORAGE_KEYS.TOKEN);

  const onSetPage = (str: string) => {
    navigate(`${location.pathname}?page=${str}`);
  };

  const onSignIn = () => {
    navigate(APP_KEYS.ROUTER_KEYS.SING_UP);
  };

  return (
    <Styled.Container>
      <Styled.Wraper>
        <Styled.Header>
          <img src={logo} alt='logo' />

          {token ? (
            <div>
              {['Marketplace', 'Create'].map((v, i) => (
                <SubTitleCommon
                  key={i}
                  className={page === v ? 'is_active  sign_in' : 'sign_in'}
                  onClick={onSetPage.bind(this, v)}
                >
                  {v}
                </SubTitleCommon>
              ))}
            </div>
          ) : (
            <SubTitleCommon className='sign_in' onClick={onSignIn}>
              Sign In
            </SubTitleCommon>
          )}
        </Styled.Header>
      </Styled.Wraper>

      <Styled.Wraper>
        <Styled.Content padding={padding}>{children}</Styled.Content>
      </Styled.Wraper>

      <Styled.Wraper background={COLORS.black}>
        <Styled.Footer>
          <img src={logo_footer} alt='logo' />

          <Styled._SubTitleCommon mt={SPACES.l} className='text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Styled._SubTitleCommon>

          <div>
            {['©2023 Lorem Ipsum. All Right reserved', 'Privacy Policy', 'Terms of Service'].map(
              (v: string, index: number) => (
                <Styled._SubTitleCommon key={index}>{v}</Styled._SubTitleCommon>
              )
            )}
          </div>
        </Styled.Footer>
      </Styled.Wraper>
    </Styled.Container>
  );
};
