import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import React from "react"
import { Header } from "../header/header"
import { BackButton } from "../back-button/back-button"

export const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md bg-main border-0">
      <CardHeader>
        <Header label="Oops! Something went wrong" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  )
}
