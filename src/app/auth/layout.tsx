import React from "react"

interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="h-full flex items-center justify-center bg-app">
      {children}
    </div>
  )
}
