import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<string>;
  className?: string;
  errorMsg?: string;
  icon?: string;
}

export const Input = ({
  register,
  className,
  errorMsg,
  icon,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative flex items-center">
        {Boolean(icon) && (
          <i className={clsx('absolute left-4 text-xl', icon)} />
        )}
        <input
          className={clsx(
            'autofill:shadow-autofill w-full rounded-full bg-white px-4 py-2 outline-none ring-1 transition-shadow',
            {
              'pl-[42px]': Boolean(icon),
              'ring-red-500': Boolean(errorMsg),
              'ring-transparent focus:ring-blue-500': !Boolean(errorMsg),
            },
            className
          )}
          {...register}
          {...props}
        />
      </div>
      {Boolean(errorMsg) && (
        <span className="ml-2 mt-0.5 text-xs text-red-500">{errorMsg}</span>
      )}
    </div>
  );
};
