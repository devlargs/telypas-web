import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router';
import { AuthLayout } from './features/auth/AuthLayout';
import { RequireAuth } from './features/auth/RequireAuth';
import { RedirectIfAuthed } from './features/auth/RedirectIfAuthed';
import { SessionExpiryListener } from './features/auth/SessionExpiryListener';
import { AppShell } from './routes/AppShell';
import { LoginPage } from './routes/LoginPage';
import { SignUpPage } from './routes/SignUpPage';
import { ForgotPasswordPage } from './routes/ForgotPasswordPage';
import { ResetPasswordPage } from './routes/ResetPasswordPage';
import { DiscoveryPage } from './routes/DiscoveryPage';
import { MyProfilePage } from './routes/MyProfilePage';
import { UserProfilePage } from './routes/UserProfilePage';
import { NetworkPage } from './routes/NetworkPage';
import { NotFoundPage } from './routes/NotFoundPage';
import { ChatProvider } from './features/chat/ChatProvider';
import { SplashScreen } from './features/auth/SplashScreen';

// stream-chat-react is heavy — keep it out of the main bundle.
const MessagesPage = lazy(() =>
  import('./routes/MessagesPage').then((m) => ({ default: m.MessagesPage })),
);

function Root() {
  return (
    <>
      <SessionExpiryListener />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        element: <RedirectIfAuthed />,
        children: [
          {
            path: '/login',
            element: (
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            ),
          },
          {
            path: '/signup',
            element: (
              <AuthLayout>
                <SignUpPage />
              </AuthLayout>
            ),
          },
          {
            path: '/forgot-password',
            element: (
              <AuthLayout>
                <ForgotPasswordPage />
              </AuthLayout>
            ),
          },
        ],
      },
      {
        path: '/reset-password',
        element: (
          <AuthLayout>
            <ResetPasswordPage />
          </AuthLayout>
        ),
      },
      {
        element: (
          <RequireAuth>
            <ChatProvider>
              <AppShell />
            </ChatProvider>
          </RequireAuth>
        ),
        children: [
          { path: '/', element: <DiscoveryPage /> },
          { path: '/me', element: <MyProfilePage /> },
          { path: '/u/:userId', element: <UserProfilePage /> },
          { path: '/network', element: <NetworkPage /> },
          {
            path: '/messages',
            element: (
              <Suspense fallback={<SplashScreen />}>
                <MessagesPage />
              </Suspense>
            ),
          },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
