import { EAST, NORTH, SOUTH, WEST } from '../constants';

export const validateCoordinate = (coordinate: {
  latitude: number;
  longitude: number;
}): boolean => {
  const { latitude, longitude } = coordinate;
  return (
    latitude >= SOUTH &&
    latitude <= NORTH &&
    longitude >= WEST &&
    longitude <= EAST
  );
};
