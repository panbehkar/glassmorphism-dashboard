import { Toaster } from 'react-hot-toast';
import { Children } from '@/types';

export const Toast = ({ children }: Children) => (
  <>
    {children}
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 2500,
        className:
          '!bg-white/25 !rounded-2xl !shadow-[0_0_16px_-8px] !shadow-black/10 !backdrop-blur-lg',
        success: {
          icon: <i className="icon-check-circle text-2xl text-success"></i>,
        },
        error: {
          icon: <i className="icon-close-circle text-2xl text-error"></i>,
        },
      }}
    />
  </>
);
