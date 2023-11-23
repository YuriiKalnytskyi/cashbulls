import styled from 'styled-components';

import { DivCommon } from '@/module/common/styles';
import { COLORS } from '@/theme';

export const MainContainer = styled(DivCommon)`
  min-height: 80dvh;
`;

export const Container = styled(DivCommon)`
  max-width: 1056px;
  width: 100%;

  padding: 3.5rem;
  margin: 0 auto;

  border-radius: 32px;
  background: ${COLORS.white};
  box-shadow: 12px 12px 100px 0px ${COLORS.gray300};
`;
