import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import { Modal } from '@components/Modal';

import MyLocation from '@assets/MyLocation.svg?react';
import Refresh from '@assets/refresh.svg?react';

import { CurrentLocationMarker } from './CurrentLocationMarker';
import { GameMarkers } from './GameMarkers';
import { GamesDetailPage } from './GamesDetailPage';
import { GamesNearInMap } from './GamesNearInMap';
import {
  LoadingButton,
  MAP_PAGE_BUTTON_PROP,
  MapContainer,
  MapSubContainer,
  MyLocationButton,
} from './MapPage.style';
import { useMapPage } from './useMapPage';

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

  const [isDragEnd, setIsDragEnd] = useState<boolean>(false);
  const [isLoadingRefresh, setIsLoadingRefresh] = useState<boolean>(false);
  const [currentMarkerId, setCurrentMarkerId] = useState<number>(0);
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
          onBoundsChanged={(map) => {
            setLevel(map.getLevel());
            setIsDragEnd(true);
          }}
          // onCenterChanged={(map) => {
          //   map.panTo(map.getCenter());
          // }}
        >
          <CurrentLocationMarker location={location} />
          <GameMarkers
            initializer={initializer}
            games={games}
            currentMarkerId={currentMarkerId}
            setCurrentMarkerId={setCurrentMarkerId}
          />

          {isDragEnd && (
            <LoadingButton
              {...MAP_PAGE_BUTTON_PROP}
              onClick={async () => {
                setIsLoadingRefresh(true);
                await fetchGames();
                setIsDragEnd(false);
                setIsLoadingRefresh(false);
              }}
              isLoadingRefresh={isLoadingRefresh}
            >
              <Refresh />
              <span>현재 지도에서 검색</span>
            </LoadingButton>
          )}
          <MyLocationButton
            onClick={() => {
              setPosition({ ...location });
            }}
            position={position}
            location={location}
          >
            <MyLocation />
          </MyLocationButton>
        </Map>
      ) : (
        <div style={{ width: '100%', height: '50%', fontSize: '300px' }}>
          loading...
        </div>
      )}
      <Modal
        isOpen={currentMarkerId !== 0}
        close={() => setCurrentMarkerId(0)}
        header={false}
      >
        <Modal.Content>
          <GamesDetailPage
            match={games?.find((game) => game.id == currentMarkerId)}
          />
        </Modal.Content>
      </Modal>
      <MapSubContainer>
        {
          <GamesNearInMap
            games={games}
            setCurrentMarkerId={setCurrentMarkerId}
            setPosition={setPosition}
          />
        }
      </MapSubContainer>
    </MapContainer>
  );
};
