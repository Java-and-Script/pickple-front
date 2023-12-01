export type DefaultAlarm = {
  createdAt: string;
  isRead: boolean;
};

export type CrewAlarm = DefaultAlarm & {
  crewAlarmId: number;
  crewId: number;
  crewName: string;
  crewProfileImageUrl: string;
  crewAlarmMessage:
    | '크루 가입 수락을 기다리고 있어요'
    | '크루 가입이 수락되었어요'
    | '크루 가입이 거절되었어요';
};

export type GameAlarm = DefaultAlarm & {
  gameAlarmId: number;
  gameId: number;
  mainAddress: string;
  playDate: string;
  playStartTime: string;
  playTimeMinutes: number;
  gameAlarmMessage:
    | '게스트 참여가 수락되었어요'
    | '게스트 모집 참여 수락을 기다리고 있어요'
    | '게스트 참여가 거절되었어요';
};

export type Alarm = GameAlarm | CrewAlarm;
