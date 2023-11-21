import { axiosInstance } from '@api/axiosInstance';

import { Game } from '@type/models';

type GetGamesByAddress = {
  games: Game[] | null;
  location: { latitude: number; longitude: number };
  polygon: { lat: number; lng: number }[];
};

export const getGamesByAddress = async ({
  addressDepth1,
  addressDepth2,
}: {
  addressDepth1: string;
  addressDepth2: string;
}) => {
  try {
    const { data } = await axiosInstance.get<GetGamesByAddress | null>(
      '/games/by-address',
      {
        params: { addressDepth1, addressDepth2 },
      }
    );

    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
