import { graphql } from './generated';

export const UserCardFragment = graphql(`
  fragment UserCard on User {
    id
    name
    email
    image
    title
    description
    location
    skills
    followers
    following
  }
`);

export const UserFullFragment = graphql(`
  fragment UserFull on User {
    id
    name
    email
    image
    title
    description
    location
    about
    skills
    followers
    following
    activities
    saved
    experience {
      id
      role
      company
      period
      description
    }
    education {
      id
      school
      degree
      period
    }
    certifications {
      id
      name
      issuer
      date
    }
  }
`);
