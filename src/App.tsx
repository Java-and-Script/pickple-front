import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { router } from '@routes/router';

import GlobalStyle from '@styles/globalStyle';
import { theme } from '@styles/theme';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

function App() {
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
