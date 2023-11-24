import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { router } from '@routes/router';

import { useEventSource } from '@hooks/useEventSource';

import GlobalStyle from '@styles/globalStyle';
import { theme } from '@styles/theme';

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
    '/api/alarms/subscribe',
    () => {
      queryClient.resetQueries({ queryKey: ['alarms'] });
      queryClient.invalidateQueries({ queryKey: ['alarms-unread'] });
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
