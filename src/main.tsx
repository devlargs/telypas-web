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
