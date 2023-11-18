import { MapMarker, useMap } from 'react-kakao-maps-sdk';

import { Game } from '@type/models';

export const GameMarkers = ({
  initializer,
  games,
  currentMarkerId,
  setCurrentMarkerId,
}: {
  initializer: boolean;
  games: Game[] | null;
  currentMarkerId: number;
  setCurrentMarkerId: (currentMarkerId: number) => void;
}) => {
  const map = useMap();
  return (
    initializer &&
    games &&
    games.map(({ longitude, latitude, id }) => {
      return (
        <MapMarker
          key={id}
          position={{
            lat: latitude,
            lng: longitude,
          }}
          image={{
            src: 'src/assets/mapMarker.svg',
            size: {
              width: currentMarkerId == id ? 60 : 48,
              height: currentMarkerId == id ? 80 : 68,
            },
            options: {
              offset: {
                x: 23,
                y: 55,
              },
            },
          }}
          onClick={(marker) => {
            console.log(currentMarkerId);
            setCurrentMarkerId(id);
            map.panTo(marker.getPosition());
          }}
        />
      );
    })
  );
};
