import { useState } from 'react';
import { SectionShell } from './SectionShell';
import { Button } from '../../components/Button/Button';
import { Textarea } from '../../components/Textarea/Textarea';
import { Field } from '../../components/Field/Field';
import { useProfileMutations } from './useProfileMutations';
import styles from './AboutSection.module.css';

const ABOUT_MAX = 5000;

export function AboutSection({ about }: { about: string }) {
  const { updateProfile, savingProfile } = useProfileMutations();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(about);

  function startEditing() {
    setDraft(about);
    setEditing(true);
  }

  async function save() {
    const ok = await updateProfile({ about: draft.trim() });
    if (ok) setEditing(false);
  }

  return (
    <SectionShell
      title="About"
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
          <Field
            label="About you"
            htmlFor="about"
            counter={{ current: draft.length, max: ABOUT_MAX }}
          >
            <Textarea
              id="about"
              rows={6}
              maxLength={ABOUT_MAX}
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
          </Field>
          <div className={styles.editorActions}>
            <Button size="sm" variant="primary" loading={savingProfile} onClick={save}>
              Save
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </div>
        </div>
      ) : about ? (
        <p className={styles.text}>{about}</p>
      ) : (
        <p className={styles.placeholder}>
          Tell people what you do, what you have built, and what you are looking for.
        </p>
      )}
    </SectionShell>
  );
}
