import { WEEKDAY } from '@consts/weekday';

import {
  AvatarGroupWrapper,
  MatchAddress,
  MatchDate,
  MatchDescription,
  MatchDuration,
  MatchItemWrapper,
  MatchPlayerInfo,
  MatchRecruitmentStatus,
  MatchStartTime,
  MatchStatus,
} from './MatchItem.styles';

type MatchItemProps = {
  startTime: Date;
  timeMinutes: number;
  mainAddress: string;
  memberCount: number;
  maxMemberCount: number;
  membersProfileImageUrls: string[];
};

/** TODO: Text 컴포넌트로 대체해야함 */
export const MatchItem = ({
  startTime,
  timeMinutes,
  mainAddress,
  memberCount,
  maxMemberCount,
  membersProfileImageUrls,
}: MatchItemProps) => {
  membersProfileImageUrls;
  return (
    <MatchItemWrapper>
      <MatchStatus>
        <MatchStartTime>
          {`${startTime.toTimeString().slice(0, 5)}`}
        </MatchStartTime>
        <MatchDuration>{`${timeMinutes / 60}h`}</MatchDuration>
      </MatchStatus>
      <MatchDescription>
        <MatchDate>
          {`${startTime.toLocaleDateString()} ${
            WEEKDAY[startTime.getDay()]
          }요일`}
        </MatchDate>
        <MatchAddress>{mainAddress}</MatchAddress>
        <MatchPlayerInfo>
          <AvatarGroupWrapper /> {/* TODO: 아바타그룹 컴포넌트로 대체해야함 */}
          <MatchRecruitmentStatus>{`${memberCount}/${maxMemberCount}`}</MatchRecruitmentStatus>
        </MatchPlayerInfo>
      </MatchDescription>
    </MatchItemWrapper>
  );
};
