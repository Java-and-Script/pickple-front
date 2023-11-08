export const getGameStartDate = (
  gamePlayDate: string,
  gamePlayStartTime: string
) => {
  const result = new Date(`${gamePlayDate}:${gamePlayStartTime}`);
  if (result.toString() === 'Invalid Date') {
    throw new Error('Invalid Date');
  }

  return result;
};

export const isGameStarted = (startDate: Date) => {
  return startDate.getTime() <= new Date().getTime();
};

export const isGameEnded = (startDate: Date, playTimeMinutes: number) => {
  const endTimeNumber = startDate.getTime() + playTimeMinutes * 60000;
  return endTimeNumber <= new Date().getTime();
};
