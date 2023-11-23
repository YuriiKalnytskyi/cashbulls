import styled from 'styled-components';

import { DivCommon } from '@/module/common/styles';
import { COLORS, MEDIA, SPACES } from '@/theme';

export const Container = styled(DivCommon)`
  max-width: 23.5rem;
  width: 24%;
  max-height: 41.25rem;

  display: flex;

  border-radius: ${SPACES.xxxxl};
  background: ${COLORS.white250};

  padding: ${SPACES.l};

  @media (max-width: ${MEDIA.laptop}) and (min-width: 900px) {
    width: 32%;
  }

  @media (max-width: 900px) {
    width: 47%;
  }

  @media (max-width: ${MEDIA.tablet_s}) {
    width: 48%;
  }

  & > img {
    border-radius: ${SPACES.xxxxl};
  }
`;

export const UserInfoContainer = styled(DivCommon)`
  display: flex;
  flex-direction: row;

  margin: ${SPACES.l} 0;
  gap: ${SPACES.m};

  & > img {
    width: 3.375rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  & > div {
    display: flex;
    gap: ${SPACES.xxsm};
    flex-direction: column;

    & > .create {
      opacity: 0.6;
    }
  }
`;

export const PriceContainer = styled(DivCommon)`
  & > .current {
    opacity: 0.6;
  }

  & > .price {
    display: flex;
    gap: ${SPACES.xxsm};

    & > .price_info {
      opacity: 0.6;
    }
  }
`;
