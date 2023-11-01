const MOCK_MATCH_DATA = {
  id: 1,
  content: `반갑습니다. 팀 백둥크루입니다.
    
      지인들끼리 가볍게 경기를 해 왔었고, 새롭게 같이 만들어 나가실 멤버를 구합니다.
      친목 팀이다 보니 승리에 과하게 집착하거나 다혈질적인 성격을 가진 회원은 정중히 사양합니다.
      실력은 없어도 열심히 뛰시고 매너만 좋다면 언제든 환영이니 편하게 연락주세요.
      
      궁금하신점 있으시면 언제든 DM 주세요.`,
  playDate: '2023-10-30',
  playStartTime: '11:30',
  playEndTime: '13:00',
  playTimeMinutes: 90,
  mainAddress: '서울 영등포구 도림동 254',
  detailAddress: '영등포 다목적 체육관 2층 201호',
  latitude: 37.5059593,
  longitude: 126.898151,
  status: '모집 중',
  viewCount: 100,
  cost: 0,
  memberCount: 3,
  maxMemberCount: 5,
  host: {
    id: 1,
    email: 'james123@pickple.kr',
    nickname: 'james123',
    introduction: '안녕하십니까. 제임스입니다. 아이고~ 사장님~~',
    profileImageUrl: 'https://s3.amazonaws.com/pickple/james123.jpg',
    mannerScore: 21,
    mannerScoreCount: 30,
    addressDepth1: '서울시',
    addressDepth2: '강남구',
  },
  addressDepth1: '서울시',
  addressDepth2: '영등포구',
  positions: ['C', 'PF'],
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
};

export const getMatch = async (id: string) => {
  id;
  return MOCK_MATCH_DATA;
};
