import { useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { authClient } from '../lib/auth-client';
import { useAuthForm } from '../features/auth/useAuthForm';
import { Field } from '../components/Field/Field';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import styles from './authForm.module.css';

export function ForgotPasswordPage() {
  const { submitting, error, run } = useAuthForm();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await run(() =>
      authClient.requestPasswordReset({
        email,
        redirectTo: `${window.location.origin}/reset-password`,
      }),
    );
    // Always show the neutral confirmation — never reveal whether the email exists.
    setSent(true);
  }

  if (sent) {
    return (
      <>
        <h1 className={styles.heading}>Check your inbox</h1>
        <p className={styles.success}>
          If an account exists for {email}, a reset link is on its way.
        </p>
        <p className={styles.switchLine}>
          <Link to="/login">Back to sign in</Link>
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className={styles.heading}>Forgot your password?</h1>
      <p className={styles.sub}>We will send you a link to set a new one.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && (
          <p className={styles.formError} role="alert">
            {error}
          </p>
        )}
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Button className={styles.submit} type="submit" variant="primary" loading={submitting}>
          Send reset link
        </Button>
      </form>
      <p className={styles.switchLine}>
        Remembered it after all? <Link to="/login">Sign in</Link>
      </p>
    </>
  );
}
