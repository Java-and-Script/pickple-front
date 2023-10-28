import styled from '@emotion/styled';

import { PALETTE } from '@styles/palette';
import { STYLES } from '@styles/styles';

export const MatchItemWrapper = styled.div`
  background-color: white;
  display: flex;
  padding: 12px;
  gap: 10px;
  border-radius: 8px;
`;

export const MatchStatus = styled.div`
  ${STYLES.FLEX_CENTER}
  flex-direction: column;
  background-color: ${PALETTE.GRAY_100};
  padding: 10px;
  width: 82px;
  height: 82px;
  border-radius: 8px;
`;

export const MatchStartTime = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 143%;
`;

export const MatchDuration = styled.span`
  color: ${PALETTE.GRAY_400};
  font-size: 14px;
  font-weight: 700;
  line-height: 143%;
`;

export const MatchDate = styled.span`
  font-size: 20px;
  line-height: 143%;
`;

export const MatchAddress = styled.span`
  font-size: 12px;
  line-height: 143%;
`;

export const MatchPlayerInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarGroupWrapper = styled.div`
  flex-grow: 1;
  height: 30px;
`;

export const MatchRecruitmentStatus = styled.span`
  font-size: 12px;
`;

export const MatchDescription = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
