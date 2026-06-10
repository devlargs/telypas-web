import { useState, type FormEvent } from 'react';
import type { UserFullFragment } from '../../graphql/generated/graphql';
import { SectionShell } from './SectionShell';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';
import { Field } from '../../components/Field/Field';
import { Input } from '../../components/Input/Input';
import { Textarea } from '../../components/Textarea/Textarea';
import { useProfileMutations } from './useProfileMutations';
import styles from './itemSection.module.css';

type ExperienceItem = UserFullFragment['experience'][number];

export function ExperienceSection({ items }: { items: ExperienceItem[] }) {
  const { addExperience, updateExperience, removeExperience, savingExperience } =
    useProfileMutations();
  const [editorOpen, setEditorOpen] = useState(false);
  const [editing, setEditing] = useState<ExperienceItem | null>(null);
  const [removing, setRemoving] = useState<ExperienceItem | null>(null);
  const [removingBusy, setRemovingBusy] = useState(false);

  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [period, setPeriod] = useState('');
  const [description, setDescription] = useState('');

  function openAdd() {
    setEditing(null);
    setRole('');
    setCompany('');
    setPeriod('');
    setDescription('');
    setEditorOpen(true);
  }

  function openEdit(item: ExperienceItem) {
    setEditing(item);
    setRole(item.role);
    setCompany(item.company);
    setPeriod(item.period);
    setDescription(item.description);
    setEditorOpen(true);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = editing
      ? await updateExperience(editing.id, {
          role: role.trim(),
          company: company.trim(),
          period: period.trim(),
          description: description.trim(),
        })
      : await addExperience({
          role: role.trim(),
          company: company.trim(),
          period: period.trim() || null,
          description: description.trim() || null,
        });
    if (ok) setEditorOpen(false);
  }

  async function confirmRemove() {
    if (!removing) return;
    setRemovingBusy(true);
    await removeExperience(removing.id);
    setRemovingBusy(false);
    setRemoving(null);
  }

  return (
    <SectionShell
      title="Experience"
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
                <h3 className={styles.itemTitle}>{item.role}</h3>
                <p className={styles.itemSub}>{item.company}</p>
                {item.period && <p className={styles.itemPeriod}>{item.period}</p>}
                {item.description && <p className={styles.itemDescription}>{item.description}</p>}
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
        <p className={styles.placeholder}>No experience added yet.</p>
      )}

      <Modal
        open={editorOpen}
        title={editing ? 'Edit experience' : 'Add experience'}
        onClose={() => setEditorOpen(false)}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <Field label="Role" htmlFor="exp-role" counter={{ current: role.length, max: 120 }}>
            <Input
              id="exp-role"
              required
              maxLength={120}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Field>
          <Field
            label="Company"
            htmlFor="exp-company"
            counter={{ current: company.length, max: 120 }}
          >
            <Input
              id="exp-company"
              required
              maxLength={120}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Field>
          <Field
            label="Period"
            htmlFor="exp-period"
            hint="e.g. 2021 — present"
            counter={{ current: period.length, max: 60 }}
          >
            <Input
              id="exp-period"
              maxLength={60}
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
          </Field>
          <Field
            label="Description"
            htmlFor="exp-description"
            counter={{ current: description.length, max: 2000 }}
          >
            <Textarea
              id="exp-description"
              rows={4}
              maxLength={2000}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Field>
          <div className={styles.formActions}>
            <Button type="button" variant="ghost" onClick={() => setEditorOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" loading={savingExperience}>
              {editing ? 'Save changes' : 'Add experience'}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal open={removing !== null} title="Remove experience" onClose={() => setRemoving(null)}>
        <p className={styles.confirmText}>
          Remove <strong>{removing?.role}</strong> at <strong>{removing?.company}</strong> from your
          profile?
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
