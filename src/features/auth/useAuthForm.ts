import { useState } from 'react';

const FRIENDLY_ERRORS: Record<string, string> = {
  INVALID_EMAIL_OR_PASSWORD: 'That email and password combination is not right.',
  USER_ALREADY_EXISTS: 'An account with this email already exists — try signing in.',
  INVALID_EMAIL: 'That does not look like a valid email address.',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters.',
  PASSWORD_TOO_LONG: 'That password is too long.',
  INVALID_TOKEN: 'This reset link is invalid or has expired. Request a new one.',
};

interface AuthError {
  code?: string | null;
  message?: string | null;
}

export function useAuthForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run(action: () => Promise<{ error: AuthError | null }>): Promise<boolean> {
    setSubmitting(true);
    setError(null);
    try {
      const { error: authError } = await action();
      if (authError) {
        setError(
          (authError.code && FRIENDLY_ERRORS[authError.code]) ||
            authError.message ||
            'Something went wrong. Please try again.',
        );
        return false;
      }
      return true;
    } catch {
      setError('Could not reach the server. Is the API running?');
      return false;
    } finally {
      setSubmitting(false);
    }
  }

  return { submitting, error, setError, run };
}
