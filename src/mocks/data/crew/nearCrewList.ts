import { CrewProfile } from '@type/models';

export const crewList: CrewProfile[] = Array(100)
  .fill({
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
  })
  .map((crewList: CrewProfile, index) => ({
    ...crewList,
    id: index + 1,
  }));
