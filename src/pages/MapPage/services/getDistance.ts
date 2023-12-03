export const getDistance = (level: number): number => {
  return (100 * 2 ** (level - 1)) / 2;
};
