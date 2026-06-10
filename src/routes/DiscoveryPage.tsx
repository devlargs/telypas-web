import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { MeQuery } from '../graphql/queries';
import { useSearchUsers } from '../features/discovery/useSearchUsers';
import { useConnections } from '../features/network/useConnections';
import { SearchBar } from '../features/discovery/SearchBar';
import { PersonCard } from '../features/discovery/PersonCard';
import { EmptyState } from '../components/EmptyState/EmptyState';
import { Skeleton } from '../components/Skeleton/Skeleton';
import styles from './DiscoveryPage.module.css';

const DEFAULT_SKILLS = ['react', 'design', 'typescript', 'welding', 'carpentry', 'photography'];

export function DiscoveryPage() {
  const [query, setQuery] = useState('');
  const [skill, setSkill] = useState<string | null>(null);

  const { data: meData } = useQuery(MeQuery);
  const { idle, results, loading, error } = useSearchUsers(query, skill);
  const { connectedIds, connect } = useConnections();

  const myId = meData?.me.id;
  const mySkills = meData?.me.skills ?? [];
  const suggestedSkills = [...new Set([...mySkills, ...DEFAULT_SKILLS])].slice(0, 8);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <h1 className={styles.headline}>
          Find people by <em className={styles.accent}>what they do.</em>
        </h1>
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          skill={skill}
          onSkillChange={setSkill}
          suggestedSkills={suggestedSkills}
        />
      </header>

      <section className={styles.results} aria-live="polite" aria-busy={loading}>
        {idle ? (
          <EmptyState
            headline="Who are you looking for?"
            detail="Search by name or trade, or tap a skill above to start discovering people."
          />
        ) : loading && results.length === 0 ? (
          <div className={styles.grid}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className={styles.skeletonCard}>
                <div className={styles.skeletonTop}>
                  <Skeleton width="64px" height="64px" radius="6px" />
                  <div className={styles.skeletonLines}>
                    <Skeleton width="70%" height="1.2rem" />
                    <Skeleton width="50%" height="0.9rem" />
                  </div>
                </div>
                <Skeleton width="100%" height="0.9rem" />
                <Skeleton width="80%" height="0.9rem" />
              </div>
            ))}
          </div>
        ) : error ? (
          <EmptyState
            headline="The search tripped over something."
            detail="We could not reach the server. Check your connection and try again."
          />
        ) : results.length === 0 ? (
          <EmptyState
            headline="Nobody matches — yet."
            detail={
              skill
                ? `No one in the directory lists “${skill}”. Try a different skill or a broader search.`
                : 'Try a different name, title, or skill.'
            }
          />
        ) : (
          <>
            <p className={styles.count}>
              {results.length} {results.length === 1 ? 'person' : 'people'} found
            </p>
            <div className={styles.grid}>
              {results.map((user) => (
                <PersonCard
                  key={user.id}
                  user={user}
                  isConnected={connectedIds.has(user.id)}
                  isSelf={user.id === myId}
                  onConnect={connect}
                  onSkillClick={(s) => setSkill(s)}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
