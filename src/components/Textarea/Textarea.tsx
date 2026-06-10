import { forwardRef, type TextareaHTMLAttributes } from 'react';
import styles from './Textarea.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid, className, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={`${styles.textarea} ${invalid ? styles.invalid : ''} ${className ?? ''}`}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
});
