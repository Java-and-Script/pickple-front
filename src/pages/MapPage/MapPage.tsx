import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { GamesNearPage } from '@pages/GamesNearPage';

import { Button } from '@components/shared/Button';

import { MapContainer, MapSubContainer } from './MapPage.style';

export const MapPage = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
      enableHighAccuracy: true,
    });
  }, []);

  const successHandler = (response) => {
    console.log(response);
    const { latitude, longitude } = response.coords;
    setLocation({ latitude, longitude });
  };

  const errorHandler = (error: Error) => {
    console.log(error);
  };
  return (
    <MapContainer>
      {location ? (
        <Map
          center={{ lat: location.latitude, lng: location.longitude }}
          style={{ width: '100%', height: '50%' }}
          level={3}
          onDragEnd={(map) =>
            setPosition({
              latitude: map.getCenter().getLat(),
              longitude: map.getCenter().getLng(),
            })
          }
        >
          <MapMarker
            position={{
              lat: location.latitude,
              lng: location.longitude,
            }}
          />
          <Button
            onClick={() => {
              console.log(
                `latitude : ${position.latitude}, longitude : ${position.longitude}`
              );
              setLocation({
                latitude: position.latitude,
                longitude: position.longitude,
              });
            }}
          >
            새로고침
          </Button>
        </Map>
      ) : (
        <div style={{ width: '100%', height: '50%' }}>loading...</div>
      )}
      {position && <p>{`${position.latitude},${position.longitude}`}</p>}
      <MapSubContainer>
        <GamesNearPage />
      </MapSubContainer>
    </MapContainer>
  );
};
