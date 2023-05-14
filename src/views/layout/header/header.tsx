import { HeaderMenu } from '.';
import logoSrc from '@/assets/images/logo.svg';

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4" role="header">
      <img className="w-10 sm:hidden" src={logoSrc} alt="logo" />
      <h5 className="w-full">Header</h5>
      <HeaderMenu />
    </header>
  );
};
