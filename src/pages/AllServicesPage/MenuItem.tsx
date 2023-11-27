import { ReactNode } from 'react';

import { Text } from '@components/shared/Text';

import { Item } from './AllServicesPage.style';

type MenuItemProps = {
  icon: ReactNode;
  pageName: string;
  color?: string;
  onClickMenuItem?: () => void;
};
export const MenuItem = ({
  icon,
  pageName,
  color,
  onClickMenuItem,
}: MenuItemProps) => {
  return (
    <Item onClick={onClickMenuItem} color={color}>
      {icon}
      <Text size="1rem" weight={500} color={color ?? 'inherit'}>
        {pageName}
      </Text>
    </Item>
  );
};
