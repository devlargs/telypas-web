import { useState, type FormEvent } from 'react';
import type { UserFullFragment } from '../../graphql/generated/graphql';
import { SectionShell } from './SectionShell';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';
import { Field } from '../../components/Field/Field';
import { Input } from '../../components/Input/Input';
import { useProfileMutations } from './useProfileMutations';
import styles from './itemSection.module.css';

type EducationItem = UserFullFragment['education'][number];

export function EducationSection({ items }: { items: EducationItem[] }) {
  const { addEducation, updateEducation, removeEducation, savingEducation } = useProfileMutations();
  const [editorOpen, setEditorOpen] = useState(false);
  const [editing, setEditing] = useState<EducationItem | null>(null);
  const [removing, setRemoving] = useState<EducationItem | null>(null);
  const [removingBusy, setRemovingBusy] = useState(false);

  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [period, setPeriod] = useState('');

  function openAdd() {
    setEditing(null);
    setSchool('');
    setDegree('');
    setPeriod('');
    setEditorOpen(true);
  }

  function openEdit(item: EducationItem) {
    setEditing(item);
    setSchool(item.school);
    setDegree(item.degree);
    setPeriod(item.period);
    setEditorOpen(true);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = editing
      ? await updateEducation(editing.id, {
          school: school.trim(),
          degree: degree.trim(),
          period: period.trim(),
        })
      : await addEducation({
          school: school.trim(),
          degree: degree.trim(),
          period: period.trim() || null,
        });
    if (ok) setEditorOpen(false);
  }

  async function confirmRemove() {
    if (!removing) return;
    setRemovingBusy(true);
    await removeEducation(removing.id);
    setRemovingBusy(false);
    setRemoving(null);
  }

  return (
    <SectionShell
      title="Education"
      action={
        <Button size="sm" variant="ghost" onClick={openAdd}>
          + Add
        </Button>
      }
    >
      {items.length > 0 ? (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.itemBody}>
                <h3 className={styles.itemTitle}>{item.school}</h3>
                <p className={styles.itemSub}>{item.degree}</p>
                {item.period && <p className={styles.itemPeriod}>{item.period}</p>}
              </div>
              <div className={styles.itemActions}>
                <Button size="sm" variant="ghost" onClick={() => openEdit(item)}>
                  Edit
                </Button>
                <Button size="sm" variant="danger" onClick={() => setRemoving(item)}>
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.placeholder}>No education added yet.</p>
      )}

      <Modal
        open={editorOpen}
        title={editing ? 'Edit education' : 'Add education'}
        onClose={() => setEditorOpen(false)}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <Field label="School" htmlFor="edu-school" counter={{ current: school.length, max: 150 }}>
            <Input
              id="edu-school"
              required
              maxLength={150}
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </Field>
          <Field label="Degree" htmlFor="edu-degree" counter={{ current: degree.length, max: 150 }}>
            <Input
              id="edu-degree"
              required
              maxLength={150}
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </Field>
          <Field
            label="Period"
            htmlFor="edu-period"
            hint="e.g. 2015 — 2019"
            counter={{ current: period.length, max: 60 }}
          >
            <Input
              id="edu-period"
              maxLength={60}
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
          </Field>
          <div className={styles.formActions}>
            <Button type="button" variant="ghost" onClick={() => setEditorOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" loading={savingEducation}>
              {editing ? 'Save changes' : 'Add education'}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal open={removing !== null} title="Remove education" onClose={() => setRemoving(null)}>
        <p className={styles.confirmText}>
          Remove <strong>{removing?.degree}</strong> at <strong>{removing?.school}</strong> from
          your profile?
        </p>
        <div className={styles.formActions}>
          <Button variant="ghost" onClick={() => setRemoving(null)}>
            Keep it
          </Button>
          <Button variant="danger" loading={removingBusy} onClick={confirmRemove}>
            Remove
          </Button>
        </div>
      </Modal>
    </SectionShell>
  );
}
