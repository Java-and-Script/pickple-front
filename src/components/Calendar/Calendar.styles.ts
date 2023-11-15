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
    color: black;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background: none;
  }
  .react-calendar__navigation button[disabled] {
    background: none;
    color: ${({ theme }) => theme.PALETTE.GRAY_300};
  }
  .react-calendar__tile {
    color: black;
  }
  .react-calendar__tile:enabled:hover {
    background-color: ${({ theme }) => theme.PALETTE.RED_300};
    background: none;
  }
  .react-calendar__tile:enabled:focus {
    background: none;
  }
  .react-calendar__tile:disabled {
    background: none;
    color: ${({ theme }) => theme.PALETTE.GRAY_300};
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
    background: ${({ theme }) => theme.PALETTE.RED_500};
    color: white;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${({ theme }) => theme.PALETTE.RED_500};
  }
`;
