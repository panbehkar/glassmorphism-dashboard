import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    className={clsx(
      'h-fit min-w-[128px] whitespace-nowrap rounded-full bg-blue-500 px-4 py-2 text-center font-semibold text-white outline-none transition-shadow',
      `shadow-lg shadow-blue-500/40 hover:shadow-blue-500/50 focus:shadow-blue-500/50`,
      'disabled:cursor-default disabled:bg-slate-200 disabled:text-primary disabled:shadow-none',
      className
    )}
    {...props}
  >
    {children}
  </button>
);
