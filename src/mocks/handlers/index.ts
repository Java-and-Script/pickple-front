import { testHandlers } from './apiTest';
import { crewHandlers } from './crew';
import { gameHandlers } from './game';
import { memberHandlers } from './member';
import { otherHandlers } from './other';

export const handlers = [
  ...testHandlers,
  ...gameHandlers,
  ...crewHandlers,
  ...memberHandlers,
  ...otherHandlers,
];
