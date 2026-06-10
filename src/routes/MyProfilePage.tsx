import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useQuery } from '@apollo/client';
import { MeQuery } from '../graphql/queries';
import { authClient } from '../lib/auth-client';
import { apolloClient } from '../lib/apollo';
import { ProfileHeader } from '../features/profile/ProfileHeader';
import { EditIdentityModal } from '../features/profile/EditIdentityModal';
import { AboutSection } from '../features/profile/AboutSection';
import { SkillsEditor } from '../features/profile/SkillsEditor';
import { ExperienceSection } from '../features/profile/ExperienceSection';
import { EducationSection } from '../features/profile/EducationSection';
import { CertificationsSection } from '../features/profile/CertificationsSection';
import { Button } from '../components/Button/Button';
import { EmptyState } from '../components/EmptyState/EmptyState';
import { ProfileSkeleton } from '../features/profile/ProfileSkeleton';
import styles from './profilePage.module.css';

export function MyProfilePage() {
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useQuery(MeQuery);
  const [editingIdentity, setEditingIdentity] = useState(false);

  if (loading && !data) return <ProfileSkeleton />;

  if (error || !data) {
    return (
      <EmptyState
        headline="Could not load your profile."
        detail="The server did not answer. Give it another go."
        action={<Button onClick={() => refetch()}>Retry</Button>}
      />
    );
  }

  const me = data.me;

  async function handleSignOut() {
    await authClient.signOut();
    await apolloClient.clearStore();
    navigate('/login', { replace: true });
  }

  return (
    <div className={styles.page}>
      <ProfileHeader
        user={me}
        actions={
          <Button size="sm" variant="ghost" onClick={() => setEditingIdentity(true)}>
            Edit profile
          </Button>
        }
      />
      <AboutSection about={me.about} />
      <SkillsEditor skills={me.skills} />
      <ExperienceSection items={me.experience} />
      <EducationSection items={me.education} />
      <CertificationsSection items={me.certifications} />

      <div className={styles.signOutRow}>
        <Button size="sm" variant="danger" onClick={handleSignOut}>
          Sign out
        </Button>
      </div>

      {editingIdentity && (
        <EditIdentityModal user={me} open onClose={() => setEditingIdentity(false)} />
      )}
    </div>
  );
}
