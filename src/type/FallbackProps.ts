import { FallbackProps as ReactErrorBoundaryFallbackProps } from 'react-error-boundary';

export type FallbackProps<T extends Error = Error> = { error: T } & Omit<
  ReactErrorBoundaryFallbackProps,
  'error'
>;
