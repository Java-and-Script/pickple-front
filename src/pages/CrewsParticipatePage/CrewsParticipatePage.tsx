import { useNavigate } from 'react-router-dom';

import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

import { useJoinedCrewsQuery } from '@hooks/queries/useJoinedCrewsQuery';
import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@consts/pathName';

import { PageContent, PageWrapper } from './CrewsParticipatePage.styles';

export const CrewsParticipatePage = () => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  if (!loginInfo?.id) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }

  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const { data: crews } = useJoinedCrewsQuery({
    memberId: loginInfo.id,
    status: '확정',
  });

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
