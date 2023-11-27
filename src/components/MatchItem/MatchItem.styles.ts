import styled from '@emotion/styled';

export const MatchItemWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 10px;
  border-radius: 8px;
`;

export const MatchItemInnerWrapper = styled.div`
  background-color: white;
  display: flex;
  gap: 10px;
  border-radius: 8px;
`;

export const MatchStatus = styled.div`
  ${({ theme }) => theme.STYLES.FLEX_CENTER}
  flex-direction: column;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  padding: 10px;
  min-width: 82px;
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
  color: ${({ theme }) => theme.PALETTE.GRAY_400};
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
  justify-content: space-between;
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
