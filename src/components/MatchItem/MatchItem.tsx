import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@consts/pathName';
import { WEEKDAY } from '@consts/weekday';

import { Avatar } from '../Avatar';
import { AvatarGroup } from '../AvatarGroup';
import {
  MatchAddress,
  MatchDate,
  MatchDescription,
  MatchDuration,
  MatchItemInnerWrapper,
  MatchItemWrapper,
  MatchPlayerInfo,
  MatchRecruitmentStatus,
  MatchStartTime,
  MatchStatus,
} from './MatchItem.styles';
import { BottomButton } from './components/BottomButton';

type MatchItemProps = {
  matchId: string;
  startTime: Date;
  timeMinutes: number;
  mainAddress: string;
  memberCount: number;
  maxMemberCount: number;
  membersProfileImageUrls: string[];
} & PropsWithChildren;

/** TODO: Text 컴포넌트로 대체해야함 */
const MatchItem = ({
  children,
  matchId,
  startTime,
  timeMinutes,
  mainAddress,
  memberCount,
  maxMemberCount,
  membersProfileImageUrls,
}: MatchItemProps) => {
  const navigate = useNavigate();

  const endTimeNumber = startTime.getTime() + timeMinutes * 60000;
  const isMatchEnd = endTimeNumber <= new Date().getTime();

  return (
    <MatchItemWrapper>
      <MatchItemInnerWrapper
        onClick={() => navigate(PATH_NAME.GET_GAMES_PATH(matchId))}
      >
        <MatchStatus>
          {isMatchEnd ? (
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
        <MatchDescription>
          <MatchDate>
            {`${startTime.toLocaleDateString()} ${
              WEEKDAY[startTime.getDay()]
            }요일`}
          </MatchDate>
          <MatchAddress>{mainAddress}</MatchAddress>
          <MatchPlayerInfo>
            <AvatarGroup
              size={30}
              overlap={5}
              border={`1px solid ${theme.PALETTE.GRAY_400}`}
            >
              {membersProfileImageUrls.slice(0, 6).map((url, index) => (
                <Avatar key={index} src={url} />
              ))}
            </AvatarGroup>
            <MatchRecruitmentStatus>{`${memberCount}/${maxMemberCount}`}</MatchRecruitmentStatus>
          </MatchPlayerInfo>
        </MatchDescription>
      </MatchItemInnerWrapper>
      {children}
    </MatchItemWrapper>
  );
};

MatchItem.BottomButton = BottomButton;

export { MatchItem };
