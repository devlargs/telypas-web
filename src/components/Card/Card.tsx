import type { HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover, className, children, ...props }: CardProps) {
  return (
    <div className={`${styles.card} ${hover ? styles.hover : ''} ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
}
