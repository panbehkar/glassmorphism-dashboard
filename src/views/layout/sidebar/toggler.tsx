import { useSidebarStore } from '@/store';

export const SidebarToggler = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  return (
    <button
      className="absolute -left-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-inherit text-xl shadow-[0_0_16px_-8px] shadow-black/10 outline-none backdrop-blur transition hover:bg-white/60 hover:text-active sm:inline-flex sm:items-center sm:justify-center"
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? (
        <i className="icon-left-circle"></i>
      ) : (
        <i className="icon-right-circle"></i>
      )}
    </button>
  );
};
