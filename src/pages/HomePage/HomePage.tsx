import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import axios from 'axios';

export const HomePage = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/test').then(({ data }) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <>
      <Header>임시 헤더</Header>
      <h1>{data}</h1>
    </>
  );
};

const Header = styled.div`
  position: fixed;
  height: 40px;
  top: 0;
  left: 0;
  background-color: aqua;
  width: 100%;
`;
