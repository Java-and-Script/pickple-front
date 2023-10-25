import { useEffect, useState } from 'react';

import axios from 'axios';

export const HomePage = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/test').then(({ data }) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return <h1>{data}</h1>;
};
