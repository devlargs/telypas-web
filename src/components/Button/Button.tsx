import { forwardRef, type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ink' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'ink', size = 'md', loading, disabled, children, className, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className ?? ''}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      <span className={loading ? styles.labelLoading : undefined}>{children}</span>
    </button>
  );
});
