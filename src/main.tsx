import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { ApolloProvider } from '@apollo/client';
import { MotionConfig } from 'framer-motion';
import '@fontsource-variable/fraunces/full.css';
import '@fontsource-variable/archivo/index.css';
import './styles/global.css';
import { apolloClient } from './lib/apollo';
import { router } from './router';
import { ToastProvider } from './components/Toast/ToastContext';

// A deploy replaces content-hashed chunks, so a tab loaded before the deploy
// 404s when it lazy-imports a route. Reload once to pick up the new build;
// the guard lets a persistent failure surface instead of reload-looping.
window.addEventListener('vite:preloadError', (event) => {
  const key = 'preload-error-reloaded-at';
  const lastReload = Number(sessionStorage.getItem(key) ?? 0);
  if (Date.now() - lastReload < 10_000) return;
  sessionStorage.setItem(key, String(Date.now()));
  event.preventDefault();
  window.location.reload();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <MotionConfig reducedMotion="user">
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </MotionConfig>
    </ApolloProvider>
  </StrictMode>,
);
