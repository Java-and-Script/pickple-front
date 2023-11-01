import { HttpResponse, http } from 'msw';

export const testHandlers = [
  http.get('/api/test', () => {
    return HttpResponse.json('Hello world!', { status: 200 });
  }),
];
