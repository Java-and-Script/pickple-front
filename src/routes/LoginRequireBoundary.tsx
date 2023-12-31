import { PropsWithChildren, useEffect } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

import { PATH_NAME } from '@constants/pathName';

export class LoginRequireError extends Error {}

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  if (!(error instanceof LoginRequireError)) {
    throw error;
  }
  useEffect(() => {
    resetErrorBoundary();
    toast.error('로그인이 필요한 서비스입니다');
  });

  return <Navigate to={PATH_NAME.LOGIN} replace />;
};

export const LoginRequireBoundary = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  );
};
