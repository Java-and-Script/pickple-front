import Hamburger from '@/assets/hamburger.svg?react';

import { Header } from '@components/Header';
import { Skeleton } from '@components/Skeleton';
import { Input } from '@components/shared/Input';

import { theme } from '@styles/theme';

import { InputWrapper, SendButton } from '../ChattingPage.style';
import { TitleSkeletonWrapper } from './ChattingPageSkeleton.styles';

export const ChattingPageSkeleton = () => {
  return (
    <Skeleton
      width="100px"
      height="14px"
      radius="5px"
      defaultColor={theme.PALETTE.GRAY_100}
      gradientColor={theme.PALETTE.GRAY_200}
    >
      <Header
        isLogo={false}
        title={
          <TitleSkeletonWrapper justify="center" align="center">
            <Skeleton.Item />
          </TitleSkeletonWrapper>
        }
        isRightContainer={true}
        rightElement={<Hamburger />}
      />
      <InputWrapper>
        <Input height="48px" backgroundColor={theme.PALETTE.GRAY_200}>
          <SendButton>전송</SendButton>
        </Input>
      </InputWrapper>
    </Skeleton>
  );
};
