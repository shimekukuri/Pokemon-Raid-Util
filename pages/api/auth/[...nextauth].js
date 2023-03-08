import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '@/utilities/db/db';
import User from '@/models/User';
import bcryptjs from 'bcryptjs';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log(credentials);
        try {
          await db.connect();
          const user = await User.findOne({
            email: credentials.email,
          });
          await db.disconnect();
          if (
            user &&
            bcryptjs.compareSync(credentials.password, user.password)
          ) {
            return {
              _id: user._id,
              name: user.name,
              email: user.email,
              iamge: 'f',
            };
          }
        } catch {
          await db.disconnect();
        }
        throw new Error('invalid password or email.');
      },
    }),
  ],
});
