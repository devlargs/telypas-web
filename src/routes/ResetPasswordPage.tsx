import { useState, type FormEvent } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { authClient } from '../lib/auth-client';
import { useAuthForm } from '../features/auth/useAuthForm';
import { Field } from '../components/Field/Field';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import styles from './authForm.module.css';

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { submitting, error, setError, run } = useAuthForm();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  if (!token) {
    return (
      <>
        <h1 className={styles.heading}>Invalid reset link</h1>
        <p className={styles.formError}>
          This link is missing its reset token. Request a fresh one and try again.
        </p>
        <p className={styles.switchLine}>
          <Link to="/forgot-password">Request a new link</Link>
        </p>
      </>
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    const ok = await run(() => authClient.resetPassword({ newPassword: password, token: token! }));
    if (ok) {
      navigate('/login', { replace: true, state: { resetDone: true } });
    }
  }

  return (
    <>
      <h1 className={styles.heading}>Set a new password</h1>
      <p className={styles.sub}>Make it a good one.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && (
          <p className={styles.formError} role="alert">
            {error}
          </p>
        )}
        <Field label="New password" htmlFor="password" hint="At least 8 characters.">
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <Field label="Confirm password" htmlFor="confirm">
          <Input
            id="confirm"
            type="password"
            autoComplete="new-password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </Field>
        <Button className={styles.submit} type="submit" variant="primary" loading={submitting}>
          Reset password
        </Button>
      </form>
    </>
  );
}
