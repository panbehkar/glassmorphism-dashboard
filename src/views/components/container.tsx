import { Children } from '@/types';

export const Container = ({ children }: Children) => (
  <section className="relative h-full" role="content">
    {children}
  </section>
);
