/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  fragment UserCard on User {\n    id\n    name\n    email\n    image\n    title\n    description\n    location\n    skills\n    followers\n    following\n  }\n': typeof types.UserCardFragmentDoc;
  '\n  fragment UserFull on User {\n    id\n    name\n    email\n    image\n    title\n    description\n    location\n    about\n    skills\n    followers\n    following\n    activities\n    saved\n    experience {\n      id\n      role\n      company\n      period\n      description\n    }\n    education {\n      id\n      school\n      degree\n      period\n    }\n    certifications {\n      id\n      name\n      issuer\n      date\n    }\n  }\n': typeof types.UserFullFragmentDoc;
  '\n  mutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(input: $input) {\n      ...UserFull\n    }\n  }\n': typeof types.UpdateProfileDocument;
  '\n  mutation UpdateSkills($skills: [String!]!) {\n    updateSkills(skills: $skills) {\n      ...UserFull\n    }\n  }\n': typeof types.UpdateSkillsDocument;
  '\n  mutation AddExperience($input: AddExperienceInput!) {\n    addExperience(input: $input) {\n      ...UserFull\n    }\n  }\n': typeof types.AddExperienceDocument;
  '\n  mutation UpdateExperience($id: ID!, $input: UpdateExperienceInput!) {\n    updateExperience(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n': typeof types.UpdateExperienceDocument;
  '\n  mutation RemoveExperience($id: ID!) {\n    removeExperience(id: $id) {\n      ...UserFull\n    }\n  }\n': typeof types.RemoveExperienceDocument;
  '\n  mutation AddEducation($input: AddEducationInput!) {\n    addEducation(input: $input) {\n      ...UserFull\n    }\n  }\n': typeof types.AddEducationDocument;
  '\n  mutation UpdateEducation($id: ID!, $input: UpdateEducationInput!) {\n    updateEducation(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n': typeof types.UpdateEducationDocument;
  '\n  mutation RemoveEducation($id: ID!) {\n    removeEducation(id: $id) {\n      ...UserFull\n    }\n  }\n': typeof types.RemoveEducationDocument;
  '\n  mutation AddCertification($input: AddCertificationInput!) {\n    addCertification(input: $input) {\n      ...UserFull\n    }\n  }\n': typeof types.AddCertificationDocument;
  '\n  mutation UpdateCertification($id: ID!, $input: UpdateCertificationInput!) {\n    updateCertification(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n': typeof types.UpdateCertificationDocument;
  '\n  mutation RemoveCertification($id: ID!) {\n    removeCertification(id: $id) {\n      ...UserFull\n    }\n  }\n': typeof types.RemoveCertificationDocument;
  '\n  mutation AddConnection($userId: ID!) {\n    addConnection(userId: $userId) {\n      ...UserCard\n    }\n  }\n': typeof types.AddConnectionDocument;
  '\n  mutation RemoveConnection($userId: ID!) {\n    removeConnection(userId: $userId)\n  }\n': typeof types.RemoveConnectionDocument;
  '\n  query Me {\n    me {\n      ...UserFull\n    }\n  }\n': typeof types.MeDocument;
  '\n  query Profile($userId: ID!) {\n    profile(userId: $userId) {\n      ...UserFull\n    }\n  }\n': typeof types.ProfileDocument;
  '\n  query SearchUsers($skill: String, $query: String) {\n    searchUsers(skill: $skill, query: $query) {\n      ...UserCard\n    }\n  }\n': typeof types.SearchUsersDocument;
  '\n  query Connections {\n    connections {\n      ...UserCard\n    }\n  }\n': typeof types.ConnectionsDocument;
  '\n  query Connection($userId: ID!) {\n    connection(userId: $userId) {\n      ...UserFull\n    }\n  }\n': typeof types.ConnectionDocument;
  '\n  query SearchConnections($skill: String) {\n    searchConnections(skill: $skill) {\n      ...UserCard\n    }\n  }\n': typeof types.SearchConnectionsDocument;
  '\n  query StreamChatToken {\n    streamChatToken {\n      token\n      apiKey\n      userId\n    }\n  }\n': typeof types.StreamChatTokenDocument;
};
const documents: Documents = {
  '\n  fragment UserCard on User {\n    id\n    name\n    email\n    image\n    title\n    description\n    location\n    skills\n    followers\n    following\n  }\n':
    types.UserCardFragmentDoc,
  '\n  fragment UserFull on User {\n    id\n    name\n    email\n    image\n    title\n    description\n    location\n    about\n    skills\n    followers\n    following\n    activities\n    saved\n    experience {\n      id\n      role\n      company\n      period\n      description\n    }\n    education {\n      id\n      school\n      degree\n      period\n    }\n    certifications {\n      id\n      name\n      issuer\n      date\n    }\n  }\n':
    types.UserFullFragmentDoc,
  '\n  mutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(input: $input) {\n      ...UserFull\n    }\n  }\n':
    types.UpdateProfileDocument,
  '\n  mutation UpdateSkills($skills: [String!]!) {\n    updateSkills(skills: $skills) {\n      ...UserFull\n    }\n  }\n':
    types.UpdateSkillsDocument,
  '\n  mutation AddExperience($input: AddExperienceInput!) {\n    addExperience(input: $input) {\n      ...UserFull\n    }\n  }\n':
    types.AddExperienceDocument,
  '\n  mutation UpdateExperience($id: ID!, $input: UpdateExperienceInput!) {\n    updateExperience(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n':
    types.UpdateExperienceDocument,
  '\n  mutation RemoveExperience($id: ID!) {\n    removeExperience(id: $id) {\n      ...UserFull\n    }\n  }\n':
    types.RemoveExperienceDocument,
  '\n  mutation AddEducation($input: AddEducationInput!) {\n    addEducation(input: $input) {\n      ...UserFull\n    }\n  }\n':
    types.AddEducationDocument,
  '\n  mutation UpdateEducation($id: ID!, $input: UpdateEducationInput!) {\n    updateEducation(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n':
    types.UpdateEducationDocument,
  '\n  mutation RemoveEducation($id: ID!) {\n    removeEducation(id: $id) {\n      ...UserFull\n    }\n  }\n':
    types.RemoveEducationDocument,
  '\n  mutation AddCertification($input: AddCertificationInput!) {\n    addCertification(input: $input) {\n      ...UserFull\n    }\n  }\n':
    types.AddCertificationDocument,
  '\n  mutation UpdateCertification($id: ID!, $input: UpdateCertificationInput!) {\n    updateCertification(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n':
    types.UpdateCertificationDocument,
  '\n  mutation RemoveCertification($id: ID!) {\n    removeCertification(id: $id) {\n      ...UserFull\n    }\n  }\n':
    types.RemoveCertificationDocument,
  '\n  mutation AddConnection($userId: ID!) {\n    addConnection(userId: $userId) {\n      ...UserCard\n    }\n  }\n':
    types.AddConnectionDocument,
  '\n  mutation RemoveConnection($userId: ID!) {\n    removeConnection(userId: $userId)\n  }\n':
    types.RemoveConnectionDocument,
  '\n  query Me {\n    me {\n      ...UserFull\n    }\n  }\n': types.MeDocument,
  '\n  query Profile($userId: ID!) {\n    profile(userId: $userId) {\n      ...UserFull\n    }\n  }\n':
    types.ProfileDocument,
  '\n  query SearchUsers($skill: String, $query: String) {\n    searchUsers(skill: $skill, query: $query) {\n      ...UserCard\n    }\n  }\n':
    types.SearchUsersDocument,
  '\n  query Connections {\n    connections {\n      ...UserCard\n    }\n  }\n':
    types.ConnectionsDocument,
  '\n  query Connection($userId: ID!) {\n    connection(userId: $userId) {\n      ...UserFull\n    }\n  }\n':
    types.ConnectionDocument,
  '\n  query SearchConnections($skill: String) {\n    searchConnections(skill: $skill) {\n      ...UserCard\n    }\n  }\n':
    types.SearchConnectionsDocument,
  '\n  query StreamChatToken {\n    streamChatToken {\n      token\n      apiKey\n      userId\n    }\n  }\n':
    types.StreamChatTokenDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment UserCard on User {\n    id\n    name\n    email\n    image\n    title\n    description\n    location\n    skills\n    followers\n    following\n  }\n',
): (typeof documents)['\n  fragment UserCard on User {\n    id\n    name\n    email\n    image\n    title\n    description\n    location\n    skills\n    followers\n    following\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment UserFull on User {\n    id\n    name\n    email\n    image\n    title\n    description\n    location\n    about\n    skills\n    followers\n    following\n    activities\n    saved\n    experience {\n      id\n      role\n      company\n      period\n      description\n    }\n    education {\n      id\n      school\n      degree\n      period\n    }\n    certifications {\n      id\n      name\n      issuer\n      date\n    }\n  }\n',
): (typeof documents)['\n  fragment UserFull on User {\n    id\n    name\n    email\n    image\n    title\n    description\n    location\n    about\n    skills\n    followers\n    following\n    activities\n    saved\n    experience {\n      id\n      role\n      company\n      period\n      description\n    }\n    education {\n      id\n      school\n      degree\n      period\n    }\n    certifications {\n      id\n      name\n      issuer\n      date\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(input: $input) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(input: $input) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateSkills($skills: [String!]!) {\n    updateSkills(skills: $skills) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateSkills($skills: [String!]!) {\n    updateSkills(skills: $skills) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddExperience($input: AddExperienceInput!) {\n    addExperience(input: $input) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation AddExperience($input: AddExperienceInput!) {\n    addExperience(input: $input) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateExperience($id: ID!, $input: UpdateExperienceInput!) {\n    updateExperience(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateExperience($id: ID!, $input: UpdateExperienceInput!) {\n    updateExperience(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RemoveExperience($id: ID!) {\n    removeExperience(id: $id) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation RemoveExperience($id: ID!) {\n    removeExperience(id: $id) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddEducation($input: AddEducationInput!) {\n    addEducation(input: $input) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation AddEducation($input: AddEducationInput!) {\n    addEducation(input: $input) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateEducation($id: ID!, $input: UpdateEducationInput!) {\n    updateEducation(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateEducation($id: ID!, $input: UpdateEducationInput!) {\n    updateEducation(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RemoveEducation($id: ID!) {\n    removeEducation(id: $id) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation RemoveEducation($id: ID!) {\n    removeEducation(id: $id) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddCertification($input: AddCertificationInput!) {\n    addCertification(input: $input) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation AddCertification($input: AddCertificationInput!) {\n    addCertification(input: $input) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateCertification($id: ID!, $input: UpdateCertificationInput!) {\n    updateCertification(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCertification($id: ID!, $input: UpdateCertificationInput!) {\n    updateCertification(id: $id, input: $input) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RemoveCertification($id: ID!) {\n    removeCertification(id: $id) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  mutation RemoveCertification($id: ID!) {\n    removeCertification(id: $id) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AddConnection($userId: ID!) {\n    addConnection(userId: $userId) {\n      ...UserCard\n    }\n  }\n',
): (typeof documents)['\n  mutation AddConnection($userId: ID!) {\n    addConnection(userId: $userId) {\n      ...UserCard\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RemoveConnection($userId: ID!) {\n    removeConnection(userId: $userId)\n  }\n',
): (typeof documents)['\n  mutation RemoveConnection($userId: ID!) {\n    removeConnection(userId: $userId)\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Me {\n    me {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  query Me {\n    me {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Profile($userId: ID!) {\n    profile(userId: $userId) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  query Profile($userId: ID!) {\n    profile(userId: $userId) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query SearchUsers($skill: String, $query: String) {\n    searchUsers(skill: $skill, query: $query) {\n      ...UserCard\n    }\n  }\n',
): (typeof documents)['\n  query SearchUsers($skill: String, $query: String) {\n    searchUsers(skill: $skill, query: $query) {\n      ...UserCard\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Connections {\n    connections {\n      ...UserCard\n    }\n  }\n',
): (typeof documents)['\n  query Connections {\n    connections {\n      ...UserCard\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Connection($userId: ID!) {\n    connection(userId: $userId) {\n      ...UserFull\n    }\n  }\n',
): (typeof documents)['\n  query Connection($userId: ID!) {\n    connection(userId: $userId) {\n      ...UserFull\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query SearchConnections($skill: String) {\n    searchConnections(skill: $skill) {\n      ...UserCard\n    }\n  }\n',
): (typeof documents)['\n  query SearchConnections($skill: String) {\n    searchConnections(skill: $skill) {\n      ...UserCard\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query StreamChatToken {\n    streamChatToken {\n      token\n      apiKey\n      userId\n    }\n  }\n',
): (typeof documents)['\n  query StreamChatToken {\n    streamChatToken {\n      token\n      apiKey\n      userId\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
