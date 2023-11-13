import styled from '@emotion/styled';

import { SelectBox } from '@components/SelectBox';
import { Button } from '@components/shared/Button';
import { ToggleButton } from '@components/shared/ToggleButton';

export const PageLayout = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

export const StyledTitle = styled.div`
  margin-bottom: 16px;
`;

export const StyledCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledEmptyContainer = styled.div`
  height: 16px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const ScrollBox = styled.div`
  height: 300px;
  width: 300px;
  overflow: scroll;
  border-radius: 30px;
`;

export const StyledSelectedLocationButton = styled(Button)<{
  isSelected?: boolean;
}>`
  max-width: 84px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.PALETTE.RED_400 : theme.PALETTE.GRAY_400};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.PALETTE.RED_400 : theme.PALETTE.GRAY_400};
`;

export const StyledSelectBox = styled(SelectBox)`
  margin-top: 8px;
  width: 300px;
  height: 245px;
  border-radius: 8%;
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_900};
  overflow: scroll;
`;

export const StyledToggleButton = styled(ToggleButton)<{
  isActive?: boolean;
}>`
  color: ${({ theme, isActive }) =>
    isActive ? 'white' : theme.PALETTE.GRAY_400};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.PALETTE.RED_400 : 'white'};
  border-radius: 0;
`;
