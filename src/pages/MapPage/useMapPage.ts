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
  const [isDragEnd, setIsDragEnd] = useState<boolean>(false);
  const [isLoadingRefresh, setIsLoadingRefresh] = useState<boolean>(false);
  const [currentMarkerId, setCurrentMarkerId] = useState<number>(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
      enableHighAccuracy: true,
    });
  }, []);

  const getDistance = (level: number): number => {
    return (100 * 2 ** (level - 1)) / 2;
  };

  const successHandler = async (response: GeolocationPosition) => {
    const { latitude, longitude } = validateCoordinate(response.coords)
      ? response.coords
      : DEFAULT_COORDINATE;
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

  const errorHandler = async (error: GeolocationPositionError) => {
    console.log(error);
    setLocation(DEFAULT_COORDINATE);
    setPosition(DEFAULT_COORDINATE);
    const serverGames = await getGamesInMap({
      ...DEFAULT_COORDINATE,
      distance: getDistance(level),
    });
    setGames(serverGames);
    setInitializer(true);
  };

  const timer = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  };

  const fetchGames = async () => {
    const currentServerGames = await getGamesInMap({
      latitude: position!.latitude,
      longitude: position!.longitude,
      distance: getDistance(level),
    });
    await timer();
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
    isDragEnd,
    setIsDragEnd,
    isLoadingRefresh,
    setIsLoadingRefresh,
    currentMarkerId,
    setCurrentMarkerId,
    fetchGames,
  };
};

const validateCoordinate = (coordinate: {
  latitude: number;
  longitude: number;
}): boolean => {
  const { latitude, longitude } = coordinate;
  const WEST = 123.44885503809954;
  const EAST = 132.72943114930797;
  const NORTH = 38.95052791927258;
  const SOUTH = 31.100696230892495;
  return (
    latitude >= SOUTH &&
    latitude <= NORTH &&
    longitude >= WEST &&
    longitude <= EAST
  );
};
const DEFAULT_COORDINATE = {
  latitude: 37.49927504333466,
  longitude: 127.02679632647265,
};
