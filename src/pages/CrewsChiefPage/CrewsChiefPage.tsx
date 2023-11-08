import { useNavigate } from 'react-router-dom';

import { CrewItem } from '@components/CrewItem';
import { Header } from '@components/Header';
import { Text } from '@components/shared/Text';

import { useHeaderTitle } from '@hooks/useHeaderTitle';

import { GetCreatedCrewsResponse } from '@type/api/member';
import { Crew, Member } from '@type/models';

import { PATH_NAME } from '@consts/pathName';

import { CrewsChiefContainer, Main } from './CrewsChiefPage.style';

export const CrewsChiefPage = () => {
  const navigate = useNavigate();

  const { entryRef, showHeaderTitle } = useHeaderTitle<HTMLDivElement>();

  const moveToManage = (crewId: Crew['id']) => {
    navigate(PATH_NAME.GET_CREWS_MANAGE_PATH(String(crewId)));
  };

  return (
    <CrewsChiefContainer>
      <Header title={showHeaderTitle ? '내가 만든 크루' : ''} />
      <Main gap={10} direction="column">
        <div ref={entryRef}>
          <Text size={20} weight={700}>
            내가 만든 크루
          </Text>
        </div>
        {crewsData.map((crew) => {
          const membersProfile: Member['profileImageUrl'][] = [];

          const membersProfileImageUrls = crew.members.reduce(
            (arr, member) => arr.concat(member.profileImageUrl),
            membersProfile
          );

          return (
            <CrewItem
              key={crew.id}
              name={crew.name}
              address={crew.addressDepth1 + crew.addressDepth2}
              imgSrc={crew.profileImageUrl}
              membersProfileImageUrls={membersProfileImageUrls}
              memberCount={crew.memberCount}
              maxMemberCount={crew.maxMemberCount}
              onClick={() => moveToManage(crew.id)}
            />
          );
        })}
      </Main>
    </CrewsChiefContainer>
  );
};

const crewsData: GetCreatedCrewsResponse = [
  {
    id: 1,
    name: '노드크루',
    content: '안녕하세요, 노드크루입니다. 백둥체육관 201호에서 진행합니다.',
    memberCount: 10,
    maxMemberCount: 15,
    profileImageUrl: 'pickpleCrewProfileImage.s3.ap-northeast-2.amazonaws.com',
    backgroundImageUrl:
      'pickpleCrewBackgroundImage.s3.ap-northeast-2.amazonaws.com',
    status: '모집 중',
    likeCount: 9,
    competitionPoint: 104,
    leader: {
      id: 1,
      email: 'james123@pickple.kr',
      nickname: 'james123',
      introduction: '안녕하십니까. 제임스입니다. 아이고~ 사장님~~',
      profileImageUrl: 'https://s3.amazonaws.com/pickple/james123.jpg',
      mannerScore: 21,
      mannerScoreCount: 30,
      addressDepth1: '서울시',
      addressDepth2: '강남구',
      positions: ['C', 'PF'],
    },
    addressDepth1: '서울시',
    addressDepth2: '강남구',
    members: [
      {
        id: 1,
        email: 'james123@pickple.kr',
        nickname: 'james123',
        introduction: '안녕하십니까. 제임스입니다. 아이고~ 사장님~~',
        profileImageUrl: 'https://s3.amazonaws.com/pickple/james123.jpg',
        mannerScore: 21,
        mannerScoreCount: 30,
        addressDepth1: '서울시',
        addressDepth2: '강남구',
        positions: ['C', 'PF'],
      },
      {
        id: 2,
        email: 'james456@pickple.kr',
        nickname: 'james456',
        introduction: '안녕하십니까. 제임스456입니다. 아이고~ 사장님~~',
        profileImageUrl: 'https://s3.amazonaws.com/pickple/james456.jpg',
        mannerScore: 26,
        mannerScoreCount: 30,
        addressDepth1: '서울시',
        addressDepth2: '강남구',
        positions: ['C'],
      },
    ],
  },
  {
    id: 2,
    name: '너드크루',
    content: '안녕하세요, 너드크루입니다. 프롱체육관 201호에서 진행합니다.',
    memberCount: 10,
    maxMemberCount: 15,
    profileImageUrl: 'pickpleCrewProfileImage.s3.ap-northeast-2.amazonaws.com',
    backgroundImageUrl:
      'pickpleCrewBackgroundImage.s3.ap-northeast-2.amazonaws.com',
    status: '모집 중',
    likeCount: 22,
    competitionPoint: 110,
    leader: {
      id: 1,
      email: 'james123@pickple.kr',
      nickname: 'james123',
      introduction: '안녕하십니까. 제임스입니다. 아이고~ 사장님~~',
      profileImageUrl: 'https://s3.amazonaws.com/pickple/james123.jpg',
      mannerScore: 21,
      mannerScoreCount: 30,
      addressDepth1: '서울시',
      addressDepth2: '강남구',
      positions: ['C', 'PF'],
    },
    addressDepth1: '서울시',
    addressDepth2: '강남구',
    members: [
      {
        id: 1,
        email: 'james123@pickple.kr',
        nickname: 'james123',
        introduction: '안녕하십니까. 제임스입니다. 아이고~ 사장님~~',
        profileImageUrl: 'https://s3.amazonaws.com/pickple/james123.jpg',
        mannerScore: 21,
        mannerScoreCount: 30,
        addressDepth1: '서울시',
        addressDepth2: '강남구',
        positions: ['C', 'PF'],
      },
      {
        id: 2,
        email: 'curry456@pickple.kr',
        nickname: 'curry456',
        introduction: '안녕하십니까. 제임스456입니다. 아이고~ 사장님~~',
        profileImageUrl: 'https://s3.amazonaws.com/pickple/james456.jpg',
        mannerScore: 26,
        mannerScoreCount: 30,
        addressDepth1: '서울시',
        addressDepth2: '강남구',
        positions: ['C'],
      },
    ],
  },
];
