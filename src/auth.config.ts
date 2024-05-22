import type { NextAuthConfig } from "next-auth"
import bcrypt from "bcryptjs"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "./data/user"

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validated = LoginSchema.safeParse(credentials)

        if (validated.success) {
          const { email, password } = validated.data

          const user = await getUserByEmail(email)
          if (!user || !user.password) return null

          const match = await bcrypt.compare(password, user.password)
          if (match) return user
        }
        return null
      },
    }),
  ],
} satisfies NextAuthConfig
