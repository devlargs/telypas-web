import { Navigate, Outlet } from 'react-router';
import { useSession } from '../../lib/auth-client';
import { SplashScreen } from './SplashScreen';

export function RedirectIfAuthed() {
  const { data: session, isPending } = useSession();

  if (isPending) return <SplashScreen />;
  if (session) return <Navigate to="/" replace />;

  return <Outlet />;
}
