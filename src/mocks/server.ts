import { setupServer } from 'msw/node';

import { handlers } from '@mocks/handlers';

const useMSW = import.meta.env.VITE_USE_MSW === 'true';

export const server = useMSW ? setupServer(...handlers) : null;
