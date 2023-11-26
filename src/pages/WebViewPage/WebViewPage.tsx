import styled from '@emotion/styled';

import { theme } from '@styles/theme';

import GithubIcon from '@assets/githubIcon.svg?react';
import Logo from '@assets/logoSvg.svg?react';
import NotionIcon from '@assets/notionIcon.svg?react';

export const WebViewPage = () => {
  return (
    <>
      <WebViewContainer>
        <FirstRow>
          <FontContainer>
            <FontWrapper>
              <Bold className="redColor">픽하세요,</Bold>
              <Bold>당신의 게스트</Bold>
            </FontWrapper>
            <FontWrapper>
              <Light>번거로운 과정없이</Light>
              <Light>경기에만 집중하게 해드릴게요</Light>
            </FontWrapper>
            <GithubIcon />
            <NotionIcon />
          </FontContainer>
          <PhoneMockup>
            <Carousel>
              <Img src="src/assets/homeSample.png" />
              <Img src="src/assets/mapSample.png" />
              <Img src="src/assets/chatSample.png" />
            </Carousel>
          </PhoneMockup>
        </FirstRow>
        <SecondRow>두번째행</SecondRow>
        <ThirdRow>세번째행</ThirdRow>
        <Logo />
      </WebViewContainer>
    </>
  );
};

const WebViewContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const FontContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FirstRow = styled.div`
  height: 780px;
  background-color: #f4f5f6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > svg {
    width: calc(48 * 4px);
    height: calc(23 * 4px);
  }
`;
const Bold = styled.p`
  width: 350px;
  height: auto;
  font-size: 50px;
  font-weight: ${theme.FONT_WEIGHT.BOLD};

  &.redColor::first-letter {
    color: ${theme.PALETTE.RED_600};
  }
`;
const Light = styled.p`
  width: 350px;
  height: auto;
  font-size: 16px;
  font-weight: ${theme.FONT_WEIGHT.MEDIUM};
  color: ${theme.PALETTE.GRAY_400};
`;
const PhoneMockup = styled.div`
  box-sizing: content-box;
  position: relative;
  width: calc(369px / 1.2);
  height: calc(750px / 1.2);
  border: 7px #0b0b0b solid;
  border-top-width: 24px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & > img:nth-child(2) {
    animation-name: secondAnimation;
  }
  & > img:nth-child(3) {
    animation-name: thirdAnimation;
  }
`;
const Img = styled.img`
  width: 101%;
  height: 101%;
  position: absolute;

  -webkit-animation-duration: 6s;
  animation-duration: 6s;
  -webkit-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  animation-direction: normal;
  -webkit-animation-fill-mode: none;
  animation-fill-mode: none;
  -webkit-animation-play-state: running;
  animation-play-state: running;

  @keyframes secondAnimation {
    0% {
      opacity: 0;
    }
    26% {
      opacity: 0;
    }
    34% {
      opacity: 1;
    }
    67% {
      opacity: 1;
    }
    68% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes thirdAnimation {
    0% {
      opacity: 0;
    }

    59% {
      opacity: 0;
    }
    67% {
      opacity: 1;
    }
    92% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const SecondRow = styled.div`
  height: 400px;
`;
const ThirdRow = styled.div`
  height: 400px;
  background-color: #f4f5f6;
`;
