import Calendar from 'react-calendar';

import styled from '@emotion/styled';

export const StyledCalendar = styled(Calendar)`
  width: 100dvw;
  padding: 20px;
  border: none;
  abbr {
    text-decoration: none;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  }
  .react-calendar__navigation button[disabled] {
    background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  }
  .react-calendar__tile:enabled:hover {
    background-color: ${({ theme }) => theme.PALETTE.RED_300};
  }
  .react-calendar__tile:enabled:focus {
    background-color: ${({ theme }) => theme.PALETTE.RED_500};
  }
  .react-calendar__tile--now {
    background: none;
    font-weight: bold;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    font-weight: bold;
  }
  .react-calendar__tile--active {
    color: white;
    font-weight: bold;
    background-color: ${({ theme }) => theme.PALETTE.RED_500};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    color: white;
  }
`;
