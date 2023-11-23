import styled from 'styled-components';

import { Fonts } from '@/module/common/styles';
import { COLORS } from '@/theme';

export const _SubTitleCommon = styled.p`
  ${Fonts};
  opacity: 0.4;
`;

export const _SubTitleCommon2 = styled.p`
  ${Fonts};

  & > span {
    margin-left: 10px;
    color: ${COLORS.purple};
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

export const Span = styled.span`
  ${Fonts};
  text-decoration-line: underline;
  margin: 0 3px;
`;
