import { useState, type KeyboardEvent } from 'react';
import { SectionShell } from './SectionShell';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Tag } from '../../components/Tag/Tag';
import { useProfileMutations } from './useProfileMutations';
import styles from './SkillsEditor.module.css';

export function SkillsEditor({ skills }: { skills: string[] }) {
  const { updateSkills, savingSkills } = useProfileMutations();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<string[]>(skills);
  const [pending, setPending] = useState('');

  function startEditing() {
    setDraft(skills);
    setPending('');
    setEditing(true);
  }

  function addPending() {
    const skill = pending.trim().toLowerCase();
    if (skill && !draft.includes(skill)) {
      setDraft([...draft, skill]);
    }
    setPending('');
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addPending();
    } else if (e.key === 'Backspace' && !pending && draft.length > 0) {
      setDraft(draft.slice(0, -1));
    }
  }

  async function save() {
    const finalSkills = pending.trim()
      ? [...draft, pending.trim().toLowerCase()].filter((s, i, a) => a.indexOf(s) === i)
      : draft;
    const ok = await updateSkills(finalSkills);
    if (ok) setEditing(false);
  }

  return (
    <SectionShell
      title="Skills"
      action={
        !editing && (
          <Button size="sm" variant="ghost" onClick={startEditing}>
            Edit
          </Button>
        )
      }
    >
      {editing ? (
        <div className={styles.editor}>
          <div className={styles.tagInput}>
            {draft.map((skill) => (
              <Tag key={skill} onRemove={() => setDraft(draft.filter((s) => s !== skill))}>
                {skill}
              </Tag>
            ))}
            <Input
              className={styles.input}
              placeholder={draft.length === 0 ? 'Type a skill, press Enter…' : 'Add another…'}
              aria-label="Add a skill"
              value={pending}
              onChange={(e) => setPending(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={addPending}
              autoFocus
            />
          </div>
          <div className={styles.editorActions}>
            <Button size="sm" variant="primary" loading={savingSkills} onClick={save}>
              Save skills
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </div>
        </div>
      ) : skills.length > 0 ? (
        <ul className={styles.list} aria-label="Skills">
          {skills.map((skill) => (
            <li key={skill}>
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.placeholder}>No skills listed yet — they power discovery.</p>
      )}
    </SectionShell>
  );
}
