import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import Auth0Provider from "next-auth/providers/auth0";
import "dotenv/config";

export const authOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    // additional configurations
    callbacks: {
      async jwt({ token, account }) {
        //     // Persist the OAuth access_token to the token right after signin
        if (account) {
          token.accessToken = account.access_token;
        }
        return token;
      },
      async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.accessToken = token.accessToken;
        user;
        return session;
      },
    },
  },
};

export default NextAuth(authOptions);
