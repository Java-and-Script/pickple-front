import { isGameEnded } from '@utils/domain';

import {
  MatchDuration,
  MatchStartTime,
  MatchStatus,
} from './NotificationItemMatchStatus.styles';

type NotificationItemMatchStatusProps = {
  startTime: Date;
  timeMinutes: number;
};

export const NotificationItemMatchStatus = ({
  startTime,
  timeMinutes,
}: NotificationItemMatchStatusProps) => {
  return (
    <MatchStatus direction="column" justify="center" align="center">
      {isGameEnded(startTime, timeMinutes) ? (
        <MatchStartTime>종료</MatchStartTime>
      ) : (
        <>
          <MatchStartTime>
            {`${startTime.toTimeString().slice(0, 5)}`}
          </MatchStartTime>
          <MatchDuration>{`${timeMinutes / 60}h`}</MatchDuration>
        </>
      )}
    </MatchStatus>
  );
};
