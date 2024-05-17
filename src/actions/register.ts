"use server"

import { RegisterSchema } from "@/schemas"
import * as z from "zod"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validated = RegisterSchema.safeParse(values)
  if (!validated.success) {
    return { error: "Invalid form data" }
  }

  const { email, password, name } = validated.data
  const hashed = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)
  if (existingUser) return { error: "Email already in use." }

  await db.user.create({
    data: { email, password: hashed, name },
  })

  //TODO: Send email confirmation

  return { success: "User created!" }
}
