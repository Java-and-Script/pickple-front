import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('/api/test', () => {
    return HttpResponse.json('Hello world!', { status: 200 });
  }),
];
