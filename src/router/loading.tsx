export const Loading = () => (
  <main className="flex h-[100dvh] items-center justify-center bg-gradient-to-tr from-fuchsia-200 via-sky-200 to-green-200 lg:h-screen">
    <div
      className="inline-block h-12 w-12 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-500"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </main>
);
