import { WEEKDAY } from '@constants/weekday';

import { convertUTCToKoreanTime } from '@utils/convertUTCToKoreanTime';

export const formatDateString = (created: Date) => {
  const date = new Date(created);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const daysOfWeek = WEEKDAY[date.getDay()];

  return `${year}년 ${month}월 ${day}일 ${daysOfWeek}요일`;
};

export const getKoreanDay = (date: Date) =>
  String(convertUTCToKoreanTime(date)).slice(0, 10);
