import { DayPicker } from 'react-day-picker';
import styled from 'styled-components';

import { ICalendarProps } from '@/module/common/types';
import { COLORS, MEDIA } from '@/theme';

export const CalendarContainer = styled.div<Partial<ICalendarProps>>`
  position: relative;

  width: ${({ width }) => width ?? '100%'};

  margin-left: ${({ ml }) => ml ?? '0'};
  margin-right: ${({ mr }) => mr ?? '0'};
  margin-bottom: ${({ mb }) => mb ?? '0'};
  margin-top: ${({ mt }) => mt ?? '0'};
`;

export const Calendar = styled(DayPicker)`
  position: absolute;
  top: 0;

  padding: 0.625rem;

  z-index: 100;

  border: 1px solid ${COLORS.black};
  border-radius: 0.5rem;
  background-color: ${COLORS.white};

  @media screen and (max-width: ${MEDIA.tablet_s}) {
    border: none;
    margin: 1rem auto;
  }
`;
