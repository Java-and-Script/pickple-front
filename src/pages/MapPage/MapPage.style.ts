import styled from '@emotion/styled';

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
