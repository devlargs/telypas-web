import { Link } from 'react-router';
import { motion } from 'framer-motion';
import type { UserCardFragment } from '../../graphql/generated/graphql';
import { Avatar } from '../../components/Avatar/Avatar';
import { Tag } from '../../components/Tag/Tag';
import { Button } from '../../components/Button/Button';
import styles from './ConnectionRow.module.css';

interface ConnectionRowProps {
  user: UserCardFragment;
  chatReady: boolean;
  onMessage: (userId: string) => void;
  onDisconnect: (user: UserCardFragment) => void;
  onSkillClick?: (skill: string) => void;
}

export function ConnectionRow({
  user,
  chatReady,
  onMessage,
  onDisconnect,
  onSkillClick,
}: ConnectionRowProps) {
  return (
    <motion.li
      className={styles.row}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link to={`/u/${user.id}`} className={styles.identity}>
        <Avatar name={user.name} image={user.image} size="md" />
        <span className={styles.text}>
          <span className={styles.name}>{user.name}</span>
          <span className={styles.title}>{user.title || 'No title yet'}</span>
        </span>
      </Link>
      <ul className={styles.skills} aria-label={`${user.name}'s skills`}>
        {user.skills.slice(0, 4).map((skill) => (
          <li key={skill}>
            <Tag onClick={onSkillClick ? () => onSkillClick(skill) : undefined}>{skill}</Tag>
          </li>
        ))}
        {user.skills.length > 4 && <li className={styles.more}>+{user.skills.length - 4}</li>}
      </ul>
      <div className={styles.actions}>
        <Button
          size="sm"
          variant="primary"
          disabled={!chatReady}
          onClick={() => onMessage(user.id)}
        >
          Message
        </Button>
        <Button size="sm" variant="ghost" onClick={() => onDisconnect(user)}>
          Disconnect
        </Button>
      </div>
    </motion.li>
  );
}
