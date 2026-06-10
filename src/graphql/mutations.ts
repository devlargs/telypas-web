import { graphql } from './generated';

export const UpdateProfileMutation = graphql(`
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      ...UserFull
    }
  }
`);

export const UpdateSkillsMutation = graphql(`
  mutation UpdateSkills($skills: [String!]!) {
    updateSkills(skills: $skills) {
      ...UserFull
    }
  }
`);

export const AddExperienceMutation = graphql(`
  mutation AddExperience($input: AddExperienceInput!) {
    addExperience(input: $input) {
      ...UserFull
    }
  }
`);

export const UpdateExperienceMutation = graphql(`
  mutation UpdateExperience($id: ID!, $input: UpdateExperienceInput!) {
    updateExperience(id: $id, input: $input) {
      ...UserFull
    }
  }
`);

export const RemoveExperienceMutation = graphql(`
  mutation RemoveExperience($id: ID!) {
    removeExperience(id: $id) {
      ...UserFull
    }
  }
`);

export const AddEducationMutation = graphql(`
  mutation AddEducation($input: AddEducationInput!) {
    addEducation(input: $input) {
      ...UserFull
    }
  }
`);

export const UpdateEducationMutation = graphql(`
  mutation UpdateEducation($id: ID!, $input: UpdateEducationInput!) {
    updateEducation(id: $id, input: $input) {
      ...UserFull
    }
  }
`);

export const RemoveEducationMutation = graphql(`
  mutation RemoveEducation($id: ID!) {
    removeEducation(id: $id) {
      ...UserFull
    }
  }
`);

export const AddCertificationMutation = graphql(`
  mutation AddCertification($input: AddCertificationInput!) {
    addCertification(input: $input) {
      ...UserFull
    }
  }
`);

export const UpdateCertificationMutation = graphql(`
  mutation UpdateCertification($id: ID!, $input: UpdateCertificationInput!) {
    updateCertification(id: $id, input: $input) {
      ...UserFull
    }
  }
`);

export const RemoveCertificationMutation = graphql(`
  mutation RemoveCertification($id: ID!) {
    removeCertification(id: $id) {
      ...UserFull
    }
  }
`);

export const AddConnectionMutation = graphql(`
  mutation AddConnection($userId: ID!) {
    addConnection(userId: $userId) {
      ...UserCard
    }
  }
`);

export const RemoveConnectionMutation = graphql(`
  mutation RemoveConnection($userId: ID!) {
    removeConnection(userId: $userId)
  }
`);
