import { formatDateToString } from '@utils/formatDateToString';

type ValidateStartTimeProps = {
  playDate: string;
  playStartTimeHours: string;
  playStartTimeMinutes: string;
};

export const validateStartTime = ({
  playDate,
  playStartTimeHours,
  playStartTimeMinutes,
}: ValidateStartTimeProps) => {
  const [playYear, playMonth, playDay] = playDate.split('-').map(Number);
  const [currentYear, currentMonth, currentDay] = formatDateToString(new Date())
    .split('-')
    .map(Number);
  const currentHours = new Date().getHours();
  const currentMinutes = new Date().getMinutes();

  if (
    playYear > currentYear ||
    (playYear >= currentYear && playMonth > currentMonth) ||
    (playYear >= currentYear &&
      playMonth >= currentMonth &&
      playDay > currentDay)
  ) {
    return true;
  }

  if (
    Number(playStartTimeHours) > currentHours ||
    (Number(playStartTimeHours) >= currentHours &&
      Number(playStartTimeMinutes) > currentMinutes)
  ) {
    return true;
  }

  return false;
};
