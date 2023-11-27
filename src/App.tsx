import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import { InfiniteData, QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { router } from '@routes/router';

import { useEventSource } from '@hooks/useEventSource';

import GlobalStyle from '@styles/globalStyle';
import { theme } from '@styles/theme';

import { GetAlarmsResponse } from '@type/api/alarm';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 10000,
    },
  },
});

function App() {
  useEventSource(
    `${import.meta.env.VITE_BASE_URL}/alarms/subscribe`,
    () => {
      queryClient.resetQueries({ queryKey: ['alarms'] });
      queryClient
        .invalidateQueries({ queryKey: ['alarms-unread'] })
        .then(() => {
          const data = queryClient.getQueryData<
            InfiniteData<GetAlarmsResponse, number>
          >(['alarms']);
          const alarms = data?.pages.flatMap((page) => page.alarmResponse);
          alarms &&
            toast(
              'crewId' in alarms[0]
                ? alarms[0].crewAlarmMessage
                : alarms[0].gameAlarmMessage
            );
        });
    },
    (error) => console.log(error)
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
        <GlobalStyle />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
