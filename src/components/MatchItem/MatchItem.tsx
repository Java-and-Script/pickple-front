import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@consts/pathName';
import { WEEKDAY } from '@consts/weekday';

import { isGameEnded } from '@utils/domain';

import { Avatar } from '../Avatar';
import { AvatarGroup } from '../AvatarGroup';
import {
  MatchAddress,
  MatchDescription,
  MatchDuration,
  MatchItemInnerWrapper,
  MatchItemWrapper,
  MatchPlayerInfo,
  MatchRecruitmentStatus,
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

  return (
    <MatchItemWrapper>
      <MatchItemInnerWrapper
        onClick={() => navigate(PATH_NAME.GET_GAMES_PATH(matchId))}
      >
        <MatchStatus>
          {isGameEnded(startTime, timeMinutes) ? (
            <Text size={20} weight={700} nowrap>
              종료
            </Text>
          ) : (
            <>
              <Text size={20} weight={700} nowrap>
                {`${startTime.toTimeString().slice(0, 5)}`}
              </Text>
              <MatchDuration>{`${timeMinutes / 60}h`}</MatchDuration>
            </>
          )}
        </MatchStatus>
        <MatchDescription>
          <Text size={20} nowrap>
            {`${startTime.toLocaleDateString()} ${
              WEEKDAY[startTime.getDay()]
            }요일`}
          </Text>
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
