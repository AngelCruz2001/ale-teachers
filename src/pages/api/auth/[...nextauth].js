import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "login",
      credentials: {
        id: { label: "ID", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { id, password } = credentials;
          const response = await fetch(
            `https://api.alejandria.edu.mx/api-ale/v1/auth/login`,
            {
              headers: {
                "Content-Type": "application/json",
                cookie: "",
              },
              method: "POST",
              body: JSON.stringify({
                id,
                password,
              }),
            }
          );
          const res = await response.json();
          return res;
        } catch (error) {
          console.log({ error });
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      // session callback is called whenever a session for that particular user is checked
      // in above function we created token.user=user
      session.user = token;
      // you might return this in new version
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    error: "/",
  },
});
