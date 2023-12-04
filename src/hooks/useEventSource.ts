import { useEffect } from 'react';

import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';

import { useTokenStore } from '@stores/accessToken.store';

export const useEventSource = ({
  subscribeUrl,
  eventListenerParameters = [],
  onmessage,
  onerror,
}: {
  subscribeUrl: string;
  eventListenerParameters?: Parameters<
    EventSourcePolyfill['addEventListener']
  >[];
  onmessage?: EventSourcePolyfill['onmessage'];
  onerror?: EventSourcePolyfill['onerror'];
}) => {
  const accessToken = useTokenStore((state) => state.accessToken);

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const EventSource = EventSourcePolyfill || NativeEventSource;
    const eventSource = new EventSource(subscribeUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'text/event-stream',
      },
      heartbeatTimeout: 1000 * 60 * 60 * 6,
    });

    eventListenerParameters.map((eventListenerParameter) => {
      eventSource.addEventListener(...eventListenerParameter);
    });

    onmessage && (eventSource.onmessage = onmessage);
    onerror && (eventSource.onerror = onerror);

    return () => {
      eventSource.close();
    };
  }, [accessToken, onmessage, onerror, subscribeUrl, eventListenerParameters]);
};
