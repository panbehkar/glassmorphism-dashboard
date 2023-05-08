import { Root } from '@/views/layout';

export const Loading = () => (
  <Root>
    <div
      className="inline-block h-12 w-12 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-400"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </Root>
);
