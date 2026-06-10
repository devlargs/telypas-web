import { Link } from 'react-router';
import { EmptyState } from '../components/EmptyState/EmptyState';
import { Button } from '../components/Button/Button';

export function NotFoundPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10vh' }}>
      <EmptyState
        headline="This page wandered off."
        detail="The address you followed does not exist — or it moved without telling anyone."
        action={
          <Link to="/">
            <Button variant="primary">Back to Discovery</Button>
          </Link>
        }
      />
    </div>
  );
}
