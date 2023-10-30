import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH_NAME } from '@consts/pathName';
import { WEEKDAY } from '@consts/weekday';

import {
  AvatarGroupWrapper,
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

type ManageBtnProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/** TODO: 버튼 컴포넌트로 대체 */
const ManageBtn = ({ onClick, ...props }: ManageBtnProps) => {
  return (
    <button onClick={onClick} {...props}>
      매치 관리
    </button>
  );
};

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
  membersProfileImageUrls;

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
            <AvatarGroupWrapper />{' '}
            {/* TODO: 아바타그룹 컴포넌트로 대체해야함 */}
            <MatchRecruitmentStatus>{`${memberCount}/${maxMemberCount}`}</MatchRecruitmentStatus>
          </MatchPlayerInfo>
        </MatchDescription>
      </MatchItemInnerWrapper>
      {children}
    </MatchItemWrapper>
  );
};

MatchItem.ManageBtn = ManageBtn;

export { MatchItem };
