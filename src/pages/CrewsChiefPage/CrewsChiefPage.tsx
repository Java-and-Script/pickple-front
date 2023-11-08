import { useNavigate } from 'react-router-dom';

import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

import { useCreatedCrewsQuery } from '@hooks/queries/useCreatedCrewsQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { Crew, Member } from '@type/models';

import { PATH_NAME } from '@consts/pathName';

import { CrewsChiefContainer, Main } from './CrewsChiefPage.style';

export const CrewsChiefPage = () => {
  const navigate = useNavigate();

  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const moveToManage = (crewId: Crew['id']) => {
    navigate(PATH_NAME.GET_CREWS_MANAGE_PATH(String(crewId)));
  };

  const loginInfo = localStorage.getItem('LOGIN_INFO');

  if (!loginInfo) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }

  const { id: myId } = JSON.parse(loginInfo);

  const { data: crewsData } = useCreatedCrewsQuery({ memberId: myId });

  return (
    <CrewsChiefContainer>
      <Header title={showHeaderTitle ? '내가 만든 크루' : ''} />
      <Main gap={10} direction="column">
        <div ref={entryRef}>
          <Text size={20} weight={700}>
            내가 만든 크루
          </Text>
        </div>
        {crewsData.map((crew) => {
          const membersProfile: Member['profileImageUrl'][] = [];

          const membersProfileImageUrls = crew.members.reduce(
            (arr, member) => arr.concat(member.profileImageUrl),
            membersProfile
          );

          return (
            <CrewItem
              key={crew.id}
              name={crew.name}
              address={crew.addressDepth1 + crew.addressDepth2}
              imgSrc={crew.profileImageUrl}
              membersProfileImageUrls={membersProfileImageUrls}
              memberCount={crew.memberCount}
              maxMemberCount={crew.maxMemberCount}
              onClick={() => moveToManage(crew.id)}
            />
          );
        })}
      </Main>
    </CrewsChiefContainer>
  );
};
