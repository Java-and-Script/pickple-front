import styled from '@emotion/styled';

import { theme } from '@styles/theme';

export const MapContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const MapSubContainer = styled.div`
  overflow: scroll;
  width: 100vw;
  height: 50%;
`;

export const MapLoading = styled.div`
  width: '100%';
  height: '50%';
`;

export const MAP_PAGE_BUTTON_PROP = {
  width: '100%',
  height: '3.5rem',
  text: '더보기',
  fontSize: `${theme.FONT_SIZE.LG}`,
  fontWeight: theme.FONT_WEIGHT.BOLD,
  lineHeight: 0,
  textColor: `${theme.PALETTE.RED_400}`,
  borderColor: `${theme.PALETTE.RED_400}`,
  backgroundColor: 'white',
};
