import styled from 'styled-components';

import { Fonts, Margin } from '@/module/common/styles';
import { IMargin } from '@/module/common/types';
import { COLORS, SPACES } from '@/theme';

export const Label = styled.label<IMargin>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  ${Margin};
  ${Fonts}
  margin-left: -${SPACES.xs};

  &:hover {
    & > .text::before {
      border: 1px solid ${COLORS.purple} !important;
    }
  }
`;

export const Input = styled.input<{ background?: string }>`
  opacity: 0;
  visibility: hidden;

  &:checked ~ .text::after {
    opacity: 1;
    background: red;
  }

  &:checked ~ .text::before {
    border: 1px solid ${({ background }) => background ?? COLORS.purple} !important;
  }

  &:focus ~ .text::before {
    box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Span = styled.span<{ height?: string; colorText?: string; background?: string }>`
  position: relative;
  border-radius: 10px;

  & > span {
    max-width: 100%;
    display: flex;

    ${Fonts};

    color: ${({ colorText }) => colorText ?? COLORS.black};

    padding-left: ${SPACES.xxxxxxls};
  }

  &:before {
    display: block;
    content: '';
    height: ${({ height }) => height ?? '1.5rem'};
    aspect-ratio: 1/1;
    border-radius: 5px;

    border: 1px solid ${({ background }) => background ?? COLORS.purple} !important;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:after {
    display: block;
    content: '';
    height: ${({ height }) => (height ? `${+height.split('rem')[0] / 2 + 0.2}rem` : '1rem')};
    aspect-ratio: 1/1;
    -webkit-clip-path: polygon(45% 64%, 84% 14%, 100% 28%, 47% 100%, 0 49%, 15% 32%);
    clip-path: polygon(45% 64%, 84% 14%, 100% 28%, 47% 100%, 0 49%, 15% 32%);
    -webkit-transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms ease-in-out;
    box-shadow: inset 1em 1em ${({ background }) => (background ? background : COLORS.purple)};

    opacity: 0;
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
