import { Header } from '@components/Header';

import { ProfileContainer } from './ProfilePage.style';
import { SkeletonProfile } from './SkeletonProfile';

export const SkeletonProfilePage = () => (
  <ProfileContainer>
    <Header isLogo={false} isRightContainer={true} />
    <SkeletonProfile />
  </ProfileContainer>
);
