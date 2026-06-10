import { Navigate, useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { MeQuery, ProfileQuery } from '../graphql/queries';
import { useConnections } from '../features/network/useConnections';
import { useStartDM } from '../features/chat/useStartDM';
import { ProfileHeader } from '../features/profile/ProfileHeader';
import { SectionShell } from '../features/profile/SectionShell';
import { ProfileSkeleton } from '../features/profile/ProfileSkeleton';
import { Button } from '../components/Button/Button';
import { Tag } from '../components/Tag/Tag';
import { EmptyState } from '../components/EmptyState/EmptyState';
import itemStyles from '../features/profile/itemSection.module.css';
import pageStyles from './profilePage.module.css';

export function UserProfilePage() {
  const { userId } = useParams<{ userId: string }>();
  const { data: meData } = useQuery(MeQuery);
  const { data, loading, error } = useQuery(ProfileQuery, {
    variables: { userId: userId! },
    skip: !userId,
  });
  const { connectedIds, connect, disconnect, adding, removing } = useConnections();
  const { startDM, starting, chatReady } = useStartDM();

  if (!userId) return <Navigate to="/" replace />;
  if (meData?.me.id === userId) return <Navigate to="/me" replace />;

  if (loading && !data) return <ProfileSkeleton />;

  if (error || !data) {
    return (
      <EmptyState
        headline="This profile is out of reach."
        detail="It may not exist, or the server is not answering right now."
      />
    );
  }

  const user = data.profile;
  const isConnected = connectedIds.has(user.id);

  return (
    <div className={pageStyles.page}>
      <ProfileHeader
        user={user}
        actions={
          <>
            {isConnected ? (
              <>
                <Button
                  size="sm"
                  variant="primary"
                  loading={starting}
                  disabled={!chatReady}
                  onClick={() => startDM(user.id)}
                >
                  Message
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  loading={removing}
                  onClick={() => disconnect(user.id)}
                >
                  Disconnect
                </Button>
              </>
            ) : (
              <Button size="sm" variant="primary" loading={adding} onClick={() => connect(user.id)}>
                Connect
              </Button>
            )}
          </>
        }
      />

      <SectionShell title="About">
        {user.about ? (
          <p className={itemStyles.itemDescription} style={{ marginTop: 0 }}>
            {user.about}
          </p>
        ) : (
          <p className={itemStyles.placeholder}>Nothing here yet.</p>
        )}
      </SectionShell>

      <SectionShell title="Skills">
        {user.skills.length > 0 ? (
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-2)',
              listStyle: 'none',
              padding: 0,
            }}
            aria-label="Skills"
          >
            {user.skills.map((skill) => (
              <li key={skill}>
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        ) : (
          <p className={itemStyles.placeholder}>No skills listed.</p>
        )}
      </SectionShell>

      <SectionShell title="Experience">
        {user.experience.length > 0 ? (
          <ul className={itemStyles.list}>
            {user.experience.map((item) => (
              <li key={item.id} className={itemStyles.item}>
                <div className={itemStyles.itemBody}>
                  <h3 className={itemStyles.itemTitle}>{item.role}</h3>
                  <p className={itemStyles.itemSub}>{item.company}</p>
                  {item.period && <p className={itemStyles.itemPeriod}>{item.period}</p>}
                  {item.description && (
                    <p className={itemStyles.itemDescription}>{item.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={itemStyles.placeholder}>No experience listed.</p>
        )}
      </SectionShell>

      <SectionShell title="Education">
        {user.education.length > 0 ? (
          <ul className={itemStyles.list}>
            {user.education.map((item) => (
              <li key={item.id} className={itemStyles.item}>
                <div className={itemStyles.itemBody}>
                  <h3 className={itemStyles.itemTitle}>{item.school}</h3>
                  <p className={itemStyles.itemSub}>{item.degree}</p>
                  {item.period && <p className={itemStyles.itemPeriod}>{item.period}</p>}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={itemStyles.placeholder}>No education listed.</p>
        )}
      </SectionShell>

      <SectionShell title="Certifications">
        {user.certifications.length > 0 ? (
          <ul className={itemStyles.list}>
            {user.certifications.map((item) => (
              <li key={item.id} className={itemStyles.item}>
                <div className={itemStyles.itemBody}>
                  <h3 className={itemStyles.itemTitle}>{item.name}</h3>
                  <p className={itemStyles.itemSub}>{item.issuer}</p>
                  {item.date && <p className={itemStyles.itemPeriod}>{item.date}</p>}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={itemStyles.placeholder}>No certifications listed.</p>
        )}
      </SectionShell>
    </div>
  );
}
