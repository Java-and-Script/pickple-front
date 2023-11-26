import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { WebViewPage } from '@pages/WebViewPage/WebViewPage';

import { router } from '@routes/router';

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
  return (
    <>
      <AppView>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <ReactQueryDevtools />
            <GlobalStyle />
            <Toaster />
          </ThemeProvider>
        </QueryClientProvider>
      </AppView>
      <WebView>
        <WebViewPage />
      </WebView>
    </>
  );
}

export default App;

const AppView = styled.div`
  @media (min-width: 501px) {
    display: none;
  }
`;

const WebView = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;
