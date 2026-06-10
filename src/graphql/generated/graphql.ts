/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AddCertificationInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  issuer: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddEducationInput = {
  degree: Scalars['String']['input'];
  period?: InputMaybe<Scalars['String']['input']>;
  school: Scalars['String']['input'];
};

export type AddExperienceInput = {
  company: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
};

export type Certification = {
  __typename?: 'Certification';
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  issuer: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Education = {
  __typename?: 'Education';
  degree: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  period: Scalars['String']['output'];
  school: Scalars['String']['output'];
};

export type Experience = {
  __typename?: 'Experience';
  company: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  period: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCertification: User;
  /** Add a scanned-QR user to my network */
  addConnection: User;
  addEducation: User;
  addExperience: User;
  removeCertification: User;
  removeConnection: Scalars['Boolean']['output'];
  removeEducation: User;
  removeExperience: User;
  updateCertification: User;
  updateEducation: User;
  updateExperience: User;
  updateProfile: User;
  updateSkills: User;
};

export type MutationAddCertificationArgs = {
  input: AddCertificationInput;
};

export type MutationAddConnectionArgs = {
  userId: Scalars['ID']['input'];
};

export type MutationAddEducationArgs = {
  input: AddEducationInput;
};

export type MutationAddExperienceArgs = {
  input: AddExperienceInput;
};

export type MutationRemoveCertificationArgs = {
  id: Scalars['ID']['input'];
};

export type MutationRemoveConnectionArgs = {
  userId: Scalars['ID']['input'];
};

export type MutationRemoveEducationArgs = {
  id: Scalars['ID']['input'];
};

export type MutationRemoveExperienceArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateCertificationArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCertificationInput;
};

export type MutationUpdateEducationArgs = {
  id: Scalars['ID']['input'];
  input: UpdateEducationInput;
};

export type MutationUpdateExperienceArgs = {
  id: Scalars['ID']['input'];
  input: UpdateExperienceInput;
};

export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};

export type MutationUpdateSkillsArgs = {
  skills: Array<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Single connection detail */
  connection: User;
  /** The current user's connections */
  connections: Array<User>;
  /** Composite of the Better Auth user + Profile, from session */
  me: User;
  /** View any user's public profile */
  profile: User;
  /** Filter within my own connections by skill */
  searchConnections: Array<User>;
  /** Discovery: find users by skill or free-text */
  searchUsers: Array<User>;
  /** Mint a GetStream user token so the client SDK can connect to chat */
  streamChatToken: StreamChatToken;
};

export type QueryConnectionArgs = {
  userId: Scalars['ID']['input'];
};

export type QueryProfileArgs = {
  userId: Scalars['ID']['input'];
};

export type QuerySearchConnectionsArgs = {
  skill?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySearchUsersArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
  skill?: InputMaybe<Scalars['String']['input']>;
};

