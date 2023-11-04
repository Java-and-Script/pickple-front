import { useState } from 'react';

import { Avatar } from '@components/Avatar';
import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import leftArrowIcon from '@assets/leftArrow.svg';
import rightArrowIcon from '@assets/rightArrow.svg';

import {
  BackwardIcon,
  BackwardWrapper,
  Box,
  MemberListContainer,
  ReviewPageContainer,
  TextWrapper,
} from './ReviewPage.style';

export const ReviewPage = () => {
  const [currentSelectedMemberIndex, setCurrentSelectedMemberIndex] =
    useState(0);

  const handleLeftArrowIconClick = () => {
    if (currentSelectedMemberIndex > 0) {
      setCurrentSelectedMemberIndex(currentSelectedMemberIndex - 1);
    }
  };

  const handleRightArrowIconClick = () => {
    if (currentSelectedMemberIndex < teammateList.length - 1) {
      setCurrentSelectedMemberIndex(currentSelectedMemberIndex + 1);
    }
  };
  return (
    <ReviewPageContainer>
      <Header isRightContainer={false} />
      <TextWrapper>
        <Text size={'1.5rem'} weight={700}>
          {'참가한 팀원 목록'}
        </Text>
      </TextWrapper>
      <MemberListContainer transform={-currentSelectedMemberIndex * 60}>
        <Flex direction="row" gap={10}>
          {teammateList.map(({ imgUrl, name }, index) => (
            <Flex
              key={index}
              direction="column"
              justify="center"
              onClick={() => setCurrentSelectedMemberIndex(index)}
            >
              <Avatar
                src={imgUrl}
                size={50}
                border={
                  index === currentSelectedMemberIndex
                    ? `10px solid ${theme.PALETTE.RED_600}`
                    : `1px solid ${theme.PALETTE.GRAY_400}`
                }
                radius={'5px'}
              />
              <Text size={'0.5rem'} weight={300} ellipsis={1}>
                {name}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Box height="35px" />
      </MemberListContainer>
      <Flex direction="row" justify="space-around" align="center">
        <BackwardWrapper>
          <BackwardIcon
            onClick={() => {
              console.log(currentSelectedMemberIndex);
              handleLeftArrowIconClick();
            }}
          >
            <img src={leftArrowIcon} alt="" />
          </BackwardIcon>
        </BackwardWrapper>
        <Flex direction="column" gap={10} align="center">
          <Avatar
            src={teammateList[currentSelectedMemberIndex].imgUrl}
            size={100}
            border={`1px solid ${theme.PALETTE.GRAY_400}`}
            radius={'5px'}
          />
          <Text size={'1.5rem'} weight={500}>
            {teammateList[currentSelectedMemberIndex].name}
          </Text>
          <Text
            size={'1rem'}
            weight={300}
            style={{ color: theme.PALETTE.RED_400 }}
          >
            {'자세히보기'}
          </Text>
        </Flex>
        <BackwardWrapper>
          <BackwardIcon
            onClick={() => {
              console.log(currentSelectedMemberIndex);
              handleRightArrowIconClick();
            }}
          >
            <img src={rightArrowIcon} alt="" />
          </BackwardIcon>
        </BackwardWrapper>
      </Flex>
      <Box height="100px" />
      <TextWrapper>
        <Text size={'1.5rem'} weight={700}>
          {'팀원의 매너는 어땠나요?'}
        </Text>
      </TextWrapper>
      <Flex direction="column" gap={40}>
        <Flex direction="column" gap={10}>
          <Button
            height="3.125rem"
            {...theme.BUTTON_PROPS.LARGE_GRAY_OUTLINED_BUTTON_PROPS}
          >
            {'좋았어요'}
          </Button>
          <Button
            height="3.125rem"
            {...theme.BUTTON_PROPS.LARGE_GRAY_OUTLINED_BUTTON_PROPS}
          >
            {'아쉬워요'}
          </Button>
        </Flex>{' '}
        <Button
          height="3.125rem"
          {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
        >
          {'제출하기'}
        </Button>
      </Flex>
    </ReviewPageContainer>
  );
};

const teammateList = [
  { imgUrl: 'https://picsum.photos/id/10/500', name: 'pickple user1' },
  { imgUrl: 'https://picsum.photos/id/20/500', name: 'pickple user2' },
  { imgUrl: 'https://picsum.photos/id/30/500', name: 'pickple user3' },
  { imgUrl: 'https://picsum.photos/id/40/500', name: 'pickple user4' },
  { imgUrl: 'https://picsum.photos/id/50/500', name: 'pickple user5' },
  { imgUrl: 'https://picsum.photos/id/60/500', name: 'pickple user6' },
  { imgUrl: 'https://picsum.photos/id/70/500', name: 'pickple user7' },
  { imgUrl: 'https://picsum.photos/id/80/500', name: 'pickple user8' },
  { imgUrl: 'https://picsum.photos/id/90/500', name: 'pickple user9' },
  { imgUrl: 'https://picsum.photos/id/100/500', name: 'pickple user10' },
  { imgUrl: 'https://picsum.photos/id/110/500', name: 'pickple user11' },
  { imgUrl: 'https://picsum.photos/id/120/500', name: 'pickple user12' },
  { imgUrl: 'https://picsum.photos/id/130/500', name: 'pickple user13' },
  { imgUrl: 'https://picsum.photos/id/140/500', name: 'pickple user14' },
  { imgUrl: 'https://picsum.photos/id/141/500', name: 'pickple user15' },
];
