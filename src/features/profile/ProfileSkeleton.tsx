import { Skeleton } from '../../components/Skeleton/Skeleton';

export function ProfileSkeleton() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 880 }}
      aria-busy="true"
      aria-label="Loading profile"
    >
      <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
        <Skeleton width="104px" height="104px" radius="6px" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Skeleton width="40%" height="2.4rem" />
          <Skeleton width="30%" height="1.2rem" />
          <Skeleton width="20%" height="0.9rem" />
        </div>
      </div>
      <Skeleton width="min(560px, 100%)" height="72px" radius="6px" />
      <Skeleton width="100%" height="1rem" />
      <Skeleton width="90%" height="1rem" />
      <Skeleton width="60%" height="1rem" />
    </div>
  );
}
