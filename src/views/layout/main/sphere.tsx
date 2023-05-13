import { ClassName } from '@/types';
import clsx from 'clsx';

interface SphereProps extends ClassName {
  variant: 'primary' | 'secondary';
}

export const Sphere = ({ className, variant }: SphereProps) => (
  <span
    className={clsx(
      'absolute -z-20 rounded-full shadow-[inset_-20px_-20px_30px]',
      {
        'h-[180px] w-[180px] bg-sky-300 shadow-sky-400': variant === 'primary',
        'h-[150px] w-[150px] bg-fuchsia-300 shadow-fuchsia-400':
          variant === 'secondary',
      },
      className
    )}
  ></span>
);
