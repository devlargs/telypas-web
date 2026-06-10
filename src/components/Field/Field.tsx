import type { ReactNode } from 'react';
import styles from './Field.module.css';

interface FieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  counter?: { current: number; max: number };
  children: ReactNode;
}

export function Field({ label, htmlFor, hint, error, counter, children }: FieldProps) {
  return (
    <div className={styles.field}>
      <div className={styles.labelRow}>
        <label className={styles.label} htmlFor={htmlFor}>
          {label}
        </label>
        {counter && (
          <span
            className={counter.current > counter.max ? styles.counterOver : styles.counter}
            aria-hidden="true"
          >
            {counter.current}/{counter.max}
          </span>
        )}
      </div>
      {children}
      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className={styles.hint}>{hint}</p>
      ) : null}
    </div>
  );
}
