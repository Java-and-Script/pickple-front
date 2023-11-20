import Hamburger from '@/assets/hamburger.svg?react';

import { Header } from '@components/Header';
import { Modal } from '@components/Modal';
import { Input } from '@components/shared/Input';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@consts/pathName';

import { Chat } from './Chat';
import { ChatTitle } from './ChatTitle';
import {
  ChatRoomContainer,
  InputWrapper,
  Main,
  ModalItem,
  SendButton,
} from './ChattingPage.style';
import { useChattingPage } from './useChattingPage';

export const ChattingPage = () => {
  const {
    roomDetails: { type: roomType, domainId, roomName },
    chatMessages,
    myId,
    isModalOpen,
    inputRef,
    chattingEndRef,
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
            <ChatTitle
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
        <Modal.Content>
          <ModalItem onClick={quitChatting}>채팅방 나가기</ModalItem>
        </Modal.Content>
      </Modal>
      <div ref={chattingEndRef}></div>
    </>
  );
};
