import styles from './Avatar.module.css';
import { initials } from '../../lib/format';

interface AvatarProps {
  name: string;
  image?: string | null;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Avatar({ name, image, size = 'md' }: AvatarProps) {
  return (
    <span className={`${styles.avatar} ${styles[size]}`} role="img" aria-label={name}>
      {image ? (
        <img className={styles.image} src={image} alt="" />
      ) : (
        <span aria-hidden="true">{initials(name)}</span>
      )}
    </span>
  );
}
