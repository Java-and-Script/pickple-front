import { MapMarker } from 'react-kakao-maps-sdk';

import { Game } from '@type/models';

export const GameMarkers = ({
  initializer,
  games,
}: {
  initializer: boolean;
  games: Game[] | null;
}) => {
  return (
    initializer &&
    games &&
    games.map(({ longitude, latitude }) => {
      return (
        <MapMarker
          key={`${longitude}-${latitude}`}
          position={{
            lat: latitude,
            lng: longitude,
          }}
          image={{
            src: 'src/assets/mapMarker.svg',
            size: {
              width: 48,
              height: 68,
            },
            options: {
              offset: {
                x: 23,
                y: 55,
              },
            },
          }}
        />
      );
    })
  );
};
