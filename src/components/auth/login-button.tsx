"use client"

interface Props {
  children: React.ReactNode
  mode?: "modal" | "redirect"
  asChild?: boolean
}

import { useRouter } from "next/navigation"
import React from "react"

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: Props) => {
  const router = useRouter()

  const onClick = () => {
    router.push("/auth/login")
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  )
}
