import styled from '@emotion/styled';

import { Avatar } from '@components/Avatar';

type NotificationItemImageProps = {
  src: string;
};

export const NotificationItemImage = ({ src }: NotificationItemImageProps) => {
  return <CrewAvatar size={44} src={src} radius="5px" />;
};

const CrewAvatar = styled(Avatar)`
  min-width: 44px;
`;
