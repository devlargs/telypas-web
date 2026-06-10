import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { SearchUsersQuery } from '../../graphql/queries';

export function useDebouncedValue<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

export function useSearchUsers(query: string, skill: string | null) {
  const debouncedQuery = useDebouncedValue(query.trim());

  // The API returns [] for empty searches — skip the round trip entirely.
  const idle = !debouncedQuery && !skill;

  const { data, loading, error, previousData } = useQuery(SearchUsersQuery, {
    variables: { query: debouncedQuery || null, skill: skill ?? null },
    skip: idle,
  });

  return {
    idle,
    results: (data ?? previousData)?.searchUsers ?? [],
    loading: loading || (query.trim() !== debouncedQuery && query.trim().length > 0),
    error,
  };
}
