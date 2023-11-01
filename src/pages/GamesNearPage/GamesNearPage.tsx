import { Header } from '@components/shared/Header';
import { MatchItem } from '@components/shared/MatchItem';
import { Text } from '@components/shared/Text';

import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { PageContent, PageLayout } from './GamesNearPage.styles';

export const GamesNearPage = () => {
  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  return (
    <PageLayout>
      <Header title={showHeaderTitle ? '내 근처 게스트 매치' : ''} />
      <PageContent>
        <div ref={entryRef}>
          <Text size={20} weight={700}>
            내 근처 게스트 매치
          </Text>
        </div>
        {Array(20)
          .fill(null)
          .map((_, i) => (
            <MatchItem
              key={i}
              matchId="1"
              startTime={new Date()}
              timeMinutes={60}
              mainAddress="서울특별시 송파구 송파나루길 206"
              memberCount={6}
              maxMemberCount={10}
              membersProfileImageUrls={[
                'https://picsum.photos/500',
                'https://picsum.photos/500',
                'https://picsum.photos/500',
                'https://picsum.photos/500',
                'https://picsum.photos/500',
                'https://picsum.photos/500',
              ]}
            />
          ))}
      </PageContent>
    </PageLayout>
  );
};
