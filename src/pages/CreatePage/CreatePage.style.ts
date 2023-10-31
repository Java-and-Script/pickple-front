import styled from '@emotion/styled';

import { theme } from '@styles/theme';

export const CreatePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.PALETTE.GRAY_100};
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CreatePageCard = styled.div`
  width: 100%;
  background-color: white;
  padding: 1.25rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
