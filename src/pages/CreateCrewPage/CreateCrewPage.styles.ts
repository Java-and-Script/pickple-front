import styled from '@emotion/styled';

import { Modal } from '@components/Modal';
import { SelectBox } from '@components/SelectBox';
import { Button } from '@components/shared/Button';
import { ToggleButton } from '@components/shared/ToggleButton';

export const PageLayout = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const PageWrapper = styled.div`
  ${({ theme }) => theme.STYLES.FLEX_DIRECTION_COLUMN}
  padding-top: 1rem;
`;

export const StyledTitle = styled.div`
  margin-bottom: 16px;
`;

export const StyledCreateForm = styled.form`
  ${({ theme }) => theme.STYLES.FLEX_DIRECTION_COLUMN}
  gap: 4px;
`;

export const StyledSubTitle = styled.div`
  margin-bottom: 8px;
`;

export const StyledInput = styled.input<{ height?: number | string }>`
  padding-left: 10px;
  width: 100%;
  height: 30px;
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_300};
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const StyledEmptyContainer = styled.div`
  height: 16px;
`;

export const StyledModalHeader = styled.div`
  ${({ theme }) => theme.STYLES.FLEX_CENTER}
  margin-bottom: 32px;
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
  overflow-x: hidden;
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

export const StyledModalContent = styled(Modal.Content)`
  ${({ theme }) => theme.STYLES.FLEX_CENTER}
  padding: 30px;
`;

export const StyledTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_300};
  border-radius: 8px;
  width: 100%;
  height: 340px;
  padding: 8px;
  margin-bottom: 16px;
`;
