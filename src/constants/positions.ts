import { PositionInfo } from '@type/models/Position';

export const POSITIONS_BUTTON: Record<
  PositionInfo['acronym'],
  PositionInfo['acronym']
> = {
  C: 'C',
  PF: 'PF',
  SF: 'SF',
  PG: 'PG',
  SG: 'SG',
  없음: '없음',
};
