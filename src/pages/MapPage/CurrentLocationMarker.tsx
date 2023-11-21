import { MapMarker } from 'react-kakao-maps-sdk';

export const CurrentLocationMarker = ({
  location,
}: {
  location: {
    latitude: number;
    longitude: number;
  };
}) => {
  return (
    <MapMarker
      position={{
        lat: location.latitude,
        lng: location.longitude,
      }}
      image={{
        src: 'src/assets/mapCurrentLocation.svg',
        size: {
          width: 22,
          height: 22,
        },
        options: {
          offset: {
            x: 11,
            y: 11,
          },
        },
      }}
    />
  );
};
