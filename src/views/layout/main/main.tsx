import { Children } from '@/types';

export const Main = ({ children }: Children) => {
  return (
    <main className="flex h-[100dvh] items-center justify-center overflow-hidden bg-gradient-to-tr from-fuchsia-200 via-sky-200 to-green-200 p-4 text-primary lg:h-screen">
      {children}
    </main>
  );
};
