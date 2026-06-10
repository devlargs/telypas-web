import { useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { authClient } from '../lib/auth-client';
import { useAuthForm } from '../features/auth/useAuthForm';
import { Field } from '../components/Field/Field';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import styles from './authForm.module.css';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { submitting, error, run } = useAuthForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const from = (location.state as { from?: string } | null)?.from ?? '/';

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = await run(() => authClient.signIn.email({ email, password }));
    if (ok) navigate(from, { replace: true });
  }

  return (
    <>
      <h1 className={styles.heading}>Welcome back</h1>
      <p className={styles.sub}>Sign in to pick up where you left off.</p>
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
        <Field label="Password" htmlFor="password">
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <Link className={styles.forgotLink} to="/forgot-password">
          Forgot password?
        </Link>
        <Button className={styles.submit} type="submit" variant="primary" loading={submitting}>
          Sign in
        </Button>
      </form>
      <p className={styles.switchLine}>
        New here? <Link to="/signup">Create an account</Link>
      </p>
    </>
  );
}
