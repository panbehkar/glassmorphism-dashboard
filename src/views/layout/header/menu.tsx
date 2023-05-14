import { useState } from 'react';
import { useAuthStore } from '@/store';
import { Dropdown } from '.';

export const HeaderMenu = () => {
  const { auth } = useAuthStore();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <ul className="inline-flex shrink-0 items-center">
      <li className="relative">
        <button
          className="relative flex items-center gap-2"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img
            src={auth?.image}
            alt="avatar"
            className="w-[35px] rounded-full bg-white/50 shadow-[0_0_16px_-8px] shadow-black/25"
          />
          <i className="icon-down text-xl"></i>
        </button>
        <Dropdown show={showDropdown} />
      </li>
    </ul>
  );
};
