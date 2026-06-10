import { Input } from '../../components/Input/Input';
import { Tag } from '../../components/Tag/Tag';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  skill: string | null;
  onSkillChange: (skill: string | null) => void;
  suggestedSkills: string[];
}

export function SearchBar({
  query,
  onQueryChange,
  skill,
  onSkillChange,
  suggestedSkills,
}: SearchBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.inputWrap}>
        <Input
          type="search"
          placeholder="Search by name, title, or trade…"
          aria-label="Search people"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
      <div className={styles.chips} role="group" aria-label="Filter by skill">
        {skill && !suggestedSkills.includes(skill) && (
          <Tag active onClick={() => onSkillChange(null)}>
            {skill}
          </Tag>
        )}
        {suggestedSkills.map((s) => (
          <Tag key={s} active={skill === s} onClick={() => onSkillChange(skill === s ? null : s)}>
            {s}
          </Tag>
        ))}
      </div>
    </div>
  );
}
