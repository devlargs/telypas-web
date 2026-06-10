import { useState, type FormEvent } from 'react';
import type { UserFullFragment } from '../../graphql/generated/graphql';
import { Modal } from '../../components/Modal/Modal';
import { Field } from '../../components/Field/Field';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { useProfileMutations } from './useProfileMutations';
import styles from './itemSection.module.css';

interface EditIdentityModalProps {
  user: UserFullFragment;
  open: boolean;
  onClose: () => void;
}

export function EditIdentityModal({ user, open, onClose }: EditIdentityModalProps) {
  const { updateProfile, savingProfile } = useProfileMutations();
  const [name, setName] = useState(user.name);
  const [title, setTitle] = useState(user.title);
  const [description, setDescription] = useState(user.description);
  const [location, setLocation] = useState(user.location);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = await updateProfile({
      // Send only changed fields; never overwrite untouched ones with "".
      ...(name.trim() !== user.name && { name: name.trim() }),
      ...(title.trim() !== user.title && { title: title.trim() }),
      ...(description.trim() !== user.description && { description: description.trim() }),
      ...(location.trim() !== user.location && { location: location.trim() }),
    });
    if (ok) onClose();
  }

  return (
    <Modal open={open} title="Edit profile" onClose={onClose}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Field label="Name" htmlFor="id-name" counter={{ current: name.length, max: 120 }}>
          <Input
            id="id-name"
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field
          label="Title"
          htmlFor="id-title"
          hint="What you do, in a few words."
          counter={{ current: title.length, max: 120 }}
        >
          <Input
            id="id-title"
            maxLength={120}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Field>
        <Field
          label="Headline"
          htmlFor="id-description"
          hint="A short tagline shown on your card."
          counter={{ current: description.length, max: 200 }}
        >
          <Input
            id="id-description"
            maxLength={200}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Field>
        <Field
          label="Location"
          htmlFor="id-location"
          counter={{ current: location.length, max: 120 }}
        >
          <Input
            id="id-location"
            maxLength={120}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Field>
        <div className={styles.formActions}>
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" loading={savingProfile}>
            Save profile
          </Button>
        </div>
      </form>
    </Modal>
  );
}
