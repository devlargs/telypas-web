import type { ReactNode } from 'react';
import styles from './AuthLayout.module.css';

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.brand}>
        <p className={styles.wordmark}>Telypas.</p>
        <h1 className={styles.statement}>
          Find people by <span className={styles.accent}>what they do</span>, not who they know.
        </h1>
        <p className={styles.tagline}>
          Profiles with substance. A network you actually built. Conversations that go somewhere.
        </p>
        <div className={styles.marquee} aria-hidden="true">
          <span>
            welding · react · carpentry · design · plumbing · typescript · photography · masonry ·
            illustration · devops · joinery · copywriting ·&nbsp;
          </span>
          <span>
            welding · react · carpentry · design · plumbing · typescript · photography · masonry ·
            illustration · devops · joinery · copywriting ·&nbsp;
          </span>
        </div>
      </aside>
      <main className={styles.formPanel}>
        <div className={styles.formInner}>{children}</div>
      </main>
    </div>
  );
}
