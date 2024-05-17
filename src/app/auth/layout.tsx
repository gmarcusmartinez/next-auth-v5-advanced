import React from "react"

interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="h-full flex flex-col items-center bg-app">
      <div className="w-full h-16 bg-main mb-6 shadow-md" />
      {children}
    </div>
  )
}
