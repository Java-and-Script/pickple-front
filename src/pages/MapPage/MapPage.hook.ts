import { useEffect, useState } from 'react';

import { getGamesInMap } from '@api/map/getGamesInMap';

import { Game } from '@type/models';

export const useMapPage = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [games, setGames] = useState<Game[] | null>(null);
  const [initializer, setInitializer] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(3);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
      enableHighAccuracy: true,
    });
  }, []);

  const getDistance = (level: number): number => {
    return (0.1 * 2 ** (level - 1)) / 2;
  };

  const successHandler = async (response: GeolocationPosition) => {
    const { latitude, longitude } = response.coords;
    setLocation({ latitude, longitude });
    setPosition({ latitude, longitude });
    const serverGames = await getGamesInMap({
      latitude,
      longitude,
      distance: getDistance(level),
    });
    setGames(serverGames);
    setInitializer(true);
  };

  const errorHandler = (error: GeolocationPositionError) => {
    console.log(error);
  };

  const fetchGames = async () => {
    const currentServerGames = await getGamesInMap({
      latitude: position!.latitude,
      longitude: position!.longitude,
      distance: getDistance(level),
    });
    setGames(currentServerGames!);
  };

  return {
    location,
    position,
    setPosition,
    games,
    initializer,
    level,
    setLevel,
    fetchGames,
  };
};
