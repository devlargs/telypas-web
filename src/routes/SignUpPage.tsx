import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import { authClient } from '../lib/auth-client';
import { useAuthForm } from '../features/auth/useAuthForm';
import { Field } from '../components/Field/Field';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import styles from './authForm.module.css';

export function SignUpPage() {
  const navigate = useNavigate();
  const { submitting, error, setError, run } = useAuthForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    const ok = await run(() => authClient.signUp.email({ name, email, password }));
    if (ok) navigate('/', { replace: true });
  }

  return (
    <>
      <h1 className={styles.heading}>Make your mark</h1>
      <p className={styles.sub}>A profile that says what you actually do.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && (
          <p className={styles.formError} role="alert">
            {error}
          </p>
        )}
        <Field label="Full name" htmlFor="name" counter={{ current: name.length, max: 120 }}>
          <Input
            id="name"
            autoComplete="name"
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
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
        <Field label="Password" htmlFor="password" hint="At least 8 characters.">
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
          Create account
        </Button>
      </form>
      <p className={styles.switchLine}>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </>
  );
}
