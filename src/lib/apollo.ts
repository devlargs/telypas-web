import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { env } from './env';
import { authEvents } from './auth-events';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  const unauthenticated =
    graphQLErrors?.some((e) => e.extensions?.code === 'UNAUTHENTICATED') ||
    (networkError != null && 'statusCode' in networkError && networkError.statusCode === 401);
  if (unauthenticated) {
    authEvents.emit('unauthenticated');
  }
});

const httpLink = new HttpLink({
  uri: `${env.apiBase}/graphql`,
  credentials: 'include',
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
