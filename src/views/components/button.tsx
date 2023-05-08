import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    className={clsx(
      'h-fit min-w-[128px] whitespace-nowrap rounded-full bg-blue-500 px-4 py-2 text-center font-semibold text-white outline-none',
      'disabled:cursor-default disabled:bg-slate-200 disabled:text-slate-800',
      className
    )}
    {...props}
  >
    {children}
  </button>
);
