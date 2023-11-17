export type DefaultAlarm = {
  id: number;
  alarmType: string;
  createdAt: string;
  status: 'read' | 'unread';
};

export type CrewAlarmType = 'crewLeader-1' | 'crew-1' | 'crew-2';
export type CrewAlarm = DefaultAlarm & {
  alarmType: CrewAlarmType;
  crewName: string;
  crewImageUrl: string;
};

export type GameAlarmType = 'host-1' | 'guest-1' | 'guest-2';
export type GameAlarm = DefaultAlarm & {
  alarmType: GameAlarmType;
  mainAddress: string;
  playDate: string;
  playStartTime: string;
  playTimeMinutes: number;
};

export type Alarm = GameAlarm | CrewAlarm;
