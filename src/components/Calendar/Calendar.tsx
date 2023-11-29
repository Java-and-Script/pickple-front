import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';

import { formatDateToString } from '@utils/formatDateToString';

import { StyledCalendar } from './Calendar.styles';

export const CalendarComponent = ({
  setDate,
}: {
  setDate: (value: string) => void;
}) => {
  const [value, onChange] = useState<Date>(new Date());
  const formattedDate = formatDateToString(value);

  useEffect(() => {
    setDate(formattedDate);
  }, [formattedDate, setDate]);

  return (
    <div>
      <StyledCalendar
        minDate={new Date()}
        onChange={(newDate) => {
          onChange(newDate as Date);
        }}
        value={value}
      />
    </div>
  );
};
