import type { Alarm } from '@type/models';

export type PatchAlarmsRequest = {
  isRead: 'read';
};

export type GetAlarmsUnreadResponse = {
  unread: number;
};

export type GetAlarmsRequest = {
  cursorId?: number;
  size: number;
};

export type GetAlarmsResponse = {
  alarmResponse: Alarm[];
  hasNext: boolean;
  cursorId: number | null;
};
