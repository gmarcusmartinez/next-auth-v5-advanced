"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Props {
  href: string
  label: string
}

export const BackButton = ({ href, label }: Props) => {
  return (
    <Button className="text-white w-full" size="sm" asChild variant="link">
      <Link href={href}>{label}</Link>
    </Button>
  )
}
