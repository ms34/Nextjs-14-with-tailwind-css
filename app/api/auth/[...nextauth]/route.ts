import { envList } from "@/app.config";
import NextAuth from "next-auth";
import GitHubProviders from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProviders({
      clientId: envList.GITHUB_CLIENT_ID,
      clientSecret: envList.GITHUB_CLIENT_SECRET,
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
