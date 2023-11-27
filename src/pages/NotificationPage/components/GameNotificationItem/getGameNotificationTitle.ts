export const getGameNotificationTitle = (
  playDate: string,
  mainAddress: string
) => {
  return `${playDate.split('-').slice(1)} ${mainAddress.split(' ')[0]}`;
};
