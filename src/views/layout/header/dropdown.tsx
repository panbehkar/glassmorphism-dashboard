import { useTransition, animated } from '@react-spring/web';
import { useAuthStore } from '@/store';
import { toast } from '@/toast';

interface DropdownProps {
  show: boolean;
}

export const Dropdown = ({ show }: DropdownProps) => {
  const { auth, setAuth } = useAuthStore();
  const transition = useTransition(show, {
    from: {
      opacity: 0,
      transform: 'translateY(16px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(16px)',
    },
  });

  const handleLogout = () => {
    setAuth(null);
    toast.success('You have successfully logged out!');
  };

  return transition(
    (style, show) =>
      show && (
        <animated.ul
          className="absolute right-0 top-full z-40 mt-2 flex w-[200px] flex-col overflow-hidden rounded-2xl bg-white/30 shadow-[0_0_16px_-8px] shadow-black/20 backdrop-blur-lg"
          style={style}
        >
          <li className="relative mx-4 flex flex-col items-center gap-1 py-4">
            <h3>{auth?.name}</h3>
            <h6>{auth?.email}</h6>
            <span className="absolute bottom-0 w-full border-b border-slate-400"></span>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-4 py-2 transition-colors  hover:text-active"
            >
              <i className="icon-logout text-lg"></i>
              <span>Sign out</span>
            </button>
          </li>
        </animated.ul>
      )
  );
};
