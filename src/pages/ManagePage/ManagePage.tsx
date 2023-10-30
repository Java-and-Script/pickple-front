import { AllowCard, AllowCardGroup } from '@components/shared/AllowCard';
import { Header } from '@components/shared/Header';

import { RemoveLayout } from './ManagePage.style';

type ManagePageProps = { manageType: 'games' | 'crews' };

export const ManagePage = ({ manageType }: ManagePageProps) => {
  console.log(manageType);

  return (
    <RemoveLayout>
      <Header isLogo={false} title="로그인" isRightContainer={true} />
      <div>
        <AllowCardGroup>
          <AllowCard
            player={{
              id: 'hi',
              nickname: '자바',
              profileImageUrl:
                'https://i.ytimg.com/vi/scxNCuffq-0/maxresdefault.jpg',
            }}
          />
          <AllowCard
            player={{
              id: 'hi',
              nickname: '자바와 스크립트',
              profileImageUrl:
                'https://i.ytimg.com/vi/scxNCuffq-0/maxresdefault.jpg',
            }}
          />
          <AllowCard
            player={{
              id: 'hi',
              nickname: '자바와 스크립트자바와 스크립트자바와 스크립트',
              profileImageUrl:
                'https://i.ytimg.com/vi/scxNCuffq-0/maxresdefault.jpg',
            }}
          />
        </AllowCardGroup>
      </div>
    </RemoveLayout>
  );
};
