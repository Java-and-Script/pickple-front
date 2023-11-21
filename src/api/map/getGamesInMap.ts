import { axiosInstance } from '@api/axiosInstance';

import { GetGamesResponse } from '@type/api/games';

export const getGamesInMap = async ({
  latitude,
  longitude,
  distance,
}: {
  latitude: number;
  longitude: number;
  distance: number;
}) => {
  try {
    const { data } = await axiosInstance.get<GetGamesResponse | null>(
      '/games/by-location',
      {
        params: { latitude, longitude, distance },
      }
    );

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

// http://192.168.0.123:8080/games/locations?latitude={latitude}&longitude={longitude}&distance={distance}
