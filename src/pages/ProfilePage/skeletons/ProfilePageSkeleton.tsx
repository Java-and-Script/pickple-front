import { Header } from '@components/Header';

import { ProfileContainer } from '../ProfilePage.style';
import { ProfileSkeleton } from './ProfileSkeleton';

export const ProfilePageSkeleton = () => (
  <ProfileContainer>
    <Header isLogo={false} isRightContainer={true} />
    <ProfileSkeleton />
  </ProfileContainer>
);
