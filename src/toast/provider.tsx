import { Toaster } from 'react-hot-toast';
import { Children } from '@/types';

export const Toast = ({ children }: Children) => (
  <>
    {children}
    <Toaster
      position="bottom-center"
      gutter={16}
      toastOptions={{
        duration: 2500,
        className: 'bg-white',
        success: {
          icon: <i className="icon-check-circle text-2xl text-green-400"></i>,
        },
        error: {
          icon: <i className="icon-close-circle text-2xl text-red-400"></i>,
        },
      }}
    />
  </>
);
