import styled from '@emotion/styled';

import { theme } from '@styles/theme';

export const RegisterContainer = styled.div`
  background-color: ${theme.PALETTE.GRAY_100};
  ${({ theme }) => theme.STYLES.FLEX_CENTER};
  flex-direction: column;
  justify-content: space-evenly;
  gap: 30px;
  height: auto;
  margin-top: 100px;
`;
export const ScrollBox = styled.div`
  height: 300px;
  overflow: scroll;
  border-radius: 30px;
  border: 1px solid gray;
`;
export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const StyledButtonGroup = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;
