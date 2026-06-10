import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { apolloClient } from '../../lib/apollo';
import { authEvents } from '../../lib/auth-events';
import { useToast } from '../../components/Toast/ToastContext';

const PUBLIC_PATHS = ['/login', '/signup', '/forgot-password', '/reset-password'];

export function SessionExpiryListener() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const locationRef = useRef(location);
  locationRef.current = location;

  useEffect(() => {
    return authEvents.on('unauthenticated', () => {
      const { pathname, search } = locationRef.current;
      if (PUBLIC_PATHS.includes(pathname)) return;
      void apolloClient.clearStore();
      toast('Your session expired — please sign in again.', 'error');
      navigate('/login', { replace: true, state: { from: pathname + search } });
    });
  }, [navigate, toast]);

  return null;
}
