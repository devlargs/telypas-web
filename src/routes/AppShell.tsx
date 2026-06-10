import { NavLink, Outlet, useNavigate } from 'react-router';
import { useQuery } from '@apollo/client';
import { authClient } from '../lib/auth-client';
import { apolloClient } from '../lib/apollo';
import { MeQuery } from '../graphql/queries';
import { Avatar } from '../components/Avatar/Avatar';
import { useChat } from '../features/chat/ChatProvider';
import styles from './AppShell.module.css';

export function AppShell() {
  const navigate = useNavigate();
  const { data } = useQuery(MeQuery);
  const { unreadCount } = useChat();
  const me = data?.me;

  async function handleSignOut() {
    await authClient.signOut();
    await apolloClient.clearStore();
    navigate('/login', { replace: true });
  }

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <NavLink to="/" className={styles.wordmark}>
            Telypas<span className={styles.wordmarkDot}>.</span>
          </NavLink>
          <nav className={styles.nav} aria-label="Primary">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              Discover
            </NavLink>
            <NavLink
              to="/network"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              Network
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              Messages
              {unreadCount > 0 && (
                <span className={styles.unreadDot} aria-label={`${unreadCount} unread`}>
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </NavLink>
          </nav>
          <div className={styles.actions}>
            <NavLink
              to="/me"
              className={({ isActive }) =>
                `${styles.profileLink} ${isActive ? styles.profileActive : ''}`
              }
              aria-label="My profile"
            >
              <Avatar name={me?.name ?? '?'} image={me?.image} size="sm" />
            </NavLink>
            <button type="button" className={styles.signOut} onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
