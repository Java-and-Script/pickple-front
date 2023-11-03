export const getGameStartDate = (
  gamePlayDate: string,
  gamePlayStartTime: string
) => {
  const [year, month, day] = gamePlayDate.split('-');
  const [hour, min] = gamePlayStartTime.split(':');
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(min)
  );
};
