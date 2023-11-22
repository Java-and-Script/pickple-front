export type PositionInfo = {
  name:
    | '센터'
    | '파워 포워드'
    | '스몰 포워드'
    | '포인트 가드'
    | '슈팅 가드'
    | '포지션 없음';
  acronym: 'C' | 'PF' | 'SF' | 'PG' | 'SG' | '없음';
  description: string;
};

export type Position = PositionInfo['acronym'];
