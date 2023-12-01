import { useNavigate } from 'react-router-dom';

import { CrewItem } from '@components/CrewItem';
import { MatchItem } from '@components/MatchItem';

import { useCrewsRankingQuery } from '@hooks/ranking/useCrewsRankingQuery';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@constants/pathName';

import { getGameStartDate } from '@utils/domain';

import { useMainPageNearCrewListQuery } from './useMainPageNearCrewListQuery';
import { useMainPageNearGamesQuery } from './useMainPageNearGamesQuery';

export const useMainPage = () => {
  const navigate = useNavigate();
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  const addressDepth1 = loginInfo?.addressDepth1 ?? '서울시';
  const addressDepth2 = loginInfo?.addressDepth2 ?? '강남구';

  const { data: gameData } = useMainPageNearGamesQuery({
    category: 'location',
    value: `${addressDepth1}+${addressDepth2}`,
  });

  const { data: crewData } = useMainPageNearCrewListQuery({
    addressDepth1,
    addressDepth2,
  });

  const { data: crewsRanking } = useCrewsRankingQuery();
  const slicedCrewsRanking = crewsRanking.slice(0, 3);

  const filteredGameData = gameData.map(
    ({
      id,
      playDate,
      playStartTime,
      playTimeMinutes,
      mainAddress,
      memberCount,
      maxMemberCount,
      members,
    }) => (
      <MatchItem
        key={id.toString()}
        matchId={id.toString()}
        startTime={getGameStartDate(playDate, playStartTime)}
        timeMinutes={playTimeMinutes}
        mainAddress={mainAddress}
        memberCount={memberCount}
        maxMemberCount={maxMemberCount}
        membersProfileImageUrls={members.map(
          ({ profileImageUrl }) => profileImageUrl
        )}
      />
    )
  );

  const filteredCrewData = crewData.map(
    ({
      id,
      name,
      addressDepth1,
      addressDepth2,
      profileImageUrl,
      members,
      memberCount,
      maxMemberCount,
    }) => (
      <CrewItem
        key={id.toString()}
        name={name}
        address={`${addressDepth1} ${addressDepth2}`}
        imgSrc={profileImageUrl}
        membersProfileImageUrls={members.map(
          ({ profileImageUrl }) => profileImageUrl
        )}
        memberCount={memberCount}
        maxMemberCount={maxMemberCount}
        onClick={() => navigate(PATH_NAME.GET_CREWS_PATH(id.toString()))}
      />
    )
  );
  return {
    navigate,
    slicedCrewsRanking,
    filteredGameData,
    filteredCrewData,
  };
};
