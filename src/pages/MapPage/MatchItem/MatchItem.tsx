import { PropsWithChildren } from 'react';

import { Avatar } from '@components/Avatar';
import { AvatarGroup } from '@components/AvatarGroup';

import { theme } from '@styles/theme';

import { WEEKDAY } from '@consts/weekday';

import { isGameEnded } from '@utils/domain';

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
  setCurrentMarkerId: (index: number) => void;
  latitude: number;
  longitude: number;
  setPosition: ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => void;
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
  setCurrentMarkerId,
  latitude,
  longitude,
  setPosition,
}: MatchItemProps) => {
  return (
    <MatchItemWrapper>
      <MatchItemInnerWrapper
        onClick={() => {
          setCurrentMarkerId(Number(matchId));
          setPosition({ latitude, longitude });
        }}
      >
        <MatchStatus>
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
