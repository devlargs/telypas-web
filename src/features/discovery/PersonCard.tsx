import { Link } from 'react-router';
import { motion } from 'framer-motion';
import type { UserCardFragment } from '../../graphql/generated/graphql';
import { Avatar } from '../../components/Avatar/Avatar';
import { Tag } from '../../components/Tag/Tag';
import { Button } from '../../components/Button/Button';
import { pluralize } from '../../lib/format';
import styles from './PersonCard.module.css';

interface PersonCardProps {
  user: UserCardFragment;
  isConnected: boolean;
  isSelf: boolean;
  onConnect: (userId: string) => void;
  onSkillClick?: (skill: string) => void;
}

export function PersonCard({
  user,
  isConnected,
  isSelf,
  onConnect,
  onSkillClick,
}: PersonCardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className={styles.top}>
        <Avatar name={user.name} image={user.image} size="lg" />
        <div className={styles.identity}>
          <h3 className={styles.name}>
            <Link to={isSelf ? '/me' : `/u/${user.id}`} className={styles.nameLink}>
              {user.name}
            </Link>
          </h3>
          <p className={styles.title}>{user.title || 'No title yet'}</p>
          {user.location && <p className={styles.location}>{user.location}</p>}
        </div>
      </div>
      {user.description && <p className={styles.description}>{user.description}</p>}
      {user.skills.length > 0 && (
        <ul className={styles.skills} aria-label="Skills">
          {user.skills.slice(0, 5).map((skill) => (
            <li key={skill}>
              <Tag onClick={onSkillClick ? () => onSkillClick(skill) : undefined}>{skill}</Tag>
            </li>
          ))}
          {user.skills.length > 5 && (
            <li className={styles.moreSkills}>+{user.skills.length - 5}</li>
          )}
        </ul>
      )}
      <footer className={styles.footer}>
        <span className={styles.followers}>{pluralize(user.followers, 'follower')}</span>
        {isSelf ? (
          <span className={styles.youBadge}>You</span>
        ) : isConnected ? (
          <span className={styles.connectedBadge}>In your network</span>
        ) : (
          <Button size="sm" variant="primary" onClick={() => onConnect(user.id)}>
            Connect
          </Button>
        )}
      </footer>
    </motion.article>
  );
}
