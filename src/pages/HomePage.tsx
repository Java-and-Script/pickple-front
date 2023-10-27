import { useEffect, useState } from 'react';

import axios from 'axios';

import { Avatar } from '@components/shared/Avatar/Avatar';
import { AvatarGroup } from '@components/shared/AvatarGroup';

export const HomePage = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/test').then(({ data }) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <h1>
      {data}
      <AvatarGroup size={30} radius="20px" border="2px solid gray" overlap={10}>
        <Avatar src="https://picsum.photos/500" />
        <Avatar src="https://picsum.photos/500" />
        <Avatar src="https://picsum.photos/500" />
        <Avatar src="https://picsum.photos/500" />
        <Avatar src="https://picsum.photos/500" />
        <Avatar src="https://picsum.photos/500" />
      </AvatarGroup>
    </h1>
  );
};
