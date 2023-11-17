export type DefaultAlarm = {
  id: number;
  alarmType: string;
  createdAt: string;
  status: 'read' | 'unread';
};

export type CrewAlarm = DefaultAlarm & {
  alarmType: 'crewLeader-1' | 'crew-1' | 'crew-2';
  crewName: string;
  crewImageUrl: string;
};

export type GameAlarm = DefaultAlarm & {
  alarmType: 'host-1' | 'guest-1' | 'guest2';
  mainAddress: string;
  playDate: string;
  playStartTime: string;
  playTimeMinutes: number;
};

export type Alarm = GameAlarm | CrewAlarm;
