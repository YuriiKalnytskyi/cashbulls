import styled from 'styled-components';

import { Center, DivCommon } from '@/module/common/styles';
import { COLORS, SPACES } from '@/theme';

export const OptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: ${SPACES.xxs} 0;
  gap: ${SPACES.xxs};
`;

export const TextContainer = styled(DivCommon)`
  & > .first > span {
    color: ${COLORS.purple};
  }

  & > .last {
    opacity: 0.6;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${SPACES.l};
  object-fit: cover;
`;

export const AvatarContainer = styled.div<{ dragging: boolean }>`
  position: relative;
  margin-bottom: ${SPACES.xxs};
  width: 100%;
  aspect-ratio: 1/1;
  max-height: 22rem;
  background: ${({ dragging }) => (dragging ? COLORS.gray100 : COLORS.white200)};
  border: 1px dashed ${({ dragging }) => (dragging ? COLORS.green : COLORS.gray100)};
  border-radius: ${SPACES.l};

  ${Center};

  & > input {
    position: absolute;
    width: 100%;
    aspect-ratio: 1/1;
    opacity: 0;
    overflow: hidden;
  }
`;

export const AddAvatar = styled.img`
  position: absolute;
  top: 1.8rem;
  left: 2.6rem;

  &:hover {
    cursor: pointer;

    rect {
      fill: black;
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${COLORS.gray};
  padding: 0;
  margin: 0;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 80%;
  border-radius: 5px;
  cursor: pointer;
`;
