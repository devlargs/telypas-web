const apiBase = import.meta.env.VITE_API_BASE;

if (!apiBase) {
  throw new Error(
    'VITE_API_BASE is not set — copy .env.example to .env and restart the dev server',
  );
}

export const env = {
  apiBase: apiBase.replace(/\/$/, ''),
} as const;
