import { useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ConnectionsQuery } from '../../graphql/queries';
import { AddConnectionMutation, RemoveConnectionMutation } from '../../graphql/mutations';
import { useToast } from '../../components/Toast/ToastContext';

export function useConnections() {
  const { data, loading, error } = useQuery(ConnectionsQuery);
  const { toast } = useToast();

  const connections = useMemo(() => data?.connections ?? [], [data]);
  const connectedIds = useMemo(() => new Set(connections.map((c) => c.id)), [connections]);

  const [addConnectionMutation, { loading: adding }] = useMutation(AddConnectionMutation, {
    update(cache, { data: result }) {
      const added = result?.addConnection;
      if (!added) return;
      cache.updateQuery({ query: ConnectionsQuery }, (existing) => {
        if (!existing) return existing;
        if (existing.connections.some((c) => c.id === added.id)) return existing;
        return { connections: [...existing.connections, added] };
      });
    },
  });

  const [removeConnectionMutation, { loading: removing }] = useMutation(RemoveConnectionMutation);

  async function connect(userId: string) {
    try {
      await addConnectionMutation({ variables: { userId } });
      toast('Added to your network.', 'success');
    } catch {
      toast('Could not add this connection. Try again.', 'error');
    }
  }

  async function disconnect(userId: string) {
    try {
      await removeConnectionMutation({
        variables: { userId },
        update(cache, { data: result }) {
          if (!result?.removeConnection) return;
          cache.updateQuery({ query: ConnectionsQuery }, (existing) => {
            if (!existing) return existing;
            return { connections: existing.connections.filter((c) => c.id !== userId) };
          });
        },
      });
      toast('Removed from your network.');
    } catch {
      toast('Could not remove this connection. Try again.', 'error');
    }
  }

  return {
    connections,
    connectedIds,
    loading,
    error,
    connect,
    disconnect,
    adding,
    removing,
  };
}
