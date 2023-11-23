import { AxiosError } from 'axios';

import { CommonErrorResponse } from '@type/api/error';

export const isValidServerError = (
  error: Error
): error is AxiosError<CommonErrorResponse> => {
  if (error instanceof AxiosError) {
    const { response } = error;
    if (response?.data) {
      return 'code' in response.data;
    }
  }
  return false;
};
