import styled from '@emotion/styled';

import { SelectBox } from '@components/SelectBox';
import { Button } from '@components/shared/Button';
import { ToggleButton } from '@components/shared/ToggleButton';

export const PageLayout = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const PageWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.div`
  margin-bottom: 25px;
`;

export const StyledSubTitle = styled.div`
  margin-bottom: 8px;
`;

export const StyledInput = styled.input<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => (height ? height : '30px')};
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_300};
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const StyledCreateForm = styled.form``;

export const StyledEmptyContainer = styled.div`
  height: 16px;
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_300};
  border-radius: 8px;
  width: 100%;
  height: 320px;
  padding: 8px;
  margin-bottom: 16px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
