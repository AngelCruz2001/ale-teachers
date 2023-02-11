import { IAuthResponse } from "interfaces/Auth.interface";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: IAuthResponse & DefaultSession["user"];
  }
}