import { useSidebarStore } from '@/store';

export const SidebarToggler = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  return (
    <button
      className="absolute -left-4 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-green-400 text-xl outline-none"
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
