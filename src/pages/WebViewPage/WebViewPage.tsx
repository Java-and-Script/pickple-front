import styled from '@emotion/styled';

import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

import { theme } from '@styles/theme';

import GithubIcon from '@assets/githubIcon.svg?react';
import Logo from '@assets/logoSvg.svg?react';
import NotionIcon from '@assets/notionIcon.svg?react';
import Filter from '@assets/webView/solvingProblem/filter.svg?react';
import Lock from '@assets/webView/solvingProblem/lock.svg?react';
import Smile from '@assets/webView/solvingProblem/smile.svg?react';
import ThumbUp from '@assets/webView/solvingProblem/thumbUp.svg?react';

export const WebViewPage = () => {
  const [refBackEnd, entryBackEnd] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0,
    root: null,
    rootMargin: '-10%',
  });
  const [refFrontEnd, entryFrontEnd] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0,
    root: null,
    rootMargin: '-10%',
  });
  const [refSolvingProblem, entrySolvingProblem] =
    useIntersectionObserver<HTMLDivElement>({
      threshold: 0,
      root: null,
      rootMargin: '-10%',
    });

  return (
    <>
      <WebViewContainer>
        <Header>
          <Logo />
          <MenuContainer>
            <Light>
              <a href="#introduce">소개</a>
            </Light>
            <Light>
              <a href="#techStack">기술 스택</a>
            </Light>
            <Light>
              <a href="#solvingProblem">해결하는 문제</a>
            </Light>
          </MenuContainer>
        </Header>
        <FirstRow id="introduce">
          <FontContainer>
            <FontWrapper>
              <Bold className="redColor">픽하세요,</Bold>
              <Bold>당신의 게스트</Bold>
            </FontWrapper>
            <FontWrapper>
              <Light>번거로운 과정없이</Light>
              <Light>경기에만 집중하게 해드릴게요</Light>
            </FontWrapper>
            <IconWrapper>
              <GithubIcon
                onClick={() =>
                  window.open('https://github.com/Java-and-Script')
                }
              />
              <NotionIcon
                onClick={() =>
                  window.open(
                    'https://www.notion.so/prgrms/16-ffafb71245cb4369a0055080ee34ba67'
                  )
                }
              />
              <QRIcon />
            </IconWrapper>
          </FontContainer>
          <PhoneMockup>
            <Carousel>
              <Img src="src/assets/homeSample.png" />
              <Img src="src/assets/mapSample.png" />
              <Img src="src/assets/chatSample.png" />
            </Carousel>
          </PhoneMockup>
        </FirstRow>
        <SecondRow id="techStack">
          <SecondRowSubContainer>
            <StackContainer
              ref={refBackEnd}
              className={
                entryBackEnd?.isIntersecting ? 'backEndStack' : 'invisible'
              }
            >
              <StackSubContainer>
                <StackIcon
                  url={'src/assets/webView/techStack/back/springBoot.png'}
                />
              </StackSubContainer>
              <StackSubContainer>
                <StackIcon
                  url={'src/assets/webView/techStack/back/java17.png'}
                />
              </StackSubContainer>
              <StackSubContainer>
                <StackIcon url={'src/assets/webView/techStack/back/jpa.png'} />
                <StackIcon
                  url={'src/assets/webView/techStack/back/mySql.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/back/redis.png'}
                />
              </StackSubContainer>
              <StackSubContainer>
                <StackIcon
                  url={'src/assets/webView/techStack/back/awsEc2.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/back/awsRds.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/back/awsElastiCache.png'}
                />
              </StackSubContainer>
              <StackSubContainer>
                <StackIcon
                  url={'src/assets/webView/techStack/back/nginx.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/back/docker.png'}
                />
              </StackSubContainer>
              <StackSubContainer>
                <StackIcon
                  url={'src/assets/webView/techStack/back/githubActions.png'}
                />
              </StackSubContainer>
            </StackContainer>
            <FontWrapper>
              <Medium className="redColor">백엔드의</Medium>
              <Medium>기술스택이에요</Medium>
              <ColumnGap></ColumnGap>
              <Light>•SpringBoot 3.1</Light>
              <Light>•Java 17</Light>
              <Light>•JPA, MySQL8, Redis</Light>
              <Light>•AWS EC2, RDS, ElasticCache</Light>
              <Light>•Nginx, Docker</Light>
              <Light>•Github Actions</Light>
            </FontWrapper>
          </SecondRowSubContainer>
          <SecondRowSubContainer>
            <FontWrapper>
              <Medium className="redColor">프론트엔드의</Medium>
              <Medium>기술스택이에요</Medium>
              <ColumnGap></ColumnGap>
              <Light>•React, TypeScript</Light>
              <Light>•Prettier, ESLint</Light>
              <Light>•Axios, Emotion, React-Hook-Form</Light>
              <Light>•Tanstack-Query, Zustand, React-Router-Dom</Light>
              <Light>•Vite, Vercel</Light>
              <Light>•npm, Github Actions</Light>
            </FontWrapper>
            <StackContainer
              ref={refFrontEnd}
              className={
                entryFrontEnd?.isIntersecting ? 'frontEndStack' : 'invisible'
              }
            >
              <StackSubContainer>
                <StackIcon
                  url={'src/assets/webView/techStack/front/react.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/front/typeScript.png'}
                />
              </StackSubContainer>
              <StackSubContainer>
                <StackIcon
                  url={'src/assets/webView/techStack/front/prettier.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/front/eslint.png'}
                />
              </StackSubContainer>
              <StackSubContainer>
                <StackIcon
                  url={'src/assets/webView/techStack/front/axios.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/front/emotion.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/front/reactHookForm.png'}
                />
              </StackSubContainer>
              <StackSubContainer>
                <StackIcon
                  url={'src/assets/webView/techStack/front/tanstackQuery.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/front/zustand.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/front/reactRouterDom.svg'}
                />
              </StackSubContainer>
              <StackSubContainer>
                <StackIcon
                  url={'src/assets/webView/techStack/front/vite.png'}
                />
                <StackIcon
                  url={'src/assets/webView/techStack/front/vercel.png'}
                />
              </StackSubContainer>
              <StackSubContainer>
                <StackIcon url={'src/assets/webView/techStack/front/npm.png'} />
                <StackIcon
                  url={'src/assets/webView/techStack/front/githubActions.png'}
                />
              </StackSubContainer>
            </StackContainer>
          </SecondRowSubContainer>
        </SecondRow>
        <ThirdRow id="solvingProblem">
          <Medium>기술스택이에요</Medium>
          <Light>번거로운 과정없이</Light>
          <Light>경기에만 집중하게 해드릴게요</Light>
          <SolvingProblemIconContainer
            ref={refSolvingProblem}
            className={
              entrySolvingProblem?.isIntersecting
                ? 'solvingProblem'
                : 'invisible'
            }
          >
            <SolvingProblemIconWrapper>
              <ThumbUp />
            </SolvingProblemIconWrapper>
            <SolvingProblemIconWrapper>
              <Lock />
            </SolvingProblemIconWrapper>
            <SolvingProblemIconWrapper>
              <Smile />
            </SolvingProblemIconWrapper>
            <SolvingProblemIconWrapper>
              <Filter />
            </SolvingProblemIconWrapper>
          </SolvingProblemIconContainer>
        </ThirdRow>
      </WebViewContainer>
    </>
  );
};

const WebViewContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 60px;
  padding: 0 40px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #ffffff;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 40px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 30px;
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
  position: relative;
  height: 780px;
  background-color: #f4f5f6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  & > svg {
    width: calc(48 * 4px);
    height: calc(23 * 4px);
  }
`;
const ColumnGap = styled.div`
  height: 50px;
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
const Medium = styled.p`
  width: 350px;
  height: auto;
  font-size: 50px;
  font-weight: ${theme.FONT_WEIGHT.MEDIUM};

  &.redColor::first-letter {
    color: ${theme.PALETTE.RED_600};
  }
`;
const Light = styled.p`
  width: auto;
  height: auto;
  font-size: 16px;
  font-weight: ${theme.FONT_WEIGHT.MEDIUM};
  color: ${theme.PALETTE.GRAY_400};

  > a {
    text-decoration: none;
    color: inherit;
  }
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
const QRIcon = styled.div`
  width: 56px;
  height: 56px;
  background-image: url('src/assets/qrIcon.png');
  background-repeat: no-repeat;
  background-size: contain;
`;
const IconWrapper = styled.div`
  position: absolute;
  width: 320px;
  bottom: 90px;
  display: flex;
  gap: 20px;
  align-items: center;
  & > svg {
    :hover {
      transform: scale(0.95);
      cursor: pointer;
    }
  }
`;

const SecondRow = styled.div`
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const SecondRowSubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &.invisible {
    opacity: 0;
  }

  &.backEndStack > :nth-child(1),
  &.frontEndStack > :nth-child(1) {
    opacity: 0;
    animation: opacityChange 1s forwards;
    animation-delay: 100ms;
  }

  &.backEndStack > :nth-child(2),
  &.frontEndStack > :nth-child(2) {
    opacity: 0;
    animation: opacityChange 1s forwards;
    animation-delay: 180ms;
  }
  &.backEndStack > :nth-child(3),
  &.frontEndStack > :nth-child(3) {
    opacity: 0;
    animation: opacityChange 1s forwards;
    animation-delay: 260ms;
  }
  &.backEndStack > :nth-child(4),
  &.frontEndStack > :nth-child(4) {
    opacity: 0;
    animation: opacityChange 1s forwards;
    animation-delay: 340ms;
  }
  &.backEndStack > :nth-child(5),
  &.frontEndStack > :nth-child(5) {
    opacity: 0;
    animation: opacityChange 1s forwards;
    animation-delay: 420ms;
  }
  &.backEndStack > :nth-child(6),
  &.frontEndStack > :nth-child(6) {
    opacity: 0;
    animation: opacityChange 1s forwards;
    animation-delay: 500ms;
  }

  @keyframes opacityChange {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
const StackSubContainer = styled.div`
  display: flex;
  gap: 30px;
`;
const StackIcon = styled.div<{ url: string }>`
  width: 56px;
  height: 56px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
const ThirdRow = styled.div`
  height: 800px;
  background-color: #f4f5f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 40px;
`;

const SolvingProblemIconContainer = styled.div`
  height: 300px;
  display: flex;
  gap: 80px;

  &.invisible {
    opacity: 0;
  }

  &.solvingProblem > div > svg {
    opacity: 0;
    animation: showUp 1s forwards;
    animation-delay: 100ms;
  }
  @keyframes showUp {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
const SolvingProblemIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 50%;

  & > svg {
    width: 50%;
    height: 50%;
  }
`;
