import Hamburger from '@/assets/hamburger.svg?react';

import { Avatar } from '@components/Avatar';
import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { Input } from '@components/shared/Input';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@constants/pathName';

import {
  AlignedCenteredText,
  ChatRoomContainer,
  FlexModalItem,
  InputWrapper,
  Main,
  ModalItem,
  ProfileListContainer,
  SendButton,
} from './ChattingPage.style';
import { Chat } from './components/Chat';
import { ChatRoomTitle } from './components/ChatRoomTitle';
import { PageMoveModalItem } from './components/PageMoveModalItem';
import { MODAL_CONTENTS } from './constants/modalContents';
import { useChattingPage } from './hooks/useChattingPage';

export const ChattingPage = () => {
  const {
    roomDetails: { type: roomType, domainId, roomName, members },
    chatMessages,
    myId,
    isModalOpen,
    inputRef,
    chattingEndRef,
    modalContents,
    setModalContents,
    setIsModalOpen,
    moveToPage,
    sendChatMessage,
    quitChatting,
    handleClickChattingMenu,
  } = useChattingPage();

  return (
    <>
      <ChatRoomContainer>
        <Header
          isLogo={false}
          title={
            <ChatRoomTitle
              type={roomType}
              domainId={domainId}
              roomName={roomName}
              onClick={moveToPage}
            />
          }
          isRightContainer={true}
          rightElement={<Hamburger onClick={handleClickChattingMenu} />}
        />
        <Main direction="column" gap={8}>
          {chatMessages.map((message, index) => (
            <Chat
              key={index}
              chatInfo={message}
              isOthersMessage={message.sender.id !== myId}
              onClickAvatar={() =>
                moveToPage(
                  PATH_NAME.GET_PROFILE_PATH(String(message.sender.id))
                )
              }
            />
          ))}
        </Main>
      </ChatRoomContainer>
      <InputWrapper>
        <Input
          onSubmit={sendChatMessage}
          height="48px"
          backgroundColor={theme.PALETTE.GRAY_200}
          ref={inputRef}
        >
          <SendButton>전송</SendButton>
        </Input>
      </InputWrapper>
      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
        {modalContents === MODAL_CONTENTS.DEFAULT ? (
          <Modal.Content>
            <ModalItem
              onClick={() => {
                setModalContents(MODAL_CONTENTS.CHAT_MEMBERS);
              }}
            >
              대화 상대
            </ModalItem>
            <PageMoveModalItem
              id={domainId}
              type={roomType}
              onClick={moveToPage}
            />
            <ModalItem onClick={quitChatting}>채팅방 나가기</ModalItem>
          </Modal.Content>
        ) : (
          <Modal.Content>
            <FlexModalItem
              onClick={() => {
                setModalContents(MODAL_CONTENTS.DEFAULT);
              }}
            >
              <Text>{'< '}</Text>
              <AlignedCenteredText>대화 상대</AlignedCenteredText>
            </FlexModalItem>
            <ProfileListContainer>
              {members.map((members) => (
                <FlexModalItem
                  gap={8}
                  align="center"
                  onClick={() =>
                    moveToPage(PATH_NAME.GET_PROFILE_PATH(String(members.id)))
                  }
                >
                  <Avatar src={members.profileImageUrl} />
                  <Text weight={500}>{members.nickname}</Text>
                </FlexModalItem>
              ))}
            </ProfileListContainer>
          </Modal.Content>
        )}
      </Modal>
      <div ref={chattingEndRef}></div>
    </>
  );
};
