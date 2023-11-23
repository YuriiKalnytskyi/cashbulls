import { getIn, useFormikContext } from 'formik';
import React, { useState } from 'react';
// overriding styles
import 'react-day-picker/dist/style.css';

import canlender_icon from '@/assets/icons/default/canlender-icon.svg';
import { ICalendarProps } from '@/module/common/types';
import '@/styles/react-day-picker.css';

import { Input } from '../index';
import * as Styled from './input-calendar.styled';

export const InputCalendar = ({
  name,
  label,
  width,
  placeholder,
  height,
  isCache = false,
  ...props
}: ICalendarProps) => {
  const [isCalendarOpened, setIsCalendarOpened] = useState<boolean>(false);
  const { values, setValues } = useFormikContext();

  const value = getIn(values, name);

  const date = value ? new Date(value) : new Date();

  const handleButtonClick = () => {
    setIsCalendarOpened(!isCalendarOpened);
  };

  const customSetValues = (data: any) => {
    // @ts-ignore
    values.experiences[name.split('[')[1].split(']')[0]][name.split('.')[1]] = data;
  };

  const onSelect = (_data: any) => {
    const d = _data ?? new Date();
    const data = d.toString().split(' ').splice(1, 3).join(' ');

    name.includes('experiences')
      ? customSetValues(data)
      : setValues((v: any) => ({ ...v, [name]: data }));
    handleButtonClick();
  };

  const onFocus = (flag: boolean) => () => {
    window.innerWidth > 600 && setIsCalendarOpened(flag);
  };

  return (
    <Styled.CalendarContainer width={width} {...props} onMouseOut={onFocus(false)}>
      <div onClick={handleButtonClick}>
        <Input
          isCache={isCache}
          name={name}
          label={label}
          placeholder={placeholder}
          width='100%'
          height={height}
          endIcon={{ icon: canlender_icon }}
        />
      </div>

      {isCalendarOpened && (
        <div onMouseOver={onFocus(true)} onMouseOut={onFocus(false)}>
          <Styled.Calendar mode='single' onSelect={(range) => onSelect(range)} selected={date} />
        </div>
      )}
    </Styled.CalendarContainer>
  );
};
