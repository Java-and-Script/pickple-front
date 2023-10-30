import styled from '@emotion/styled';

import { theme } from '@styles/theme';

export const MainPageContainer = styled.div`
  width: 100vw;
  padding-top: 0.6rem;
  padding-bottom: 5rem;
  background-color: ${theme.PALETTE.GRAY_100};
`;

export const MainPageSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px 0 10px;
  margin-bottom: 1.25rem;
`;
