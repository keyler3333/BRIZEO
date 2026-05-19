import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div>
        <h1>BRIZO</h1>
        <button onClick={() => signIn('github')}>Sign in with GitHub</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
