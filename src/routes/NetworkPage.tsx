import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { useQuery } from '@apollo/client';
import type { UserCardFragment } from '../graphql/generated/graphql';
import { SearchConnectionsQuery } from '../graphql/queries';
import { useConnections } from '../features/network/useConnections';
import { useStartDM } from '../features/chat/useStartDM';
import { ConnectionRow } from '../features/network/ConnectionRow';
import { Tag } from '../components/Tag/Tag';
import { Button } from '../components/Button/Button';
import { Modal } from '../components/Modal/Modal';
import { EmptyState } from '../components/EmptyState/EmptyState';
import { Skeleton } from '../components/Skeleton/Skeleton';
import itemStyles from '../features/profile/itemSection.module.css';
import styles from './NetworkPage.module.css';

export function NetworkPage() {
  const { connections, loading, error, disconnect, removing } = useConnections();
  const { startDM, chatReady } = useStartDM();
  const [skill, setSkill] = useState<string | null>(null);
  const [removingUser, setRemovingUser] = useState<UserCardFragment | null>(null);

  const allSkills = useMemo(() => {
    const counts = new Map<string, number>();
    for (const c of connections) {
      for (const s of c.skills) counts.set(s, (counts.get(s) ?? 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([s]) => s);
  }, [connections]);

  // Server-side filter within the network; falls back to the full list when no skill is active.
  const { data: filteredData, loading: filtering } = useQuery(SearchConnectionsQuery, {
    variables: { skill },
    skip: !skill,
  });
  const visible = skill ? (filteredData?.searchConnections ?? []) : connections;

  async function confirmDisconnect() {
    if (!removingUser) return;
    await disconnect(removingUser.id);
    setRemovingUser(null);
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.headline}>Your network</h1>
        <p className={styles.count}>
          {connections.length} {connections.length === 1 ? 'connection' : 'connections'}
        </p>
      </header>

      {allSkills.length > 0 && (
        <div className={styles.chips} role="group" aria-label="Filter by skill">
          {allSkills.map((s) => (
            <Tag key={s} active={skill === s} onClick={() => setSkill(skill === s ? null : s)}>
              {s}
            </Tag>
          ))}
        </div>
      )}

      {(loading && connections.length === 0) || (skill && filtering && visible.length === 0) ? (
        <div className={styles.skeletons}>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className={styles.skeletonRow}>
              <Skeleton width="44px" height="44px" radius="6px" />
              <div className={styles.skeletonLines}>
                <Skeleton width="32%" height="1.1rem" />
                <Skeleton width="48%" height="0.9rem" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <EmptyState
          headline="Your network is unreachable."
          detail="We could not load your connections. Check the server and try again."
        />
      ) : connections.length === 0 ? (
        <EmptyState
          headline="Your network starts here."
          detail="Find people by skill or trade and build a network that means something."
          action={
            <Link to="/">
              <Button variant="primary">Discover people</Button>
            </Link>
          }
        />
      ) : visible.length === 0 ? (
        <EmptyState
          headline={`Nobody lists “${skill}”.`}
          detail="None of your connections have this skill — try another filter."
          action={
            <Button variant="ghost" onClick={() => setSkill(null)}>
              Clear filter
            </Button>
          }
        />
      ) : (
        <ul className={styles.list}>
          <AnimatePresence initial={false}>
            {visible.map((user) => (
              <ConnectionRow
                key={user.id}
                user={user}
                chatReady={chatReady}
                onMessage={startDM}
                onDisconnect={setRemovingUser}
                onSkillClick={(s) => setSkill(s)}
              />
            ))}
          </AnimatePresence>
        </ul>
      )}

      <Modal
        open={removingUser !== null}
        title="Remove connection"
        onClose={() => setRemovingUser(null)}
      >
        <p className={itemStyles.confirmText}>
          Remove <strong>{removingUser?.name}</strong> from your network? They will not be notified.
        </p>
        <div className={itemStyles.formActions}>
          <Button variant="ghost" onClick={() => setRemovingUser(null)}>
            Keep them
          </Button>
          <Button variant="danger" loading={removing} onClick={confirmDisconnect}>
            Disconnect
          </Button>
        </div>
      </Modal>
    </div>
  );
}
