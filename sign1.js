import { signIn } from 'next-auth/client';

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn('credentials', { email: 'test@example.com', password: 'password' })}>
        Sign in
      </button>
    </div>
  );
}