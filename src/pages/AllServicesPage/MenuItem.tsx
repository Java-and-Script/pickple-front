import { ReactNode } from 'react';

import { Text } from '@components/shared/Text';

import { Item } from './AllServicesPage.style';

type MenuItemProps = {
  icon: ReactNode;
  pageName: string;
  handleClickMenuItem?: () => void;
};
export const MenuItem = ({
  icon,
  pageName,
  handleClickMenuItem,
}: MenuItemProps) => {
  return (
    <Item onClick={handleClickMenuItem}>
      {icon}
      <Text size="1rem" weight={500}>
        {pageName}
      </Text>
    </Item>
  );
};
