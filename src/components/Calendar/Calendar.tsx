import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { formatDate } from '@utils/formatDate';

export const CalendarComponent = ({
  setDate,
}: {
  setDate: (value: string) => void;
}) => {
  const [value, onChange] = useState<Date>(new Date());
  const formattedDate = formatDate(value);

  useEffect(() => {
    setDate(formattedDate);
  }, [formattedDate, setDate]);

  return (
    <div>
      <Calendar
        onChange={(newDate) => {
          onChange(newDate as Date);
        }}
        value={value}
      />
    </div>
  );
};
