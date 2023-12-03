import { useNavigate } from 'react-router-dom';

import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { PATH_NAME } from '@constants/pathName';

import { PageContent, PageWrapper } from './CrewsParticipatePage.styles';
import { useCrewsParticipatePage } from './hooks/useCrewsParticipatePage';

export const CrewsParticipatePage = () => {
  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();
  const { crews } = useCrewsParticipatePage();
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Header isLogo={false} title={showHeaderTitle ? '내가 속한 크루' : ''} />
      <PageContent direction="column" gap={16}>
        <div ref={entryRef}>
          <Text size={20} weight={700}>
            내가 속한 크루
          </Text>
        </div>
        {crews?.map((crew) => {
          const membersProfileImageUrls = crew.members.map(
            (member) => member.profileImageUrl
          );
          return (
            <CrewItem
              key={crew.id}
              name={crew.name}
              address={crew.addressDepth2}
              imgSrc={crew.profileImageUrl}
              membersProfileImageUrls={membersProfileImageUrls}
              memberCount={crew.memberCount}
              maxMemberCount={crew.maxMemberCount}
              onClick={() =>
                navigate(PATH_NAME.GET_CREWS_PATH(String(crew.id)))
              }
            />
          );
        })}
      </PageContent>
    </PageWrapper>
  );
};
