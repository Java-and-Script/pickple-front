import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';

async function deferRender() {
  if (import.meta.env.MODE !== 'development') {
    return;
  }

  if (import.meta.env.VITE_USE_MSW === 'false') {
    return;
  }

  const { worker } = await import('@mocks/browser');

  return worker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
    onUnhandledRequest: 'bypass',
  });
}

deferRender().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
);
