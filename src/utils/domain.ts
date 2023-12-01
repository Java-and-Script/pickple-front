export const getGameStartDate = (
  gamePlayDate: string,
  gamePlayStartTime: string
) => {
  const result = new Date(
    `${gamePlayDate} ${gamePlayStartTime}`.replace(/-/g, '/')
  );
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

export const isReviewPeriod = (
  gamePlayDate: string,
  gamePlayStartTime: string,
  playTimeMinutes: number
) => {
  const gameStartDate = getGameStartDate(gamePlayDate, gamePlayStartTime);
  const gameEndTimeNumber = gameStartDate.getTime() + playTimeMinutes * 60000;
  const oneWeekMs = 1000 * 60 * 60 * 24 * 7;
  const now = new Date();

  return now.getTime() - gameEndTimeNumber < oneWeekMs;
};
