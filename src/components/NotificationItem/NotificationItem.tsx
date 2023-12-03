import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { createdAtToString } from '@utils/createdAtToString';

import {
  AgoText,
  Badge,
  NotificationItemWrapper,
} from './NotificationItem.styles';
import { NotificationItemImage } from './components/NotificationItemImage';
import { NotificationItemMatchStatus } from './components/NotificationItemMatchStatus';

type NotificationItemProps = {
  box: React.ReactNode;
  title: string;
  content: string;
  read?: boolean;
  createdAt: Date;
  onClick: VoidFunction;
};

const NotificationItem = ({
  box,
  title,
  content,
  read = false,
  createdAt,
  onClick,
}: NotificationItemProps) => {
  return (
    <NotificationItemWrapper gap={13} onClick={onClick}>
      {box}
      <Flex direction="column" gap={5}>
        <Flex gap={5}>
          <Text size={12} weight={700} nowrap>
            {title}
          </Text>
          <AgoText size={8} weight={300} nowrap>
            {createdAtToString(new Date(createdAt))}
            {!read && <Badge />}
          </AgoText>
        </Flex>
        <Text size={14} weight={300}>
          {content}
        </Text>
      </Flex>
    </NotificationItemWrapper>
  );
};

NotificationItem.Image = NotificationItemImage;
NotificationItem.MatchStatus = NotificationItemMatchStatus;

export { NotificationItem };
