import { Avatar } from '@components/Avatar';

type NotificationItemImageProps = {
  src: string;
};

export const NotificationItemImage = ({ src }: NotificationItemImageProps) => {
  return <Avatar size={44} src={src} radius="5px" />;
};
