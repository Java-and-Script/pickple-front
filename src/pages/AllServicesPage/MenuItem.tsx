import { ReactNode } from 'react';

import { Text } from '@components/shared/Text';

import { Item } from './AllServicesPage.style';

type MenuItemProps = {
  icon: ReactNode;
  pageName: string;
  onClickMenuItem?: () => void;
};
export const MenuItem = ({
  icon,
  pageName,
  onClickMenuItem,
}: MenuItemProps) => {
  return (
    <Item onClick={onClickMenuItem}>
      {icon}
      <Text size="1rem" weight={500}>
        {pageName}
      </Text>
    </Item>
  );
};
