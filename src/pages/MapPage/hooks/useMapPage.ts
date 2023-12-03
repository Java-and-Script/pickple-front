import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getGamesByAddress } from '@api/map/getGamesByAddress';
import { getGamesInMap } from '@api/map/getGamesInMap';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { Game } from '@type/models';

import { PATH_NAME } from '@constants/pathName';

import { DEFAULT_COORDINATE } from '../constants';
import { getDistance } from '../services/getDistance';
import { timer } from '../services/timer';
import { validateCoordinate } from '../services/validateCoordinate';

export const useMapPage = () => {
  const navigate = useNavigate();
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
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
  const [polygon, setPolygon] = useState<{ lat: number; lng: number }[]>([]);

  useEffect(() => {
    const activateGeoLocationApi = async () => {
      await timer(1500);
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
        enableHighAccuracy: true,
      });
    };
    activateGeoLocationApi();
  }, []);

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
  };

  const errorHandler = async (error: GeolocationPositionError) => {
    console.log(error);
    if (loginInfo === null) {
      setLocation(DEFAULT_COORDINATE);
      setPosition(DEFAULT_COORDINATE);
      const serverGames = await getGamesInMap({
        ...DEFAULT_COORDINATE,
        distance: getDistance(level),
      });
      setGames(serverGames);
      return;
    }

    const { addressDepth1, addressDepth2 } = loginInfo;
    if (!addressDepth1 || !addressDepth2) {
      navigate(PATH_NAME.LOGIN);
      return;
    }
    const serverGames = await getGamesByAddress({
      addressDepth1,
      addressDepth2,
    });
    if (!serverGames) {
      setLocation(() => DEFAULT_COORDINATE);
      setPosition(() => DEFAULT_COORDINATE);
      return;
    }
    const { games, location, polygon } = serverGames;
    setLocation(() => location ?? DEFAULT_COORDINATE);
    setPosition(() => location ?? DEFAULT_COORDINATE);
    setLevel(() => (polygon ? 8 : 3));
    setGames(games);
    setPolygon(() => polygon ?? []);
    setInitializer(true);
    return;
  };

  const fetchGames = async () => {
    const currentServerGames = await getGamesInMap({
      latitude: position!.latitude,
      longitude: position!.longitude,
      distance: getDistance(level),
    });
    await timer(800);
    setGames(currentServerGames!);
  };

  return {
    location,
    position,
    setPosition,
    games,
    initializer,
    setInitializer,
    level,
    setLevel,
    isDragEnd,
    setIsDragEnd,
    isLoadingRefresh,
    setIsLoadingRefresh,
    currentMarkerId,
    setCurrentMarkerId,
    polygon,
    fetchGames,
  };
};
