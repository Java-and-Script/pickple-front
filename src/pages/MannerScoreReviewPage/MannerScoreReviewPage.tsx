import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Profile } from '@pages/ProfilePage/Profile';

import { Avatar } from '@components/Avatar';
import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { useMannerScoreReviewPatchMutation } from '@hooks/mutations/useMannerScoreReviewPatchMutation';
import { useGameDetailQuery } from '@hooks/queries/useGameDetailQuery';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@consts/pathName';

import leftArrowIcon from '@assets/leftArrow.svg';
import rightArrowIcon from '@assets/rightArrow.svg';

import {
  BackwardIcon,
  BackwardWrapper,
  Box,
  MemberListContainer,
  ReviewPageContainer,
  TextWrapper,
} from './MannerScoreReviewPage.style';
import { ToggleButton } from './ToggleButton';

export const MannerScoreReviewPage = () => {
  const navigate = useNavigate();
  const gameId = Number(location.pathname.split('/')[2]);
  const { data } = useGameDetailQuery(gameId);
  const teammateListInfo = data.members;

  const [currentSelectedMemberIndex, setCurrentSelectedMemberIndex] =
    useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [teammateList, setTeammateList] = useState<
    {
      memberId: number;
      mannerScore: -1 | 0 | 1;
    }[]
  >(
    data.members.map(({ id }) => {
      return {
        memberId: id,
        mannerScore: 0,
      };
    })
  );

  const { mutate } = useMannerScoreReviewPatchMutation({
    payload: { mannerScoreReviews: teammateList },
    gameId: gameId,
  });

  const handleToggle = (value: string) => {
    teammateList.splice(currentSelectedMemberIndex, 1, {
      memberId: teammateList[currentSelectedMemberIndex].memberId,
      mannerScore: value === '좋았어요' ? 1 : -1,
    });
    setTeammateList([...teammateList]);
  };

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
          {teammateListInfo.map(({ profileImageUrl, nickname }, index) => (
            <Flex
              key={index}
              direction="column"
              justify="center"
              onClick={() => {
                setCurrentSelectedMemberIndex(index);
              }}
            >
              <Avatar
                src={profileImageUrl}
                size={50}
                border={
                  index === currentSelectedMemberIndex
                    ? `10px solid ${theme.PALETTE.RED_600}`
                    : `1px solid ${theme.PALETTE.GRAY_400}`
                }
                radius={'5px'}
              />
              <Text size={'0.5rem'} weight={300} ellipsis={1}>
                {nickname}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Box height="35px" />
      </MemberListContainer>
      <Flex direction="row" justify="space-between" align="center">
        <BackwardWrapper>
          <BackwardIcon
            onClick={() => {
              handleLeftArrowIconClick();
            }}
          >
            <img src={leftArrowIcon} alt="" />
          </BackwardIcon>
        </BackwardWrapper>
        <Flex direction="column" gap={10} align="center">
          <Avatar
            src={teammateListInfo[currentSelectedMemberIndex].profileImageUrl}
            size={100}
            border={`1px solid ${theme.PALETTE.GRAY_400}`}
            radius={'5px'}
          />
          <Text size={'1.5rem'} weight={500}>
            {teammateListInfo[currentSelectedMemberIndex].nickname}
          </Text>
          <Text
            size={'1rem'}
            weight={300}
            style={{ color: theme.PALETTE.RED_400 }}
            onClick={() => setIsOpen(true)}
          >
            {'자세히보기'}
          </Text>
        </Flex>
        <BackwardWrapper>
          <BackwardIcon
            onClick={() => {
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
          <ToggleButton
            value="좋았어요"
            height={'3.125rem'}
            fontSize={theme.FONT_SIZE.LG}
            isActive={
              teammateList[currentSelectedMemberIndex].mannerScore === 1
            }
            onToggle={(value) => {
              handleToggle(value);
            }}
          />
          <ToggleButton
            value="아쉬워요"
            height={'3.125rem'}
            fontSize={theme.FONT_SIZE.LG}
            isActive={
              teammateList[currentSelectedMemberIndex].mannerScore === -1
            }
            onToggle={(value) => {
              handleToggle(value);
            }}
          />
        </Flex>
        <Button
          height="3.125rem"
          {...theme.BUTTON_PROPS.LARGE_RED_BUTTON_PROPS}
          onClick={() => {
            if (confirm('리뷰를 제출하시겠습니까?')) {
              mutate();
              navigate(PATH_NAME.GET_GAMES_PATH(`${gameId}`), {
                replace: true,
              });
            }
          }}
        >
          {'제출하기'}
        </Button>
      </Flex>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <Modal.Content>
          <Profile memberId={1} />
        </Modal.Content>
      </Modal>
    </ReviewPageContainer>
  );
};
