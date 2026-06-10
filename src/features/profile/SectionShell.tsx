import type { ReactNode } from 'react';
import styles from './SectionShell.module.css';

interface SectionShellProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export function SectionShell({ title, action, children }: SectionShellProps) {
  return (
    <section className={styles.section} aria-label={title}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {action}
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
