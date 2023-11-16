import { Map } from 'react-kakao-maps-sdk';

import { Button } from '@components/shared/Button';

import { CurrentLocationMarker } from './CurrentLocationMarker';
import { GameMarkers } from './GameMarkers';
import { GamesNearInMap } from './GamesNearInMap';
import { useMapPage } from './MapPage.hook';
import {
  MAP_PAGE_BUTTON_PROP,
  MapContainer,
  MapSubContainer,
} from './MapPage.style';

export const MapPage = () => {
  const {
    location,
    position,
    setPosition,
    games,
    initializer,
    level,
    setLevel,
    fetchGames,
  } = useMapPage();
  return (
    <MapContainer>
      {location && position ? (
        <Map
          center={{ lat: position.latitude, lng: position.longitude }}
          style={{ width: '100%', height: '50%' }}
          level={level}
          onDragEnd={(map) => {
            setPosition({
              latitude: map.getCenter().getLat(),
              longitude: map.getCenter().getLng(),
            });
          }}
          onZoomChanged={(map) => setLevel(map.getLevel())}
        >
          <CurrentLocationMarker location={location} />
          <GameMarkers initializer={initializer} games={games} />
          <Button {...MAP_PAGE_BUTTON_PROP} onClick={fetchGames}>
            새로고침
          </Button>
          <Button
            {...MAP_PAGE_BUTTON_PROP}
            onClick={() => {
              setPosition({ ...location });
            }}
          >
            내위치로
          </Button>
        </Map>
      ) : (
        <div style={{ width: '100%', height: '50%', fontSize: '300px' }}>
          loading...
        </div>
      )}
      {position && (
        <p>{`${position.latitude},${position.longitude},${level}`}</p>
      )}
      <MapSubContainer>{<GamesNearInMap games={games} />}</MapSubContainer>
    </MapContainer>
  );
};