export type StreamChatToken = {
  __typename?: 'StreamChatToken';
  apiKey: Scalars['String']['output'];
  token: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UpdateCertificationInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEducationInput = {
  degree?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  school?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateExperienceInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  about: Scalars['String']['output'];
  activities: Scalars['Int']['output'];
  certifications: Array<Certification>;
  description: Scalars['String']['output'];
  education: Array<Education>;
  email: Scalars['String']['output'];
  experience: Array<Experience>;
  followers: Scalars['Int']['output'];
  following: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  saved: Scalars['Int']['output'];
  skills: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type UserCardFragment = {
  __typename?: 'User';
  id: string;
  name: string;
  email: string;
  image?: string | null;
  title: string;
  description: string;
  location: string;
  skills: Array<string>;
  followers: number;
  following: number;
};

export type UserFullFragment = {
  __typename?: 'User';
  id: string;
  name: string;
  email: string;
  image?: string | null;
  title: string;
  description: string;
  location: string;
  about: string;
  skills: Array<string>;
  followers: number;
  following: number;
  activities: number;
  saved: number;
  experience: Array<{
    __typename?: 'Experience';
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
  }>;
  education: Array<{
    __typename?: 'Education';
    id: string;
    school: string;
    degree: string;
    period: string;
  }>;
  certifications: Array<{
    __typename?: 'Certification';
    id: string;
    name: string;
    issuer: string;
    date: string;
  }>;
};

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;

export type UpdateProfileMutation = {
  __typename?: 'Mutation';
  updateProfile: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type UpdateSkillsMutationVariables = Exact<{
  skills: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type UpdateSkillsMutation = {
  __typename?: 'Mutation';
  updateSkills: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type AddExperienceMutationVariables = Exact<{
  input: AddExperienceInput;
}>;

export type AddExperienceMutation = {
  __typename?: 'Mutation';
  addExperience: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type UpdateExperienceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateExperienceInput;
}>;

export type UpdateExperienceMutation = {
  __typename?: 'Mutation';
  updateExperience: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type RemoveExperienceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type RemoveExperienceMutation = {
  __typename?: 'Mutation';
  removeExperience: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type AddEducationMutationVariables = Exact<{
  input: AddEducationInput;
}>;

export type AddEducationMutation = {
  __typename?: 'Mutation';
  addEducation: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type UpdateEducationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateEducationInput;
}>;

export type UpdateEducationMutation = {
  __typename?: 'Mutation';
  updateEducation: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type RemoveEducationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type RemoveEducationMutation = {
  __typename?: 'Mutation';
  removeEducation: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type AddCertificationMutationVariables = Exact<{
  input: AddCertificationInput;
}>;

export type AddCertificationMutation = {
  __typename?: 'Mutation';
  addCertification: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type UpdateCertificationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateCertificationInput;
}>;

export type UpdateCertificationMutation = {
  __typename?: 'Mutation';
  updateCertification: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type RemoveCertificationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type RemoveCertificationMutation = {
  __typename?: 'Mutation';
  removeCertification: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type AddConnectionMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;

export type AddConnectionMutation = {
  __typename?: 'Mutation';
  addConnection: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    skills: Array<string>;
    followers: number;
    following: number;
  };
};

export type RemoveConnectionMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;

export type RemoveConnectionMutation = { __typename?: 'Mutation'; removeConnection: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type ProfileQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;

export type ProfileQuery = {
  __typename?: 'Query';
  profile: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type SearchUsersQueryVariables = Exact<{
  skill?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
}>;

export type SearchUsersQuery = {
  __typename?: 'Query';
  searchUsers: Array<{
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    skills: Array<string>;
    followers: number;
    following: number;
  }>;
};

export type ConnectionsQueryVariables = Exact<{ [key: string]: never }>;

export type ConnectionsQuery = {
  __typename?: 'Query';
  connections: Array<{
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    skills: Array<string>;
    followers: number;
    following: number;
  }>;
};

export type ConnectionQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;

export type ConnectionQuery = {
  __typename?: 'Query';
  connection: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    about: string;
    skills: Array<string>;
    followers: number;
    following: number;
    activities: number;
    saved: number;
    experience: Array<{
      __typename?: 'Experience';
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      __typename?: 'Education';
      id: string;
      school: string;
      degree: string;
      period: string;
    }>;
    certifications: Array<{
      __typename?: 'Certification';
      id: string;
      name: string;
      issuer: string;
      date: string;
    }>;
  };
};

export type SearchConnectionsQueryVariables = Exact<{
  skill?: InputMaybe<Scalars['String']['input']>;
}>;

export type SearchConnectionsQuery = {
  __typename?: 'Query';
  searchConnections: Array<{
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    image?: string | null;
    title: string;
    description: string;
    location: string;
    skills: Array<string>;
    followers: number;
    following: number;
  }>;
};

export type StreamChatTokenQueryVariables = Exact<{ [key: string]: never }>;

export type StreamChatTokenQuery = {
  __typename?: 'Query';
  streamChatToken: {
    __typename?: 'StreamChatToken';
    token: string;
    apiKey: string;
    userId: string;
  };
};

export const UserCardFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserCardFragment, unknown>;
export const UserFullFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserFullFragment, unknown>;
export const UpdateProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateProfileInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateProfile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateSkillsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateSkills' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skills' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateSkills' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skills' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skills' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateSkillsMutation, UpdateSkillsMutationVariables>;
export const AddExperienceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddExperience' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddExperienceInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addExperience' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddExperienceMutation, AddExperienceMutationVariables>;
export const UpdateExperienceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateExperience' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateExperienceInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateExperience' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateExperienceMutation, UpdateExperienceMutationVariables>;
export const RemoveExperienceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveExperience' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeExperience' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RemoveExperienceMutation, RemoveExperienceMutationVariables>;
export const AddEducationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddEducation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddEducationInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addEducation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddEducationMutation, AddEducationMutationVariables>;
export const UpdateEducationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateEducation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateEducationInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateEducation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateEducationMutation, UpdateEducationMutationVariables>;
export const RemoveEducationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveEducation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeEducation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RemoveEducationMutation, RemoveEducationMutationVariables>;
export const AddCertificationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddCertification' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddCertificationInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addCertification' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddCertificationMutation, AddCertificationMutationVariables>;
export const UpdateCertificationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateCertification' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateCertificationInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateCertification' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateCertificationMutation, UpdateCertificationMutationVariables>;
export const RemoveCertificationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveCertification' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeCertification' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RemoveCertificationMutation, RemoveCertificationMutationVariables>;
export const AddConnectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddConnection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addConnection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserCard' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddConnectionMutation, AddConnectionMutationVariables>;
export const RemoveConnectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveConnection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeConnection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RemoveConnectionMutation, RemoveConnectionMutationVariables>;
export const MeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Me' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const ProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Profile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const SearchUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchUsers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skill' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'searchUsers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skill' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skill' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'query' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserCard' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchUsersQuery, SearchUsersQueryVariables>;
export const ConnectionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Connections' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'connections' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserCard' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConnectionsQuery, ConnectionsQueryVariables>;
export const ConnectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Connection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'connection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFull' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFull' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
          { kind: 'Field', name: { kind: 'Name', value: 'activities' } },
          { kind: 'Field', name: { kind: 'Name', value: 'saved' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'experience' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'education' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'school' } },
                { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
                { kind: 'Field', name: { kind: 'Name', value: 'period' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'certifications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'issuer' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ConnectionQuery, ConnectionQueryVariables>;
export const SearchConnectionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchConnections' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skill' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'searchConnections' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skill' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skill' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserCard' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'location' } },
          { kind: 'Field', name: { kind: 'Name', value: 'skills' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followers' } },
          { kind: 'Field', name: { kind: 'Name', value: 'following' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchConnectionsQuery, SearchConnectionsQueryVariables>;
export const StreamChatTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'StreamChatToken' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'streamChatToken' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                { kind: 'Field', name: { kind: 'Name', value: 'apiKey' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StreamChatTokenQuery, StreamChatTokenQueryVariables>;
