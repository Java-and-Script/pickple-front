import toast from 'react-hot-toast';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { Game } from '@type/models';

import MarkerSvg from '@assets/mapMarker.svg';

type GameLocationProps = {
  match: Game;
};

export const GameLocation = ({ match }: GameLocationProps) => {
  return (
    <Map
      center={{ lat: match.latitude, lng: match.longitude }}
      style={{ width: '100%', height: '300px' }}
      level={4}
    >
      <MapMarker
        position={{
          lat: match.latitude,
          lng: match.longitude,
        }}
        image={{
          src: MarkerSvg,
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
        onClick={() => copyLocation(match.mainAddress)}
        clickable={true}
      ></MapMarker>
    </Map>
  );
};

const copyLocation = async (location: Game['mainAddress']) => {
  try {
    await navigator.clipboard.writeText(location);

    toast.success('위치 정보가 복사되었습니다.');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};
