import { Children } from '@/types';

export const Root = ({ children }: Children) => {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-slate-100 p-4 text-slate-800">
      {children}
    </main>
  );
};
