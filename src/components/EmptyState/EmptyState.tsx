import type { ReactNode } from 'react';
import styles from './EmptyState.module.css';

interface EmptyStateProps {
  headline: string;
  detail?: string;
  action?: ReactNode;
}

export function EmptyState({ headline, detail, action }: EmptyStateProps) {
  return (
    <div className={styles.empty}>
      <div className={styles.rule} aria-hidden="true" />
      <h2 className={styles.headline}>{headline}</h2>
      {detail && <p className={styles.detail}>{detail}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
