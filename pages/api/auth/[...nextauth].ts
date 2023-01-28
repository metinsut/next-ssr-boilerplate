import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email !== "metindir@gmail.com" ||
          credentials?.password !== "123456"
        ) {
          throw new Error("invalid credentials");
        }

        const user = {
          id: "1234",
          name: "Metin Süt",
          email: "metindir@gmail.com",
          token: "myToken12345",
          role: "admin",
        };

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

export default NextAuth(authOptions);
