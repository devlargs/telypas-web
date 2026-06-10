import { graphql } from './generated';

export const MeQuery = graphql(`
  query Me {
    me {
      ...UserFull
    }
  }
`);

export const ProfileQuery = graphql(`
  query Profile($userId: ID!) {
    profile(userId: $userId) {
      ...UserFull
    }
  }
`);

export const SearchUsersQuery = graphql(`
  query SearchUsers($skill: String, $query: String) {
    searchUsers(skill: $skill, query: $query) {
      ...UserCard
    }
  }
`);

export const ConnectionsQuery = graphql(`
  query Connections {
    connections {
      ...UserCard
    }
  }
`);

export const ConnectionQuery = graphql(`
  query Connection($userId: ID!) {
    connection(userId: $userId) {
      ...UserFull
    }
  }
`);

export const SearchConnectionsQuery = graphql(`
  query SearchConnections($skill: String) {
    searchConnections(skill: $skill) {
      ...UserCard
    }
  }
`);

export const StreamChatTokenQuery = graphql(`
  query StreamChatToken {
    streamChatToken {
      token
      apiKey
      userId
    }
  }
`);
