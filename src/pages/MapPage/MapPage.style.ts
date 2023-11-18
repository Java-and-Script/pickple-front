import styled from '@emotion/styled';

import { Button } from '@components/shared/Button';

import { theme } from '@styles/theme';

export const MapContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  position: relative;
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

export const LoadingButton = styled(Button)<{ isLoadingRefresh: boolean }>`
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
  display: flex;
  width: auto;
  height: auto;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  padding: 0.2rem 0.5rem;
  & > svg {
    ${({ isLoadingRefresh }) =>
      isLoadingRefresh && 'animation:rotate 0.8s linear infinite;'}
    width:1rem;
    height: 1rem;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const MyLocationButton = styled.button<{
  position: { latitude: number; longitude: number };
  location: { latitude: number; longitude: number };
}>`
  all: unset;
  position: absolute;
  z-index: 10;
  left: 9%;
  top: 45%;
  transform: translate(-50%, -50%);
  display: flex;
  width: auto;
  height: auto;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
  & > svg {
    path {
      ${({ location, position }) =>
        location.latitude !== position.latitude ||
        location.longitude !== position.longitude
          ? `fill:${theme.PALETTE.RED_600};`
          : `fill:${theme.PALETTE.GRAY_300};`}
    }
    width: 2rem;
    height: 2rem;
  }
`;
