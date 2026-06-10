import type { ReactNode } from 'react';
import type { UserFullFragment } from '../../graphql/generated/graphql';
import { Avatar } from '../../components/Avatar/Avatar';
import styles from './ProfileHeader.module.css';

interface ProfileHeaderProps {
  user: UserFullFragment;
  actions?: ReactNode;
}

const STATS: Array<{ key: 'followers' | 'following' | 'activities' | 'saved'; label: string }> = [
  { key: 'followers', label: 'Followers' },
  { key: 'following', label: 'Following' },
  { key: 'activities', label: 'Activities' },
  { key: 'saved', label: 'Saved' },
];

export function ProfileHeader({ user, actions }: ProfileHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <Avatar name={user.name} image={user.image} size="xl" />
        <div className={styles.identity}>
          <h1 className={styles.name}>{user.name}</h1>
          <p className={styles.title}>{user.title || 'No title yet'}</p>
          {user.description && <p className={styles.description}>{user.description}</p>}
          {user.location && <p className={styles.location}>{user.location}</p>}
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      <dl className={styles.stats}>
        {STATS.map(({ key, label }) => (
          <div key={key} className={styles.stat}>
            <dt className={styles.statLabel}>{label}</dt>
            <dd className={styles.statValue}>{user[key]}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
