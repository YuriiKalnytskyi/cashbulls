import styled from 'styled-components';

import { Center, DivCommon, SubTitleCommon } from '@/module/common/styles';
import { _Scroll } from '@/module/common/styles/scroll';
import { COLORS, FONTS, MEDIA, SPACES } from '@/theme';

export const Container = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  ${_Scroll};

  background: ${COLORS.white};
`;

export const Wraper = styled(DivCommon)`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
`;

export const Header = styled(DivCommon)`
  width: 90%;
  height: 100px;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1.75rem 0rem;

  & > img {
    width: fit-content;
    height: 1.75rem;
  }

  & > div {
    width: 100%;
    position: absolute;

    display: flex;
    justify-content: center;
    gap: 60px;

    & > .sign_in {
      cursor: pointer;

      font-weight: ${FONTS.WEIGHTS.medium};
      font-size: ${FONTS.SIZES.l};
      line-height: ${FONTS.SIZES.xxxxxl_};
    }

    & > .is_active {
      cursor: pointer;
      position: relative;

      &::after {
        content: '';
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${COLORS.purple};
      }
    }
  }

  & > .sign_in {
    cursor: pointer;
    &:hover {
      color: ${COLORS.purple};
      text-decoration-line: underline;
    }
  }
`;

export const Content = styled.div<{ padding: string }>`
  width: 90%;
  height: 100%;
  min-height: 80%;

  margin: 0 auto;
  padding: ${({ padding }) => padding ?? '0'};

  ${Center};

  @media screen and (max-width: ${MEDIA.laptop_custom}) {
    width: 100%;
  }
`;

export const Footer = styled(DivCommon)`
  width: 90%;

  color: ${COLORS.white};

  padding: 1.75rem 0rem;

  & > img {
    width: fit-content;
    height: 1.75rem;
  }

  & > .text {
    max-width: 31.25rem;
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-top: 4.375rem;
  }
`;

export const _SubTitleCommon = styled(SubTitleCommon)`
  font-size: ${FONTS.SIZES.l};
  font-weight: ${FONTS.WEIGHTS.medium};
  line-height: ${FONTS.SIZES.xxxxxl_};
  color: ${COLORS.gray250};
`;

export const ContainerPage = styled(DivCommon)`
  border-radius: 24px;
  box-shadow: 12px 12px 100px 0px rgba(206, 206, 206, 0.25);

  padding: ${SPACES.xxxxxxl_};
`;
