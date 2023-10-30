import styled from '@emotion/styled';

import { PALETTE } from '@styles/palette';

export const NavbarContainer = styled.div`
  height: 4.375rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 777;
  background-color: #ffffff;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-top: 1px solid ${PALETTE.GRAY_500};
  padding-bottom: 1rem;
`;

export const NavbarButton = styled.button`
  flex-shrink: 0;
  width: 4.6875rem;
  height: 100%;
  border: none;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;

  img {
    width: 1.5rem;
    height: 1.5rem;
    &.create {
      width: 2.5rem;
      height: 2.5rem;
    }
    filter: invert(47%) sepia(7%) saturate(735%) hue-rotate(182deg)
      brightness(92%) contrast(90%);
    &.currentPage {
      filter: invert(28%) sepia(83%) saturate(6138%) hue-rotate(351deg)
        brightness(91%) contrast(89%);
    }
  }
  p {
    color: ${PALETTE.GRAY_500};
    &.currentPage {
      color: ${PALETTE.RED_600};
    }
  }
`;
