import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { openDb } from '../../../lib/db';
import bcrypt from 'bcryptjs';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Email',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const db = await openDb();
        const user = await db.get('SELECT * FROM users WHERE email = ?', [credentials.email]);
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.id, email: user.email };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
  },
});