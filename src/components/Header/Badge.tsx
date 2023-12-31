import { useAlarmsUnreadQuery } from '@hooks/alarms/useAlarmsUnreadQuery';

import { BadgeIcon } from './Header.style';

export const Badge = () => {
  const { data } = useAlarmsUnreadQuery();
  if (!data.unread) {
    return null;
  }
  return <BadgeIcon />;
};
