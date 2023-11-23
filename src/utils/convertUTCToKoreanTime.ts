export const convertUTCToKoreanTime = (utcTime: string | Date) => {
  const utcDate = new Date(utcTime);
  const offset = utcDate.getTimezoneOffset();
  const koreanDate = new Date(utcDate.getTime() - offset * 60 * 1000);

  const formattedTime = `${koreanDate.getFullYear()}-${String(
    koreanDate.getMonth() + 1
  ).padStart(2, '0')}-${String(koreanDate.getDate()).padStart(2, '0')}T${String(
    koreanDate.getHours()
  ).padStart(2, '0')}:${String(koreanDate.getMinutes()).padStart(
    2,
    '0'
  )}:${String(koreanDate.getSeconds()).padStart(2, '0')}`;

  return formattedTime;
};
