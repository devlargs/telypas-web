import { useMutation, useQuery } from '@apollo/client';
import { MeQuery } from '../../graphql/queries';
import {
  UpdateProfileMutation,
  UpdateSkillsMutation,
  AddExperienceMutation,
  UpdateExperienceMutation,
  RemoveExperienceMutation,
  AddEducationMutation,
  UpdateEducationMutation,
  RemoveEducationMutation,
  AddCertificationMutation,
  UpdateCertificationMutation,
  RemoveCertificationMutation,
} from '../../graphql/mutations';
import type {
  UpdateProfileInput,
  AddExperienceInput,
  UpdateExperienceInput,
  AddEducationInput,
  UpdateEducationInput,
  AddCertificationInput,
  UpdateCertificationInput,
} from '../../graphql/generated/graphql';
import { useToast } from '../../components/Toast/ToastContext';

export function useProfileMutations() {
  const { toast } = useToast();
  const { data } = useQuery(MeQuery);
  const me = data?.me;

  const [updateProfileMutation, updateProfileState] = useMutation(UpdateProfileMutation);
  const [updateSkillsMutation, updateSkillsState] = useMutation(UpdateSkillsMutation);
  const [addExperienceMutation, addExperienceState] = useMutation(AddExperienceMutation);
  const [updateExperienceMutation, updateExperienceState] = useMutation(UpdateExperienceMutation);
  const [removeExperienceMutation] = useMutation(RemoveExperienceMutation);
  const [addEducationMutation, addEducationState] = useMutation(AddEducationMutation);
  const [updateEducationMutation, updateEducationState] = useMutation(UpdateEducationMutation);
  const [removeEducationMutation] = useMutation(RemoveEducationMutation);
  const [addCertificationMutation, addCertificationState] = useMutation(AddCertificationMutation);
  const [updateCertificationMutation, updateCertificationState] = useMutation(
    UpdateCertificationMutation,
  );
  const [removeCertificationMutation] = useMutation(RemoveCertificationMutation);

  async function guard<T>(label: string, action: () => Promise<T>): Promise<boolean> {
    try {
      await action();
      return true;
    } catch {
      toast(`Could not ${label}. Please try again.`, 'error');
      return false;
    }
  }

  return {
    me,

    updateProfile: (input: UpdateProfileInput) =>
      guard('save your profile', () =>
        updateProfileMutation({
          variables: { input },
          optimisticResponse: me
            ? {
                updateProfile: {
                  ...me,
                  name: input.name ?? me.name,
                  title: input.title ?? me.title,
                  description: input.description ?? me.description,
                  location: input.location ?? me.location,
                  about: input.about ?? me.about,
                },
              }
            : undefined,
        }),
      ),
    savingProfile: updateProfileState.loading,

    updateSkills: (skills: string[]) =>
      guard('save your skills', () =>
        updateSkillsMutation({
          variables: { skills },
          optimisticResponse: me ? { updateSkills: { ...me, skills } } : undefined,
        }),
      ),
    savingSkills: updateSkillsState.loading,

    addExperience: (input: AddExperienceInput) =>
      guard('add this experience', () => addExperienceMutation({ variables: { input } })),
    updateExperience: (id: string, input: UpdateExperienceInput) =>
      guard('update this experience', () => updateExperienceMutation({ variables: { id, input } })),
    removeExperience: (id: string) =>
      guard('remove this experience', () => removeExperienceMutation({ variables: { id } })),
    savingExperience: addExperienceState.loading || updateExperienceState.loading,

    addEducation: (input: AddEducationInput) =>
      guard('add this education', () => addEducationMutation({ variables: { input } })),
    updateEducation: (id: string, input: UpdateEducationInput) =>
      guard('update this education', () => updateEducationMutation({ variables: { id, input } })),
    removeEducation: (id: string) =>
      guard('remove this education', () => removeEducationMutation({ variables: { id } })),
    savingEducation: addEducationState.loading || updateEducationState.loading,

    addCertification: (input: AddCertificationInput) =>
      guard('add this certification', () => addCertificationMutation({ variables: { input } })),
    updateCertification: (id: string, input: UpdateCertificationInput) =>
      guard('update this certification', () =>
        updateCertificationMutation({ variables: { id, input } }),
      ),
    removeCertification: (id: string) =>
      guard('remove this certification', () => removeCertificationMutation({ variables: { id } })),
    savingCertification: addCertificationState.loading || updateCertificationState.loading,
  };
}
