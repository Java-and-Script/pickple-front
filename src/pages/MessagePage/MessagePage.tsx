import { useState } from 'react';

import { Header } from '@components/Header';

import {
  Main,
  MessageContainer,
  TabBar,
  TabBarButton,
} from './MessagePage.style.ts';

const TAB_TITLE = { ONE_TO_ONE: 'oneToOne', GROUP: 'group' };

export const MessagePage = () => {
  const [selectedTab, setSelectedTab] = useState(TAB_TITLE.ONE_TO_ONE);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <MessageContainer>
      <Header isLogo={false} title="메세지" isRightContainer={true} />
      <Main>
        <TabBar>
          <TabBarButton
            onClick={() => handleTabClick(TAB_TITLE.ONE_TO_ONE)}
            isSelected={selectedTab === TAB_TITLE.ONE_TO_ONE}
          >
            일대일
          </TabBarButton>
          <TabBarButton
            onClick={() => handleTabClick(TAB_TITLE.GROUP)}
            isSelected={selectedTab === TAB_TITLE.GROUP}
          >
            그룹
          </TabBarButton>
        </TabBar>
      </Main>
    </MessageContainer>
  );
};
