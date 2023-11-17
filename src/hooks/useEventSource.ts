import { useEffect } from 'react';

import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';

import { useLoginInfoStore } from '@stores/loginInfo.store';

export const useEventSource = (
  subscribeUrl: string,
  onmessage: EventSourcePolyfill['onmessage'],
  onerror?: EventSourcePolyfill['onerror']
) => {
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  useEffect(() => {
    if (!loginInfo?.id) {
      return;
    }

    const EventSource = EventSourcePolyfill || NativeEventSource;
    const eventSource = new EventSource(subscribeUrl, {
      headers: { Authorization: loginInfo.accessToken },
    });

    onerror && (eventSource.onerror = onerror);

    return () => {
      eventSource.close();
    };
  }, [loginInfo, onmessage, onerror, subscribeUrl]);
};
