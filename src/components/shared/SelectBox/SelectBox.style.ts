import styled from '@emotion/styled';

import { theme } from '@styles/theme';

import type { SelectBoxProps } from './SelectBox';

export const ToggleButtonGroup = styled.div<SelectBoxProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: ${(props) => props.border};
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
`;

export const ItemBorderWrapper = styled.div`
  display: inline;
  border-radius: 0%;
  background-color: white;
  border-right: 0.5px solid ${theme.PALETTE.GRAY_400};
  border-bottom: 0.5px solid ${theme.PALETTE.GRAY_400};
  &:last-child {
    border-bottom: none;
  }
  &:nth-child(3n) {
    border-right: none;
  }
`;
