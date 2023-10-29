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
  //   background-color: ${theme.PALETTE.GRAY_400};
  //   grid-gap: 0.5px;
`;

export const ItemBorderWrapper = styled.div`
  display: inline;
  border-radius: 0%;
  background-color: white;
  border-right: 0.5px solid ${theme.PALETTE.GRAY_400};
  border-bottom: 0.5px solid ${theme.PALETTE.GRAY_400};
  &:nth-child(3n):nth-last-child(1) {
    border-bottom: none;
  }
  &:nth-child(3n + 2):nth-last-child(1) {
    border-bottom: none;
  }
  &:nth-child(3n + 2):nth-last-child(2) {
    border-bottom: none;
  }
  &:nth-child(3n + 1):nth-last-child(1) {
    border-bottom: none;
  }
  &:nth-child(3n + 1):nth-last-child(2) {
    border-bottom: none;
  }
  &:nth-child(3n + 1):nth-last-child(3) {
    border-bottom: none;
  }

  &:nth-child(3n) {
    border-right: none;
  }
`;
