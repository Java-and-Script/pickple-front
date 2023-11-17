import type { Alarm } from '@type/models';

export type DeleteAlarmsRequest = {
  cursorId: number;
  size: number;
};

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
  alarms: Alarm[];
  hasNext: boolean;
};
