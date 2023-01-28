import NextAuth, { DefaultSession } from "next-auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { UserSession } from "./auth";

declare module "next-auth" {
  interface Session {
    user: UserSession & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserSession;
  }
}
