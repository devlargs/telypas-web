import type { ButtonHTMLAttributes } from 'react';
import styles from './Tag.module.css';

interface TagProps {
  children: string;
  active?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
}

export function Tag({ children, active, onClick, onRemove }: TagProps) {
  if (onRemove) {
    return (
      <span className={`${styles.tag} ${styles.removable}`}>
        {children}
        <button
          type="button"
          className={styles.removeButton}
          onClick={onRemove}
          aria-label={`Remove ${children}`}
        >
          ×
        </button>
      </span>
    );
  }

  if (onClick) {
    const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
      type: 'button',
      onClick,
    };
    return (
      <button
        className={`${styles.tag} ${styles.interactive} ${active ? styles.active : ''}`}
        aria-pressed={active}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }

  return <span className={styles.tag}>{children}</span>;
}
