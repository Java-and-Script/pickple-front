import styled from '@emotion/styled';

export const StyledDeemBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_900};
  opacity: 0.5;
`;

export const StyledBottomSheet = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75%;
  ${({ theme }) => theme.STYLES.FLEX_CENTER};
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  animation: bottom-sheet-up 0.2s ease-in-out;
`;

export const StyledModalHeader = styled.div`
  position: absolute;
  top: 0.69rem;
  width: 3.125rem;
  height: 0.1875rem;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_300};
`;

export const StyledModalBottom = styled.div`
  @keyframes bottom-sheet-up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bottom-sheet-down {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

export const BottomSheetContainer = styled.div``;
