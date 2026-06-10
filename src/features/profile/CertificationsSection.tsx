import { useState, type FormEvent } from 'react';
import type { UserFullFragment } from '../../graphql/generated/graphql';
import { SectionShell } from './SectionShell';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';
import { Field } from '../../components/Field/Field';
import { Input } from '../../components/Input/Input';
import { useProfileMutations } from './useProfileMutations';
import styles from './itemSection.module.css';

type CertificationItem = UserFullFragment['certifications'][number];

export function CertificationsSection({ items }: { items: CertificationItem[] }) {
  const { addCertification, updateCertification, removeCertification, savingCertification } =
    useProfileMutations();
  const [editorOpen, setEditorOpen] = useState(false);
  const [editing, setEditing] = useState<CertificationItem | null>(null);
  const [removing, setRemoving] = useState<CertificationItem | null>(null);
  const [removingBusy, setRemovingBusy] = useState(false);

  const [name, setName] = useState('');
  const [issuer, setIssuer] = useState('');
  const [date, setDate] = useState('');

  function openAdd() {
    setEditing(null);
    setName('');
    setIssuer('');
    setDate('');
    setEditorOpen(true);
  }

  function openEdit(item: CertificationItem) {
    setEditing(item);
    setName(item.name);
    setIssuer(item.issuer);
    setDate(item.date);
    setEditorOpen(true);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = editing
      ? await updateCertification(editing.id, {
          name: name.trim(),
          issuer: issuer.trim(),
          date: date.trim(),
        })
      : await addCertification({
          name: name.trim(),
          issuer: issuer.trim(),
          date: date.trim() || null,
        });
    if (ok) setEditorOpen(false);
  }

  async function confirmRemove() {
    if (!removing) return;
    setRemovingBusy(true);
    await removeCertification(removing.id);
    setRemovingBusy(false);
    setRemoving(null);
  }

  return (
    <SectionShell
      title="Certifications"
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
                <h3 className={styles.itemTitle}>{item.name}</h3>
                <p className={styles.itemSub}>{item.issuer}</p>
                {item.date && <p className={styles.itemPeriod}>{item.date}</p>}
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
        <p className={styles.placeholder}>No certifications added yet.</p>
      )}

      <Modal
        open={editorOpen}
        title={editing ? 'Edit certification' : 'Add certification'}
        onClose={() => setEditorOpen(false)}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <Field label="Name" htmlFor="cert-name" counter={{ current: name.length, max: 150 }}>
            <Input
              id="cert-name"
              required
              maxLength={150}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Field>
          <Field
            label="Issuer"
            htmlFor="cert-issuer"
            counter={{ current: issuer.length, max: 150 }}
          >
            <Input
              id="cert-issuer"
              required
              maxLength={150}
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
            />
          </Field>
          <Field
            label="Date"
            htmlFor="cert-date"
            hint="e.g. March 2024"
            counter={{ current: date.length, max: 60 }}
          >
            <Input
              id="cert-date"
              maxLength={60}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Field>
          <div className={styles.formActions}>
            <Button type="button" variant="ghost" onClick={() => setEditorOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" loading={savingCertification}>
              {editing ? 'Save changes' : 'Add certification'}
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        open={removing !== null}
        title="Remove certification"
        onClose={() => setRemoving(null)}
      >
        <p className={styles.confirmText}>
          Remove <strong>{removing?.name}</strong> from your profile?
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
