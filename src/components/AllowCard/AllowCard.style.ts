import styled from '@emotion/styled';

export const AllowCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 0.31rem;
`;

export const Profile = styled(FlexBox)`
  width: calc(100% - 9rem);
  min-width: 50px;
  p {
    width: calc(100% - 50px);
  }
`;

export const ButtonContainer = styled(FlexBox)`
  width: 8rem;
`;
