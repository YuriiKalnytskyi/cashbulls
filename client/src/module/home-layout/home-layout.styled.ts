import styled from 'styled-components';

import { DivCommon, Fonts, TitleCommon } from '@/module/common/styles';
import { COLORS, FONTS, MEDIA, SPACES } from '@/theme';

export const Container = styled(DivCommon)`
  min-height: 80dvh;
`;

export const _SubTitleCommon = styled.p`
  ${Fonts};
  opacity: 0.4;

  font-size: ${FONTS.SIZES.xl};
`;

export const Tab = styled(DivCommon)`
  width: fit-content;
  border-radius: 60px;
  border: 1px solid ${COLORS.gray225};
  background: ${COLORS.white};

  ${Fonts};

  cursor: pointer;

  padding: ${SPACES.xxs} ${SPACES.xxxxl};

  &.is_active {
    border: 1px solid ${COLORS.purple};
    background: ${COLORS.purple};

    color: ${COLORS.white};
  }
`;

export const ItemContainer = styled(DivCommon)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: ${SPACES.l};

  @media (max-width: 900px) {
    justify-content: space-around;
  }

  @media (max-width: ${MEDIA.tablet_s}) {
    padding: 0 ${SPACES.l};
  }
`;

export const LoadMore = styled(TitleCommon)`
  color: ${COLORS.purple};
  cursor: pointer;
  text-decoration: underline;
`;
