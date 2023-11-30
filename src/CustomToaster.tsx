import toaster, { ToastBar, Toaster, resolveValue } from 'react-hot-toast';

import { Flex } from '@components/shared/Flex';

export const CustomToaster = () => {
  return (
    <Toaster toastOptions={{ duration: 2000 }}>
      {(t) => (
        <ToastBar toast={t}>
          {(toast) => (
            <Flex align="center" onClick={() => toaster.dismiss(t.id)}>
              {toast.icon}
              {resolveValue(toast.message, toast)}
            </Flex>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};
