import styles from './SplashScreen.module.css';

export function SplashScreen() {
  return (
    <div className={styles.splash} role="status" aria-label="Loading Telypas">
      <span className={styles.wordmark}>
        Telypas<span className={styles.dot}>.</span>
      </span>
    </div>
  );
}
