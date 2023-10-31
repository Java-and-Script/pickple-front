import styled from '@emotion/styled';

import { Image } from '@components/shared/Image';

import { theme } from '@styles/theme';

export const RegisterWrapper = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const RegisterContainer = styled.div`
  background-color: ${theme.PALETTE.GRAY_100};
  ${({ theme }) => theme.STYLES.FLEX_CENTER};
  flex-direction: column;
  justify-content: space-evenly;
  gap: 30px;
  margin: 50px 0;
`;

export const StyledImage = styled(Image)`
  margin-bottom: 20px;
`;

export const ScrollBox = styled.div`
  height: 300px;
  overflow: scroll;
  border-radius: 30px;
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const StyledButtonGroup = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;
