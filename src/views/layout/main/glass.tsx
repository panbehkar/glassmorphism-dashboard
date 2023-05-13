import { Children, ClassName } from '@/types';
import clsx from 'clsx';

export const Glass = ({ children, className }: Children & ClassName) => (
  <div
    className={clsx(
      'relative z-0 flex max-w-screen-xl',
      'before:absolute before:inset-0 before:-z-10 before:rounded-primary before:border before:border-solid before:border-white/20 before:bg-white/25 before:shadow-[0_0_16px_-8px] before:shadow-black/10 before:backdrop-blur',
      className
    )}
  >
    {children}
  </div>
);
