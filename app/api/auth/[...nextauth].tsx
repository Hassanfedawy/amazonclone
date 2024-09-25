import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
      }),
      
    // ...add more providers here
  ],
};

const handler = NextAuth(authOptions);

// Export both GET and POST methods to support NextAuth's authentication handling
export { handler as GET, handler as POST };
